---
title: "Getting a vanity phone number with 4 repeating digits"
date: 2022-05-28 15:06:28
header-img: "/images/verizon-search.png"
---

I find that it's pretty useful to have access to multiple phone numbers. Any time a site offers a discount if you give them their phone number, or when you want to be more anonymous online and a service needs a number, it's nice to have a number that's more than a burner but not your main number. I had heard of the Verizon My Numbers service and thought it would be cool to have a few extra numbers for cases like these. I also wanted a number with multiple consecutive digits, both because it was easier to remember and for the cool factor.

{% include image.html file="verizon-search" alt="Verizons search UI"  style="max-height: 400px;height: auto; max-width: 100%;"%}

Their UI was pretty bad, and it was quite slow. It also wouldn't let you search without an area code, and the majority of area codes that I tried said that they didn't have any numbers associated with them. I figured it would be faster to do this programatically.

## Finding the endpoints

I used burpsuite to find out which API endpoint Verizon was hitting to fetch the available phone numbers.

{% include image.html file="verizon-search-endpoint" alt="Verizons search endpoint"%}

From here I could just export it to code - my preferred method is to copy the request as curl from within BurpSuite and then use [a tool like CurlConverter](https://curlconverter.com/) to turn it into the language of choice, although BurpSuite does have plugins that do this natively as well.

## Calling the API programatically

Curl converter gave me a nice little code snippet that I could use. I put it into a jupyter notebook and was happy to see it all worked. Their endpoint didn't seem to use any signing or on-device auth that would've made this difficult, besides a static basic auth token as an HTTP header.

```py
import requests

headers = {
    'Host': 'api-v.vzmessages.com',
    'Cache-Control': 'no-cache',
    'Connection': 'close',
    'Accept': '*/*',
    'User-Agent': 'Verizon%20My%20Numbers/1 CFNetwork/1333.0.4 Darwin/21.5.0',
    'Accept-Language': 'en-US,en;q=0.9',
    'Authorization': 'Basic <Auth-Token>',
}

params = {
    'state': 'CA',
    'acode': '213',
}

response = requests.get('https://api-v.vzmessages.com/VirtualNumber/listOfMVNs/US', params=params, headers=headers, verify=False)
```

{% include image.html file="verizon-resp" alt="Verizons search endpoint response" %}

It seemed like multiple calls to this endpoint with the same params gave different replies, which meant it was non deterministic.

It also seemed like if you removed the params, it would remove the filter and return back many more numbers - I didn't _really_ care what the area code was, so removing the params should make it easier to find a number I liked.

I wrote a quick script to repeatedly call the API and try and find a number with at least 3 consecutive numbers.

```py
def contains_cons(num):
    for i in range(len(num) - 2):
        if num[i] == num[i + 1] and num[i + 1] == num[i + 2]:
            return True
    return False
```

and then just kept calling that infinitely.

```py
seen = set()
while True:
    response = requests.get('https://api-v.vzmessages.com/VirtualNumber/listOfMVNs/US', headers=headers)
    nums = response.json()
    for num in nums:
        if num in seen:
            continue
        seen.add(num)
        is_valid = contains_cons(num)
        if is_valid:
            print(num)
            break
```

## Finding valid numbers

I let this run for a few minutes and checked back and found that there were quite a few good candidates.

{% include image.html file="verizon-success" alt="Verizons numbers with consecutive digits" %}

These are the numbers that had at least three consecutive digits (along with the number I actually ended up using, blacked out).

## Purchasing the number

I went through and bought a dummy number to figure out how to purchase the number programatically, and then did the same method as above to purchase it. Luckily there weren't any unique IDs or anything, I could just swap out the number and it would work.

```py
import requests

headers = {
    'Host': 'api-v.vzmessages.com',
    'User-Agent': 'Verizon%20My%20Numbers/1 CFNetwork/1333.0.4 Darwin/21.5.0',
    'Connection': 'close',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
}

json_data = {
    'countryCode': 'US',
    'zipcode': '<your billing zipcode',
    'deviceId': '<your device id>',
    'contentId': 'Content2',
    'price': '15',
    'mvn': '<number you want>',
    'mdn': '<your hard line number>',
}

response = requests.post('https://api-v.vzmessages.com/VirtualNumber/purchase', headers=headers, json=json_data)
```

## Success

Using this I was able to purchase the number, and now it shows up in the app. One drawback is that it's not really integrated fully in your phone - for instance, iMessages to that number won't work, and the calls need to be made through the app. It's still nice to have, and a nice number to give out when you don't want to give out your real one.

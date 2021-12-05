---
title: "Building an OpenTable bot"
date: 2021-12-03 17:55:35
header-img: "/images/opentable-results.png"
---

New York City has some of the best restaurants in the world, with some of the most competitive reservations to match. Some of the hottest restaurants are booked out months in advance, and sell out within minutes of opening their reservations. There are a few restaurants that I've tried to book to no avail - I would search for future availability, but OpenTables tool only lets you set a notification for a single day and time range.

I wanted to see if it would be possible to set up a script to monitor for changes, and to alert me any time there was any availability. There was one restaurant in particular, Chef's Table at Brooklyn Fare, that I wanted to book for early next year.


# Finding their API routes

## Getting availability

I fired up BurpSuite and set it up. I navigated to their restaurant page and was happy to see that there wasn't any certificate stapling going on, and the response was clean JSON (the recent rise of protobufs and graphql have made clean API discovery a bit harder).

{% include image.html file="opentable-availability" %}

Fortunately for us, it seemed like there was a pretty clean API to fetch the availability of any restaurant - a simple `PUT` to https://mobile-api.opentable.com/api/v3/restaurant/availability request with the following body:


```json
{
    "forceNextAvailable": "true",
    "includeNextAvailable": true,
    "availabilityToken": "<jwt>",
    "dateTime": "2021-12-03T19:00",
    "requestTicket": "true",
    "allowPop": true,
    "attribution": {
        "partnerId": "84"
    },
    "partySize": 2,
    "includeOffers": true,
    "requestPremium": "true",
    "requestDateMessages": true,
    "rids": [
        "211123"
    ],
    "requestAttributeTables": "true"
}
```

And the response had exactly what we were looking for.

```json
{
    "dateTime": "2021-12-03T19:00",
    "availability": {
        "dateTime": "2021-12-03T19:00",
        "noTimesReasons": [
            "NoTimesExist"
        ],
        "minPartySize": 2,
        "maxPartySize": 6,
        "maxDaysInAdvance": 42,
        "id": "211123",
        "timeslots": [],
        "dateMessages": [
        ],
        "token": "eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ",
        "hasPremiumTables": false,
        "availabilityToken": "eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ"
    },
    "suggestedAvailability": ["... entry availability"],
    "experienceList": {
        "results": []
    },
    "hasPremiumTables": false,
    "dayAvailability": {
    }
}
```

A quick conversion to python then gets us:


```py
import requests
import json

cookies = {
'Some Cookies Here': '...'
}

headers = {
    'Host': 'mobile-api.opentable.com',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Ot-Sessionid': 'SessId',
    'Accept-Encoding': 'gzip, deflate',
    'Authorization': 'Bearer <TOKEN>',
    'User-Agent': 'com.contextoptional.OpenTable/15.2.0.16; iPhone; iOS/15.1.1; 3.0;',
    'Content-Length': '415',
    'Accept-Language': 'en-US;q=1.0,en-GB;q=0.7,en;q=0.5,*;q=0.3',
    'Connection': 'close',
}

data = {
    "forceNextAvailable": "true",
    "includeNextAvailable": True,
    "availabilityToken": "<jwt>",
    "dateTime": "2021-12-03T19:00",
    "requestTicket": "true",
    "allowPop": True,
    "attribution": {
        "partnerId": "84"
    },
    "partySize": 2,
    "includeOffers": True,
    "requestPremium": "true",
    "requestDateMessages": True,
    "rids": [
        "211123"
    ],
    "requestAttributeTables": "true"
}

response = requests.put('https://mobile-api.opentable.com/api/v3/restaurant/availability', headers=headers, cookies=cookies, data=json.dumps(data), verify=False)
```

Success! I then tried removing all non essential cookies and headers, and it still worked - the only thing that mattered were the `Authorization` and `Content-Type` request headers.

Another interesting thing was the `availabilityToken` in the request body. It clearly looked like a jwt (any time you see `ey` in a string your first thought should be jwt, much like a string ending in `=` should make you think base64), but when I put in a JWT debugger it looked like a simple flag mechanism.


{% include image.html file="opentable-jwt" %}

```
{
  "v": 2,
  "m": 1,
  "p": 1,
  "s": 0,
  "n": 0
}
```

My request to Chef's Table at Brooklyn Fare had `m` and `p` set to 0, whereas my request for another restaurant with a lot of availability had them set to 1. Swapping out the jwt's led to the same response, just with a different token for the available bookings.

The time slots were an array of objects with this format:

```json
{
    "dateTime": "2021-12-06T15:30",
    "available": true,
    "redemptionTier": "GreatDeal",
    "diningAreas": [
        {
            "id": "1",
            "isDefaultArea": true,
            "availableAttributes": [
                "default",
                "outdoor"
            ]
        }
    ],
    "token": "<jwt>",
    "slotHash": "<hash>",
    "points": 100,
    "type": "Standard",
    "attributes": [
        "default",
        "outdoor"
    ],
    "priceAmount": 0
}
```

The `slotHash` is the unique ID for this given reservation.

## Booking a time

I made a dummy booking with a restaurant that had loads of availability. When you go through their flow, they first fire off a reservation "lock", that guantees you that spot, and once you've finished whatever questionnaire the restaurant might have (seating preferences, etc), it fires off another request to complete the reservation.

The lock fires a `POST` to `/api/v1/reservation/<restaurant_id>/lock`, with this body:

```json
{
    "partySize": 2,
    "dateTime": "2021-12-06T15:30",
    "selectedDiningArea": {
        "tableAttribute": "default",
        "diningAreaId": "1"
    },
    "hash": "<hash>",
    "attribution": {
        "partnerId": "84"
    }
}
```

If your request is valid and that slot has not been locked by someone else, the response will now include a unique ID that corresponds to that reservation:

```json
{
    "id": "<numericIdOfReservation>",
    "rid": "19306",
    "date": "2021-12-06T15:30",
    "partySize": 2,
    "offerLockId": "0",
    "stripeKey": "pk_live_<STRIPEKEY>",
    "creditCardCancellationPolicy": {
        "cancellable": true,
        "cancellationCutoffDate": "2021-12-04T17:00"
    },
    "occasions": [
        "birthday",
        "anniversary",
        "date",
        "special_occasion",
        "business_meal"
    ]
}
```

The final step is to fire one last `POST` request to `/api/v1/reservation/<restaurant_id>` with a much larger body:

```json
{
    "diningFormOptIn": true,
    "partySize": 2,
    "gpid": "<GPID>",
    "countryId": "US",
    "attribution": {
        "partnerId": "84"
    },
    "loyaltyProgramOptIn": true,
    "optIns": {
        "smsNotifications": {
            "reservationSms": true,
            "waitlistSms": false
        },
        "openTableDataSharing": {
            "businessPartners": true,
            "corporateGroup": true,
            "pointOfSale": true
        },
        "dataSharing": {
            "guestShare": true,
            "dinerProfileShare": true,
            "sync": true
        },
        "restaurantEmailMarketing": {
            "restaurantEmails": true
        },
        "emailNotifications": {
            "diningFeedback": true
        },
        "emailMarketing": {
            "newHot": false,
            "restaurantWeek": false,
            "spotlight": false,
            "product": false,
            "promotional": false,
            "insider": false,
            "dinersChoice": false
        }
    },
    "rewardTier": "GreatDeal",
    "campaignId": "7",
    "hash": "<HASH>",
    "points": 100,
    "loadInvitations": false,
    "number": "<PHONENUMBER>",
    "notes": "",
    "slotAvailabilityToken": "<TOKEN>",
    "selectedDiningArea": {
        "diningAreaId": "1",
        "tableAttribute": "default"
    },
    "lockId": "PreviouslyObtainedLockId",
    "dinerId": "<DINERID>",
    "location": {
        "latitude": 40.74,
        "longitude": -73.98
   	},
    "dateTime": "2021-12-06T15:30",
    "uberUuid": "<UUID>"
}
```

## Canceling a reservation

Not that I'd necessarily want to cancel a reservation, but it looks as easy as a `DELETE` request to `DELETE /api/v3/reservation/<restaurant_id>/<confirmation_number>`


# Hooking it all up

I put it all together into a python script, [which be found on GitHub](https://github.com/jonluca/OpenTable-Reservation-Maker). This will take in a restaurant ID and your time range, and automatically book it once it becomes available.

{% include image.html file="opentable-code" %}


Finally, just for the hell of it, I hooked it up to twilio so that it would send a text message once the reservation had been booked. It will now send me a text message once a table has been booked, and save the details to a file so that it won't double book a reservation.

{% include image.html file="opentable-logs" %}


I tested it and it worked great. I've got it monitoring a few different restaurants right now, and it'll book it as soon as someone cancels or it becomes available, or the restaurant releases availability. I still need to modify it so that it works with restaurants that require a credit card transaction, but that can be saved for the next post.

{% include image.html file="opentable-results" %}


The code [can be found on GitHub](https://github.com/jonluca/OpenTable-Reservation-Maker). There isn't a way to fetch your bearer token automatically right now, or search for a restaurant, so you'll need to know those ahead of time to make this work, but you can follow the steps above (or open a PR!).

## Future work

The next site I want to automate is Tock, as they have most of the best restaurants in NY, but their endpoints are protobufs, which are a bit harder to reverse engineer. Resy is also an option, but with the Amex acquisition it's actually pretty easy to get reservations at sold out restaurants if you have an Amex Platinum card.

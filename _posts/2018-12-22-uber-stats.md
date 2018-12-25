---
title: "Uber, statistics, and a chrome extension"
date: 2018-12-22 16:39:48 +0100
header-img: "/images/uber-graphs.png"
---
<style>
    {%  include main.css  %}
</style>

Earlier this week I wanted to see how much I've spent on uber across my roughly 4 years on the platform. I realized there was no easy way to do this. One option would be to go through my bank statements, but I have used a ton of different cards over the years. I could connect all my accounts to a service like Mint and search for it there, but that was time consuming and cumbersome. The goal would be to have a first party solution provided by uber, but no such service exists. 

I started poking around Uber's [rides website](https://riders.uber.com/trips)  and found the route that Uber uses to get their trip information. It was surprisingly rich in data - it provided cost, start and end times, distance, and more. I thought it would be fairly straightforward to create a chrome extension that uses your auth token to get all your info, then processes it and shows you relevant information.  The endpoint was a `POST` request to:

```
https://riders.uber.com/api/getTripsForClient
```

<img class="centered-image" src="/images/uber-netrequest.png">
<p class="footnote">The response from the API</p>

From there I could just start make the `XMLHTTPRequest` from any JavaScript file injected into the page. The best way to do that (and have it be easily deployed and installable) was a chrome extension. 

I tried it at first and kept getting `Unauthorized` errors. I realized that the request was missing the CSRF token. However, since this was a Chrome Extension running code in the same context as the page, and since it had full access to the DOM, I could just retrieve it. Fortunately it was stored in a `<script>` tag at the very beginning of the HTML, with `id=__CSRF_TOKEN__`. I took this token, added it as a header, and the API began replying back succesfully. 

Their API returns a maximum of 50 results per query, so I simply make the first one and then call it NUM_TOTAL / 50 times more. 

```js
if (trips.pagingResult && trips.pagingResult.hasMore && isFirstRun) {
  // Request all results in increments of MAX_LIMIT until we've reached the total amount of trips
  let next = MAX_LIMIT;
  while (next < trips.count) {
    requestDataFromUber(csrf, MAX_LIMIT, next, false);
    next += MAX_LIMIT;
  }
}
```

A `trip` data element looks like:

```json
{
  "uuid": "redacted",
  "status": "COMPLETED",
  "clientUUID": "redacted",
  "driverUUID": "redacted",
  "paymentProfileUUID": "redacted",
  "cityID": 38,
  "countryID": 65,
  "vehicleViewName": "UberX",
  "vehicleViewID": 3298,
  "clientFare": 28.44,
  "currencyCode": "EUR",
  "isSurgeTrip": false,
  "begintripFormattedAddress": "Sonnenallee 168, 12059 Berlin, Germany",
  "dropoffFormattedAddress": "12529 Schönefeld, Germany",
  "requestTime": "2018-12-17T11:27:02.000Z",
  "dropoffTime": "2018-12-17T11:49:35.000Z"
}
```

However the `trip` data returned didn't include some information, such as the full receipt, car information, or the map. 

Further investigation lead to an endpoint where you can query information about a specific trip.

```
https://riders.uber.com/api/getTrip
```

This endpoing took a `POST` request with a body containing the `uuid` from the request above. It contained the following extra fields.

```json
{
	"tripMap": {
	  "url": "<maps.google.com link from start to finish>",
	  "mapType": "UBER",
	  "mapTypeCompatible": true
	},
	"receipt": {
	  "car_label": "Switching Option",
	  "distance": "14.23",
	  "distance_label_short": "km",
	  "trip_time_label": "Trip time",
	  "distance_label": "kilometers",
	  "car_make": "Toyota",
	  "duration": "19 min",
	  "vehicle_type": "UberX",
	  "car_make_label": "Make"
	}
}
```

Unfortunately the "Split Payment" wasn't returned as JSON, it was a server side rendered HTML blob. I could scrape it but did not think it would be worth the effort - plus, it would be an additional API call that slowed down the initial data collection.

This was now enough data to start running some queries. I wanted to visualize this on a page, so I built out a page that would receive the data and iterate over it to create a few graphs and populate some stats. 

Using that data I made [UberStats (source code here)](https://github.com/jonluca/Uber-Trip-Stats), which is live on the Chrome Web Store [here](https://chrome.google.com/webstore/detail/uber-trip-stats/kddlnbejbpknoedebeojobofnbdfhpnm?ref=producthunt).

<img class="centered-image" src="/images/uber.png">
<p class="footnote">Stats (personal info redacted) on my uber history</p>

<img class="centered-image" src="/images/uber-graphs.png">
<p class="footnote">Graphs of months I've taken Ubers</p>

You can get it [here](https://chrome.google.com/webstore/detail/uber-trip-stats/kddlnbejbpknoedebeojobofnbdfhpnm).
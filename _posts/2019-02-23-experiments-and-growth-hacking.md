---
title: "Experiments, growth engineering, and the perils of not disguising your API routes: Part 1"
date: 2019-02-23 13:16:46 -0700
header-img: "/images/lyft-api-network.png"
---

Most medium to large companies now runs [A/B tests](https://en.wikipedia.org/wiki/A/B_testing) and new feature experiments on segments of their user base. They are a great way to check whether a feature will have long time success, and get observable metrics on the repercussion of their changes.

I wanted to explore the methodology with which a few large companies implement their testing, as well as see if there was any potentially confidential information leakage. The actual implementation of these tests are often siloed - due to the recent growth of single page apps and separation of concerns, they rely on the _front end_ or _client_ to make the differentiation of tests, rather than making these decisions server side.

In practice this means that a lot of companies have private API routes that define their testing infrastructure. The client will request the current tests enabled for the account, and server will reply back, often with a huge list of **all** the tests the company is running. Below I explored how some of the most popular sites do it.

### Lyft

When you sign in to Lyft on the web client, one of the network requests fired is to `https://www.lyft.com/api/experiments/configurations`. This replies back with a 180kb JSON object with every experiment they are running, as well as the user's current status.

{% picture "lyft-api-network.png" --alt Lyft experiments route %}

<p class="footnote">Lyft experiments route</p>

You can see the full object [here](https://pastebin.com/01w9yG4L). There's too much information here to unpack all of it, but we can go over some of the most interesting tidbits.

There are two main keys - `assignments` and `variables`. Assignments seem to be the ones with testing - each key has you in one of their predefined groups. These seem to be:

- Control
- Static
- Treatment
- Variant\_# (where # is what variant of the experiment you are receiving)

Additionally, a significant number of experiments are prefixed with `Justin` or `Micha` - I'm not sure if these are the names of internal testing tools or employees that are prefixing their tests with their names.

While some of the experiment names are inscrutable (`exodus ETE test2: "control"`, `MichaTntTest_e89f281d-53bb-4b2b-b1b9-f28a840bb75b: "treatment"`, and `EliuTest` could mean anything), others offer a glimpse into the direction that Lyft is currently exploring. These are all guesses based on key names, but they seem to be specific enough that we can make some inference.

- `PPTacticalPriceSFOV4` - Tactical pricing at SFO - they're differentiating their pricing to SFO. Airports are a really common occurrence in their testing names.
- `PXCPaxSREarlyArrival5minWaitFromAcceptV2` with a value of `"300s_from_accept"` - How long a driver should wait after accepting?
- `PXCPaxCancelFrictionAcceptanceEmpathy` - When canceling a ride, it looks like they might be changing the wording to modify user behavior, and perhaps lower cancel rates

The next key, `variables`, seem to be mostly boolean settings on your user profile. There are currently 61 (!!) categories of variables.

These show your status as both a rider and a driver, and provides a _lot_ of insight into what Lyft thinks you are. There are keys for checking if you're excluded from certain promotions, whether they think you are abusing their system, and booleans that designate you as a Lyft employee/admin. Some of the most interesting ones are:

- `lastmile.enableIncentiveZones` - This is false for me. Could either be for drivers to go to populated areas, or as incentive zones for specific users?
- `lastmile.userLegacyMap` - Are they using different maps? Could they be transitioning off of Google Maps?
- `payments.allow_amex_on_fd` - Based on other keys, `fd` means first data. This is false for me - maybe they don't show Amex's first because of the higher interchange fees on their end, so they'd prefer riders/drivers to use Visa/Mastercard?
- `payment.intuitAffiliateCode` - For me, this value is `lyftplat18`. Perhaps this is a promo code from intuit? It's tax season right now, so maybe they're gearing up for a partnership on TurboTax, from Intuit?
- `pricing.tpa` - There's a whole section on `TPA`, which seems to stand for "Tactical Price Adjustment"; They're pretty clearly aware of people checking between Uber and Lyft for every ride, and they have different tiers and values, maybe to just barely beat their competitors
- `api.lnHasStrictEarlyCancelFee` - This is false for me, and if I had to guess this seems like a penalty for people who often cancel their rides after they've been matched with a driver.
- `cancels` - There's a whole section on "prediction" with the key `predictorEnabled`. For instance, for my account `pxcPaxNoShowTa1kPredictor` is `0.52` and `pxcPaxNoShowTa1kPredictorBkn` is `0.66`. This might be a likelihood of someone not showing up? I'm normally very respectful of my drivers and almost always am where I need to be before they show up, though, so I'm not sure if `0.52` is 52% or measuring some other metric.
- `enterprise.businessRewardsMapBanner` - Uber just recently announced Uber Rewards. Maybe they're gearing up for a business version of this, with rewards when enterprise customers use them for their ride shares?
- `publicapi.ridetypes.courier.features.supportsWalking` - Uber recently rolled out "Express Pool", which has you walk a small distance in exchange for a cheaper price. Maybe Lyft is trying the same approach?
- `service.venues.snap_to_destination_vegas_enabled` - A lot of the locations mention specific places. One of the keys is even `MacArthurBARTEnabled` - one of the BART stops in East Bay!
- `ProjectX` - This was one of the most intriguing keys. I asked a friend at Lyft and apparently it was the code name for the recent redesign!

There also seems to be very little cleaning or filtering on Lyft's end - for instance, these are some of the entries in `variables`:

```json
{
  "paultest": {
    "litetestvar": true,
    "foobar": "This is fine",
    "something": {
      "foobar": "This is fine",
      "deploytest": false
    },
    "deploytesting": {
      "deploytestfoo": true
    }
  }
}
```

and

```json
{
  "whatever": {
    "paultest33": true,
    "paultestagain": false
  }
}
```

Overall we were able to glean a lot about their current strategy, just by looking at their experiment names. An interesting test would be to set up something like Burp Suite and replace the variables from false to true and vice versa, and see if you can unlock any hidden panels in the app.

The above is less than 10% of their total experiments - I invite you to look through the full experiments [here](https://pastebin.com/01w9yG4L), and let me know what you find!

Next I decided to intercept the experiments from the mobile app. This includes quite a bit more information. You can see this [here](https://pastebin.com/ReRwPv0y).

One of the most interesting:

- `vars.client.autonomous` - It looks like Lyft is experimenting with Autonomous rides. For instance, the `console_far_stops` has Lyft Level 5 HQ and the Caltrain AV Stop, which seems to be Caltrain Autonomous Vehicle stop.

There are 1,449 keys _just in vars.client_ - this doesn't include the 162 experiments being run in `variants`, or the 44 in `holdout_variants`. Lyft is running a lot of experiments!

You can see all the information [here](https://pastebin.com/ReRwPv0y) and run your own analysis.

### Airbnb

Airbnb's iOS app makes a request to `https://api.airbnb.com/v2/mario_experiments?client=ios`.

The first thing you notice is that there's a URL parameter for the client. Putting in `ios` returns a large JSON object that's about 33kb large. If you switch it to `android`, it replies back with an object that's 44kb - apparently they're running a lot more experiments on Android!

The iOS response can be found [here](https://pastebin.com/zX1YfqKz) and the Android response can be found [here](https://pastebin.com/DaieuA6e).

The testing framework Airbnb seems to use is called Mario. Each of their experiments follows a similar format:

```json
{
  "assigned_treatment": "static",
  "description": "same translation as the one in mario_android group",
  "experiment_name": null,
  "group_name": "mario_ios",
  "locale": null,
  "parameter_name": "registraiton_log_in_menu",
  "type": "multi_language",
  "value": "Log in",
  "version": "v0"
},
```

The great part is that there's no guesswork involved - the "description" key tells us exactly what each experiment is.

Most of their experiments are focused around referrals and support. There didn't seem to be anything particularly indicative of future direction - most of it was different wordings for referrals, different button placement, and various changes to the chat support system.

Airbnb also makes a request to `https://api.airbnb.com/v2/client_configs` - although this seems to be less experiments and more just general app config, it includes some interesting tidbits as well.

Some client configs are:

```json
{
  "id": "ios.block_dates_on_preapproval",
  "launch": true
},
{
  "id": "china_fee_launched",
  "launch": false
},
```

There's a _lot_ of references to China - it seems like a major focus of Airbnb right now is expansion in the Asian market.

The full client config can be found [here](https://pastebin.com/5uaniYnn). There's a ton of experiments in there - 923 in the `experiments_assignments` category.

There seems to be a lot of new versions of existing parts of the app, such as "new_quick_pay", "new_guest_inbox", and "new_verifications_profile_completion", a lot of which are not yet in the "launched" state.

Also as an aside, my work section for Airbnb used to say "Software Engineer at Google!" - but now it says "Software Engineer at (Hidden by Airbnb)", and if I try to make it say "Google" again, the HTTP `PATCH` request replies with:

```json
{
  "error_code": 400,
  "error_type": "validation",
  "error_message": "There was an error processing the request.",
  "error_details": "the contents of the work field are disallowed",
  "error_id": "<redacted>"
}
```

They keep replacing "Google" with "(Hidden by Airbnb)" - I wonder if this is them trying to discourage users from saying "Google my name to get in contact with me directly to circumvent paying Airbnb's fees", or if they just have some feud with Google and want to limit their employees from using the app.

### Pinterest

Pinterest is currently running one of the most comprehensive experiment campaigns I've ever seen. Upon initial load of the app it makes a request to `https://api.pinterest.com/v3/users/me/`. This replies back with the full user object, as well as the `gatekeeper_experiments`.

The full experiment list is [here](https://pastebin.com/3jZPazXs). There are currently 823 active experiments. Some of the most interesting are as follows:

- `ios_skin_tone_filter` - You can now filter for make up products by your skin tone!
- `ios_use_cases_board_ideas_quiz` - Quiz on different boards?
- `activation_male_topic_image_replacement` - Gendered content differentiation?

{% picture "burp-pt.png" --alt Pinterest experiments route %}

<p class="footnote">Burp Suite intercepting Pinterest API calls</p>

### Reddit

Reddit has been making huge changes over the past year - the reddit redesign was a big change for the company, and their leadership really seems to be trying to turn reddit into a social media app. On load of the app, it requests `https://gateway.reddit.com/redditmobile/1/ios/config`. This config has all the experiments currently enabled. The full reply can be found [here](https://pastebin.com/TqhVdBkp).

They currently have 19 "buckets", which have corresponding "experiments".

A lot have to do with content discovery and reddit recommendations, such as `best_of_community_carousel` and `trending_users_carousel`.

This lends credence to them pushing for user and company based followings, rather than specific subreddits.

### Slack

Slack has a _ton_ of experiments going on.

Upon load of the app, it requests 3 experiments routes.

- `https://slack.com/api/experiments.getEZFeatures`
- `https://slack.com/api/experiments.getByUser`
- `https://slack.com/api/experiments.getByVisitor`

They all follow a similar format, which is as follows:

```json
{
  "experiment_id": "482395575254",
  "type": "team",
  "group": "treatment",
  "trigger": "finished",
  "log_exposures": false,
  "exposure_id": 54886002322
}
```

A lot of these have `"trigger": "finished"`, which might indicate that the experiment is over.

Some of the interesting ones are:

- `stripe_l3_data`
- `unified_autocomplete`
- `ios_poseidon`
- `monetization_no_flannel_login`

### Amazon

Upon launch of the iOS Amazon app, it makes a request to `https://msh.amazon.com/mwl/assignments/v2` - this replies back with a large object containing each of the "Assignments". The full reply can be found [here](https://pastebin.com/bUkZ61un).

Some of the most interesting ones are as these.

```json
"A9VS_AUGMENTED_REALITY_VIEW_DEEPLINK_129451": {
  "AllocationVersion": null,
  "MayTrigger": false,
  "Treatment": "T1"
},
```

Amazon seems to be investing in AR, possibly to view items in augmented reality before you purchase them.

```json
"AMAZON_PRINTS_LAUNCH_PHOTOBOOK_191331": {
  "AllocationVersion": "ATVPDKIKX0DER--C:1",
  "MayTrigger": true,
  "Treatment": "C"
},
```

Amazon photobooks creates photobooks from your pictures?

There's a lot of different experiments in there to unpack, although most of the others seemed fairly uninteresting.

### Tinder

Dating apps as a whole are a really interesting place for AB testing due to the way users attitude towards them shifts. Experiments in dating apps could have a much more profound effect than most other sites.

Unfortunately I didn't see anything that resembled experiments behind the scenes at Tinder. There were plenty of feature flags, like whether Tinder Groups were enabled, whether Tinder Places were enabled, or whether you were part of the "Tinder Elite", the Tinder program for famous people.

While I wasn't able to find the Tinder Experiments API route, I did want to include a mention here anyways. A few months back Tinder removed the ability to view a persons instagram - you could still see the photos but there was no link to the account or their username.

It turns out they didn't update their API though - their API still replies back with your matches Instagram handle, so you can find them that way. It would probably be fairly trivial to override `fetch` on the web client to intercept all matches and display their Instagram with a Chrome Extension.

A sample profile is below.

```json
{
  "_id": "<id>",
  "age_filter_max": 31,
  "age_filter_min": 18,
  "bio": "<bio>",
  "birth_date": "1996-02-26T23:47:24.858Z",
  "create_date": "2018-04-12T07:07:23.169Z",
  "crm_id": "<redacted>",
  "discoverable": true,
  "interests": [
    "Facebook Likes, Redacted"
  ],
  "distance_filter": 100,
  "gender": 0,
  "gender_filter": 1,
  "name": "JonLuca",
  "photos": [
   "Photos Array, Redacted"
  ],
  "photos_processing": false,
  "photo_optimizer_enabled": true,
  "photo_optimizer_has_result": false,
  "ping_time": "2019-02-23T23:47:24.301Z",
  "jobs": [
    {
      "company": {
        "displayed": true,
        "name": "Google"
      },
      "title": {
        "displayed": true,
        "name": "Engineer"
      }
    }
  ],
  "schools": [
    {
      "name": "USC",
      "displayed": true
    }
  ],
  "phone_id": "<redacted>",
  "interested_in": [
    1
  ],
  "pos": {
    "lat": 37.86871654555783,
    "lon": -122.25116702766258
  },
  "places_enabled": true,
  "autoplay_video": "always",
  "top_picks_discoverable": true,
  "photo_tagging_enabled": false
},
{
  "username": "<my instagram username, redacted>",
  "profile_picture": "<url to profile pic>",
  "media_count": 33,
  "last_fetch_time": "2019-02-22T21:16:58.696Z",
  "completed_initial_fetch": true,
  "photos": [
    "<photos array, redacted>"
  ],
  "should_reauthenticate": false
}
```

### Facebook and Instagram

I wish I could've viewed Facebook and Instagram as well. Unfortunately they do SSL Stapling - any attempts at doing Burp Suite cert replacement fails, and no routes are shown. However, they're not infallible - if you have a jailbroken phone, you can override the admin preferences and force show all experiments.

Unfortunately I have an iPhone XS Max on 12.1.4, which doesn't have a jailbreak. Once a jailbreak comes out I'll be able to override TLS Stapling by replacing the default `openssl` implementation on iOS, and we'll be able to view the routes of all companies that do SSL Stapling (Snapchat, FB, Instagram, etc).

## Conclusion

Most companies aren't obfuscating or minimizing their experiment names, which leads to information leakage. This could prove dangerous in the future - if a company is slowly rolling out a new feature, it could give their competitors an advantage.

This is a common occurrence in the industry - nearly every company is siloing off their growth engineering department, which leads to siloed off experiment routes. This in turn makes it almost trivial to figure out what they're working on, and make educated guesses at the 6 month roadmap of most tech services.

Some future companies I'd like to try and check out are Snapchat, Ebay, all the Google products and services, and LinkedIn.

There's a lot more apps and services that this methodology works with. Feel free to reach out if you're interested in finding any given companies experimentation campaigns.

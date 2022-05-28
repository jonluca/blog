---
title: "Illegal streams, decrypting m3u8's, and building a better stream experience"
date: 2018-09-22 11:14:32  -0400
header-img: "/images/vlc-hls.png"
---
Having not lived in the US for the majority of my life, I often needed to rely on illegal streams to watch America sports games. The experience on these streams is, to say the least, extremely poor. Most have some sort of crypto miner running in the background, as well as dozens of ads covering the stream. I wholeheartedly support ads for free content but unfortunately the sorts of ads that show up on these streams are terrible at best and malicious at worst. 

I wanted to do some research and figure out if there was a way to quickly export the stream and watch it elsewhere.

## Background

[HTTP Live Streaming](https://developer.apple.com/streaming/), or HLS, is one of the most common live streaming standards. There's a healthy open source community around building tools and infrastructure for HLS, most notably [hls.js](https://github.com/video-dev/hls.js/). HLS is designed for reliability and dynamically adapts to network conditions by optimizing playback for the available speed of wired and wireless connections. It's a fairly complicated spec, but the core of it is as follows.

Live streams start at the input, which is usually either a live event or a static file that is being streamed. For live events, the server requires a media encoder, which can be off-the-shelf hardware, and a way to break the encoded media into segments and save them as files. These files are then categorized into a playlist file, usually with a file extension `.m3u8`.

{% picture "hls.png" --alt HLS %}
<p class="footnote">Courtesy <a rel="noopener noreferrer" href="https://developer.apple.com/documentation/http_live_streaming">apple.com</a></p>

The client software begins by fetching the index file, using a URL that identifies the stream. The index file, in turn, specifies the location of the available media files, decryption keys, and any alternate streams available. For the selected stream, the client downloads each available media file in sequence. Each file contains a consecutive segment of the stream. Once it has a sufficient amount of data downloaded, the client begins presenting the reassembled stream to the user. A playlist, example below, is just a collection of these `ts` links.

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:9
#EXT-X-MEDIA-SEQUENCE:1808
#EXT-X-KEY:METHOD=AES-128,URI="<redacted>",IV=0xcbbc4b1952b18ab386984ab67d2df816,KEYFORMAT="identity",KEYFORMATVERSIONS="1"
#EXTINF:6.0,
media-uqjt9f59i_1808.ts
#EXTINF:4.0,
media-uqjt9f59i_1809.ts
#EXTINF:6.0,
media-uqjt9f59i_1810.ts
#EXTINF:4.0,
media-uqjt9f59i_1811.ts
#EXTINF:6.0,
media-uqjt9f59i_1812.ts
#EXTINF:4.0,
media-uqjt9f59i_1813.ts
#EXTINF:6.0,
media-uqjt9f59i_1814.ts
#EXTINF:4.0,
media-uqjt9f59i_1815.ts
```

Each of these `ts` files is the actual media chunk file, which use the file format `MPEG2-TS`.

The client is responsible for fetching any decryption keys, authenticating or presenting a user interface to allow authentication, and decrypting media files as needed.

This process continues until the client encounters the EXT-X-ENDLIST tag in the index file. If no EXT-X-ENDLIST tag is present, the index file is part of an ongoing broadcast. During ongoing broadcasts, the client loads a new version of the index file periodically. The client looks for new media files and encryption keys in the updated index and adds these URLs to its queue.

## Extraction

This means that it should be fairly trivial to extract the `.m3u8` (the live stream playlist format) from a livestream and just plug it into a site that's nothing more than a wrapper for a `<video>` element.

I experimented with it for a bit, and found the fastest way to do so would be to go to the Network tab and just filter by `m3u8`. At that point you can just copy and paste the URL into any program that plays `m3u8` and watch the stream (VLC and QuickTime both work).

{% picture "chunklist.png" --alt List of chunks %}
<p class="footnote">Finding the m3u8</p>

{% picture "vlc-hls.png" --alt VLC playing HLS standard %}
<p class="footnote">Watching the stream in VLC with no ads</p>


This works perfectly well for unobfuscated and simple streams. However, after trying a few streams like this, they stopped working. The URL and parameters would be exactly right, but VLC or any other player would not work.

The streamers had started using HTTP headers for verification.

## Issues

All of the new streams would now have additional headers, with the most common one being the "Referer" header. If the referer sent with the stream did not match the one they were expecting, they would not respond with the playlist file. Some even used jwts in HTTP only cookies to make sure their stream wasn't being ripped by others (ironic).

Unfortunately most common desktop players do not allow you to customize the cookies and headers sent with your request. I had to find another solution.

I wanted to make a tool that would quickly extract the stream and start playing it, without needing to manually type in any headers, options, or cookies. Unfortunately, Chrome does not provide easy direct access to your network requests. Only devtools extensions have access to the `chrome.devtools` API. When you do have access to that API, though, you can export any network request in the [HTTP Archive Format](http://www.softwareishard.com/blog/har-12-spec/), which contains everything you need to exactly recreate the request. 

I built a quick [chrome extension](https://github.com/jonluca/Stream-Enhancer) that would do just that. 

{% picture "scan-extension.png" --alt Chrome extension network scan %}
<p class="footnote">Scanning the current page for streams</p>

Once I had the HAR blob, I could just base64 encode it and pass it to an HTML file I created that was a simple wrapper around hls.js, seen below. 

```js
function loadHar() {
  let token = $("#token").val();
  if (token) {
    try {
      let harString = atob(token);
      let har = JSON.parse(harString);
      console.log(har);
      let request = har.request;
      let streamUrl = request.url;
      let cookies = request.cookies;
      let headers = request.headers;
      loadVideo(streamUrl, cookies, headers);
    } catch (e) {
      console.error(e);
    }
  }
}
```

{% picture "hls-index.png" --alt HLS index %}
<p class="footnote">Wrapper to hls.js</p>

At this point, I could scan a page for playlist files, retrieve the HAR, encode it, and pass it onto my small static site. It *still* didn't work though.

## Chrome Security

Chrome refuses to set certain headers, one of which is 'Referer'. Any time I tried to deconstruct the HAR and recreate the `XMLHttpRequest` it would warn me in the console that the headers I chose to set were unsafe, and refuse to apply them. There was no way around this, unfortunately. So I turned to the fastest way of keeping the work I had done so far while reaching a working solution - Electron.

{% picture "unsafe-headers.png" --alt Unsafe headers in XHR %}
<p class="footnote">Chrome refuses to set certain headers</p>

## Electron

Electron is a cross platform open source framework for creating desktop apps. While it is a little bloated (you're effectively running Chrome + Node, which makes anyone with limited amounts of RAM shudder), it is effectively a way to run webapps on your desktop. The real plus is that it doesn't suffer from the same restrictions as a static HTML page. 

I started by just porting everything over to electron - it worked pretty much out of the box, displaying my custom site. 

{% picture "electron-hls.png" --alt Electron wrapper to site %}
<p class="footnote">My static site running in Electron</p>

However, since Electron is based on Chromium, and I was making regular XMLHttpRequests, it *still* wouldn't let me apply those headers. I'd have to use a Node library to make my HTTP requests, but the library I was using (hls.js) is only a browser library, and lacks a direct integration with Node.

Fortunately hls.js provides a way to overload their HTTP loader function. I didn't really need a custom loader though - I just needed a version of XMLHttpRequest that didn't need to go through Chromium.

Enter node-xhr2-unsafe.

## Unsafe Clones

There are a few libraries out there that emulate XMLHttpRequest in Node. I found one that worked and imported it, and overloaded the custom loader with one that was exactly the same but used Node's `http` module rather than Chrome's. 

Unfortunately this library *also* refused to set unsafe headers. This time it was easy to fix though - I could just fork it, and remove the code that checks for those headers! Thus, `node-xhr2-unsafe` was born (published [here](https://github.com/jonluca/node-xhr2-unsafe) and on npm).

After all those changes, and an experience in yak shaving that would've made Donald Knuth proud, I got the streams working. I also added some options to make the viewing experience better, such as dark mode and forcing LIVE mode. 

{% picture "dark-mode-hls.png" --alt Dark mode electron app %}
<p class="footnote">Options to my static site</p>

## ESPN and Fox?

Within the last 6 months an interesting trend has arisen - the illegal streams link to the *actual ESPN, Fox, and CBS streams*. If you inspect the network requests you'll see the streamer is linking directly to these companies' streams. The streams were beautiful quality and would now hardly every stutter or have the awkward "let me minimize the window I'm streaming and check my email" problem you'd get with bootlegged streamers.

{% picture "fox-hls.png" --alt Fox network requests %}
<p class="footnote">Illegal stream to Fox</p>

How were they doing this? All the real providers use the encryption built into HLS to prevent illegal streams. 

The streamers had done something much more clever. They were actually authenticating all these streams with valid keys. They did this by setting up a proxy server to the official keyservers and wrapping the requests with the valid keys. 

Each playlist file has a field where you can go and retrieve the keys to decrypt the stream. 

{% picture "keyserver-hls.png" --alt HLS keyserver %}
<p class="footnote">Fox keyservers in the playlist file</p>

The streamers would override the XMLHttpRequest `open` function, and if the url was to the keyserver, they would send it to their proxies. 

```js
(function (open) {
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        if (url.indexOf('media-api') != -1) {
            rewrittenUrl = url.replace("https://media-api.foxsportsgo.com/programs/", "http://<redacted>.000webhostapp.com/fskey.php?gth=");
        } else if (url.indexOf('media-api') != -1) {
            rewrittenUrl = url.replace("https://media-api.foxsportsgo.com/programs/", "http://<redacted>.000webhostapp.com/fskey.php?gth=");
        }  else if (url.indexOf('playback.svcs.plus.espn.com') != -1) {
            rewrittenUrl = url.replace("https://playback.svcs.plus.espn.com/events/", "http://<redacted>.000webhostapp.com/espnplus.php?gth=");
        } else {
            rewrittenUrl = url;
        }
        open.call(this, method, rewrittenUrl, async, user, pass);
    };
})(XMLHttpRequest.prototype.open);
```

<p class="footnote">Code snippet taken directly from one of their streams</p>

At this point I wanted to know what these streams were doing. Certain streams would Base64 encode the URL actually being requested and pass it on to their proxies. 

I tried changing the URL to my person site, and what do you know, it replies back with my site! 

{% picture "site-proxied.png" --alt Proxied requests %}
<p class="footnote">Proxied site is just shuttling along the content passed to its url parameter</p>

The "aHR0cHM6Ly9qb25sdS5jYQ==" in the URL is just `https://jonlu.ca` base64 encoded.

At this point I made an educated guess - it takes the URL passed in the URL parameter, applies the hard coded authentication from the server, makes the request, then replies back with the results. However, the server isn't currently checking if the host it's sending its cookies/headers to is the correct one (i.e. ESPN, Fox, CBS, etc). 

I built up a quick HTTP server that would just dump all the requests contents to stdout. I threw this up on my server at `https://jonlu.ca/stream/` and then base64 encoded that and sent it to their proxy key server.

I monitored my logs and all of a sudden there it was - the valid session for the streamer!

{% picture "streamer-session.png" --alt Streamers session %}
<p class="footnote">Valid streamer session credentials</p>

In the interest of privacy I've commented out partial credentials, but they're entirely valid and work for any stream on ESPN. 

## Moving Forward

Unfortunately implementing reverse AES keyservers was a bit beyond the scope of what I wanted this weekend project to be. I settled for the Electron app I made - the best part is that this will stream directly to a Chromecast, or behave like a native video. There are 0 (non-stream) ads, and I have much more direct, low level control of the stream myself. This has worked for pretty much every live event I've watched online, including Apple's keynotes.

I don't think there's much else to explore here - most streams are exactly reproducible at the touch of a button, and those that aren't are so complicated that it's not worth investing the effort. If you find a stream that you can't seem to reverse I'd love to hear about it! Leave it in the comments or email me directly.

*Comments can be found on reddit, [here](https://www.reddit.com/r/jonluca/comments/9jz5l0/illegal_streams_decrypting_m3u8s_and_building_a/?)*

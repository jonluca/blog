window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "UA-90475221-1");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}
// matomo
var _paq = window._paq || [];
_paq.push(["setRequestMethod", "POST"]);
_paq.push(["disableAlwaysUseSendBeacon"]);
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.jonlu.ca"]);
_paq.push([
    "setDomains",
    ["*.jonlu.ca", "*.blog.jonlu.ca", "*.jldc.me", "*.blog.jldc.me"],
]);
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
_paq.push(["enableHeartBeatTimer", 1]);
if (document.referrer) {
    _paq.push(["setReferrerUrl", document.referrer]);
}
(function () {
    var u = "https://j.jonlu.ca/";
    _paq.push(["setTrackerUrl", u + "js/"]);
    _paq.push(["setSiteId", "1"]);

    var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.defer = true;
    g.src = u + "js/";
    s.parentNode.insertBefore(g, s);
})();
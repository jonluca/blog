import { transformSync } from "esbuild";

const trackingScriptSource = `
  (function () {
    function runWhenIdle(callback) {
      function schedule() {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(callback, { timeout: 2000 });
        } else {
          window.setTimeout(callback, 0);
        }
      }

      if (document.readyState === "complete") {
        schedule();
      } else {
        window.addEventListener("load", schedule, { once: true });
      }
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          registrations.forEach(function (registration) {
            registration.unregister();
          });
        });
      }, { once: true });
    }

    runWhenIdle(function () {
      var endpoint = "https://j.jonlu.ca/js/";
      var queue = window._paq = window._paq || [];
      queue.push(["setTrackerUrl", endpoint]);
      queue.push(["setSiteId", "1"]);
      queue.push(["setRequestMethod", "POST"]);
      queue.push(["disableAlwaysUseSendBeacon"]);

      var hostname = window.location.hostname.toLowerCase();
      if (hostname === "jonlu.ca" || hostname.endsWith(".jonlu.ca")) {
        queue.push(["setCookieDomain", ".jonlu.ca"]);
        queue.push(["setDomains", ["*.jonlu.ca", "*.jldc.me"]]);
      } else if (hostname === "jldc.me" || hostname.endsWith(".jldc.me")) {
        queue.push(["setCookieDomain", ".jldc.me"]);
        queue.push(["setDomains", ["*.jonlu.ca", "*.jldc.me"]]);
      }

      queue.push(["enableLinkTracking"]);
      queue.push(["enableHeartBeatTimer", 1]);
      queue.push(["trackPageView"]);

      var matomoScript = document.createElement("script");
      matomoScript.async = true;
      matomoScript.defer = true;
      matomoScript.src = endpoint;
      document.head.appendChild(matomoScript);
    });
  })();
`;

export const trackingScript = transformSync(trackingScriptSource, {
  minify: true,
  target: "es2017",
}).code.trim();

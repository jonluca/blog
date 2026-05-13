"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const MATOMO_ENDPOINT = "https://j.jonlu.ca/js/";
const MATOMO_SCRIPT_ID = "matomo-tracker-script";
const MATOMO_SITE_ID = "1";
const TRACKED_DOMAINS = ["*.jonlu.ca", "*.jldc.me"];

type MatomoCommand = [string, ...unknown[]];

declare global {
  interface Window {
    _paq?: MatomoCommand[];
    __matomoInitialized?: boolean;
    __matomoLastTrackedUrl?: string;
  }
}

function getMatomoQueue() {
  window._paq = window._paq || [];
  return window._paq;
}

function getCookieDomain(hostname: string) {
  const normalizedHostname = hostname.toLowerCase();

  if (normalizedHostname === "jonlu.ca" || normalizedHostname.endsWith(".jonlu.ca")) {
    return ".jonlu.ca";
  }

  if (normalizedHostname === "jldc.me" || normalizedHostname.endsWith(".jldc.me")) {
    return ".jldc.me";
  }

  return undefined;
}

function loadMatomoScript() {
  if (document.getElementById(MATOMO_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = MATOMO_SCRIPT_ID;
  script.type = "text/javascript";
  script.async = true;
  script.defer = true;
  script.src = MATOMO_ENDPOINT;
  document.head.appendChild(script);
}

function initializeMatomo() {
  if (window.__matomoInitialized) {
    return;
  }

  const _paq = getMatomoQueue();
  _paq.push(["setTrackerUrl", MATOMO_ENDPOINT]);
  _paq.push(["setSiteId", MATOMO_SITE_ID]);
  _paq.push(["setRequestMethod", "POST"]);
  _paq.push(["disableAlwaysUseSendBeacon"]);

  const cookieDomain = getCookieDomain(window.location.hostname);
  if (cookieDomain) {
    _paq.push(["setCookieDomain", cookieDomain]);
    _paq.push(["setDomains", TRACKED_DOMAINS]);
  }

  _paq.push(["enableLinkTracking"]);
  _paq.push(["enableHeartBeatTimer", 1]);

  window.__matomoInitialized = true;
}

function trackCurrentPage() {
  initializeMatomo();

  const url = window.location.href;
  if (window.__matomoLastTrackedUrl === url) {
    return;
  }

  const _paq = getMatomoQueue();
  const referrerUrl = window.__matomoLastTrackedUrl || document.referrer;

  if (referrerUrl) {
    _paq.push(["setReferrerUrl", referrerUrl]);
  }

  _paq.push(["setCustomUrl", url]);
  _paq.push(["setDocumentTitle", document.title]);
  _paq.push(["trackPageView"]);
  loadMatomoScript();

  window.__matomoLastTrackedUrl = url;
}

function MatomoPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsKey = searchParams.toString();

  useEffect(() => {
    const frame = window.requestAnimationFrame(trackCurrentPage);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, searchParamsKey]);

  useEffect(() => {
    let frame: number | undefined;

    const handleHashChange = () => {
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        frame = undefined;
        trackCurrentPage();
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}

export function MatomoAnalytics() {
  return (
    <Suspense fallback={null}>
      <MatomoPageViewTracker />
    </Suspense>
  );
}

import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./components/nav";
import { author, feedAlternates, siteDescription, siteName, siteUrl, socialImageUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [author],
  alternates: {
    types: feedAlternates(),
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImageUrl(),
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@jonluca",
    images: [{ url: socialImageUrl(), alt: siteName }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/fav/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/fav/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/fav/site.webmanifest",
  other: {
    "msapplication-TileColor": "#00aba9",
    "msapplication-TileImage": "/fav/mstile-144x144.png",
    "msapplication-config": "/fav/browserconfig.xml",
    "theme-color": "#ffffff",
    email: "jonluca.decaro@gmail.com",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

const staticSiteScripts = `
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
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", "G-L7B5KF4CGL");

      var googleScript = document.createElement("script");
      googleScript.async = true;
      googleScript.src = "https://www.googletagmanager.com/gtag/js?id=G-L7B5KF4CGL";
      document.head.appendChild(googleScript);
    });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"en"} className={cx("bg-[#f9f9f9]", GeistSans.className)}>
      <body className={"bg-[#f9f9f9] p-0 text-xs leading-relaxed text-gray-800"}>
        <a className={"skip-link"} href={"#main-content"}>
          Skip to content
        </a>
        <header className={"mt-8 text-center"}>
          <p className={"text-xl font-semibold"}>JonLuca&apos;s Blog</p>
        </header>
        <div className={"site-frame mx-auto mt-8 mb-3 max-w-[66rem] border-t border-b border-[#eee] bg-white md:rounded-md md:border"}>
          <Navbar />
          <main id={"main-content"} tabIndex={-1} className={"relative overflow-hidden p-8 text-left text-xs md:p-16"}>
            {children}
          </main>
        </div>

        <script dangerouslySetInnerHTML={{ __html: staticSiteScripts }} />
        <noscript>
          <p>
            <img src={"https://j.jonlu.ca/js/?idsite=1&rec=1"} style={{ border: 0 }} alt={""} />
          </p>
        </noscript>
      </body>
    </html>
  );
}

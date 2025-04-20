import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import Script from "next/script";
import Head from "next/head";
import { UnregisterServiceWorker } from "./components/UnregisterServiceWorker";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "JonLuca's Blog",
    template: "%s | JonLuca's Blog",
  },
  description: "JonLuca's Blog - A blog about tech, programming, and finance",
  authors: [{ name: "JonLuca DeCaro", url: "https://jonlu.ca" }],
  openGraph: {
    title: "JonLuca's Blog",
    description: "JonLuca's Blog - A blog about tech, programming, and finance",
    url: baseUrl,
    siteName: "JonLuca's Blog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/mini-profile.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "JonLuca's Blog",
    description: "JonLuca's Blog - A blog about tech, programming, and finance",
    creator: "@jonluca",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"en"} className={cx("bg-[#f9f9f9]", GeistSans.variable, GeistMono.variable)}>
      <UnregisterServiceWorker />
      <Head>
        <link rel={"preconnect"} href={"https://www.google-analytics.com"} />
        <link rel={"preconnect"} href={"https://j.jonlu.ca"} />
      </Head>
      <body className={"bg-[#f9f9f9] p-0 text-xs leading-relaxed text-gray-800"}>
        <header className={"mt-8 text-center"}>
          <h1 className={"text-xl font-bold"}>JonLuca&apos;s Blog</h1>
        </header>
        <div className={"mx-auto mt-8 mb-3 max-w-[66rem] border-t border-b border-[#eee] bg-white md:rounded-md md:border"}>
          <Navbar />
          <main className={"relative overflow-hidden p-8 text-left text-xs md:p-16"}>{children}</main>
        </div>

        {/* Google Analytics */}
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-L7B5KF4CGL"} strategy={"afterInteractive"} />
        <Script id={"google-analytics"} strategy={"afterInteractive"}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L7B5KF4CGL');
  
            // matomo
            var _paq = window._paq || [];
            _paq.push(["setRequestMethod", "POST"]);
            _paq.push(["disableAlwaysUseSendBeacon"]);
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            if (location.hostname !== 'localhost') {
              _paq.push(["setCookieDomain", ".jonlu.ca"]);
              _paq.push([
                "setDomains",
                [".jonlu.ca", ".blog.jonlu.ca", ".jldc.me", ".blog.jldc.me"],
              ]);
            }
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
          `}
        </Script>
        <noscript>
          <p>
            <img src={"https://j.jonlu.ca/matomo.php?idsite=1&rec=1"} style={{ border: 0 }} alt={""} />
          </p>
        </noscript>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

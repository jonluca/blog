import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./components/nav";
import Script from "next/script";
import { UnregisterServiceWorker } from "./components/UnregisterServiceWorker";
import { MatomoAnalytics } from "./components/matomo-analytics";
import { author, siteName, siteUrl, socialImageUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "JonLuca's Blog - A blog about tech, programming, and finance",
  authors: [author],
  openGraph: {
    title: siteName,
    description: "JonLuca's Blog - A blog about tech, programming, and finance",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImageUrl(),
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteName,
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
    <html lang={"en"} className={cx("bg-[#f9f9f9]", GeistSans.className)}>
      <body className={"bg-[#f9f9f9] p-0 text-xs leading-relaxed text-gray-800"}>
        <UnregisterServiceWorker />
        <a className={"skip-link"} href={"#main-content"}>
          Skip to content
        </a>
        <header className={"mt-8 text-center"}>
          <h1 className={"text-xl font-semibold"}>JonLuca&apos;s Blog</h1>
        </header>
        <div className={"site-frame mx-auto mt-8 mb-3 max-w-[66rem] border-t border-b border-[#eee] bg-white md:rounded-md md:border"}>
          <Navbar />
          <main id={"main-content"} tabIndex={-1} className={"relative overflow-hidden p-8 text-left text-xs md:p-16"}>
            {children}
          </main>
        </div>

        {/* Google Analytics */}
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-L7B5KF4CGL"} strategy={"afterInteractive"} />
        <Script id={"google-analytics"} strategy={"afterInteractive"}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L7B5KF4CGL');
          `}
        </Script>
        <MatomoAnalytics />
        <noscript>
          <p>
            <img src={"https://j.jonlu.ca/js/?idsite=1&rec=1"} style={{ border: 0 }} alt={""} />
          </p>
        </noscript>
      </body>
    </html>
  );
}

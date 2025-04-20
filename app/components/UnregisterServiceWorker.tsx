"use client";
import { useEffect } from "react";

export const UnregisterServiceWorker = () => {
  useEffect(() => {
    // unregister service worker if it exists
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
    }
  }, []);
  return null;
};

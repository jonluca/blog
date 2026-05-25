export const POST_TIME_ZONE = "America/Los_Angeles";

const POST_DATE_WITHOUT_TIME_ZONE_PATTERN = /^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?$/;
const postTimeZoneOffsetFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: POST_TIME_ZONE,
  timeZoneName: "longOffset",
});

function getPostTimeZoneOffset(date: Date) {
  const timeZoneName = postTimeZoneOffsetFormatter.formatToParts(date).find((part) => part.type === "timeZoneName")?.value;
  if (!timeZoneName?.startsWith("GMT")) {
    throw new Error(`Could not resolve offset for ${POST_TIME_ZONE}`);
  }

  return timeZoneName.slice(3) || "+00:00";
}

function parseDateInPostTimeZone(value: string) {
  const isoDateTime = value.includes("T") ? value : value.includes(" ") ? value.replace(" ", "T") : `${value}T00:00:00`;
  const estimate = new Date(`${isoDateTime}Z`);
  if (Number.isNaN(estimate.getTime())) {
    return estimate;
  }

  const estimatedOffset = getPostTimeZoneOffset(estimate);
  const date = new Date(`${isoDateTime}${estimatedOffset}`);
  const actualOffset = getPostTimeZoneOffset(date);

  return actualOffset === estimatedOffset ? date : new Date(`${isoDateTime}${actualOffset}`);
}

export function parsePostDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  if (typeof value !== "string") {
    throw new Error("metadata.date must be a valid date string");
  }

  const normalizedValue = value.trim();
  const date = POST_DATE_WITHOUT_TIME_ZONE_PATTERN.test(normalizedValue)
    ? parseDateInPostTimeZone(normalizedValue)
    : new Date(normalizedValue);
  if (Number.isNaN(date.getTime())) {
    throw new Error("metadata.date must be a valid date string");
  }

  return date;
}

export function normalizeRedirectFrom(value: unknown) {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value)) {
    throw new Error("metadata.redirect_from must be an array of post paths");
  }

  return value.map((redirect) => {
    if (typeof redirect !== "string" || redirect.trim() === "") {
      throw new Error("metadata.redirect_from must contain non-empty post paths");
    }

    const route = redirect.trim().replace(/\/$/, "");
    if (!/^\/posts\/[a-z0-9-]+$/.test(route)) {
      throw new Error(`redirect path "${route}" must match /posts/{slug}`);
    }

    return route;
  });
}

export function formatDate(date: Date) {
  return date.toLocaleString("en-US", {
    timeZone: POST_TIME_ZONE,
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

const headingCountsByRequest = new WeakMap<object, Map<string, number>>();

export function uniqueHeadingSlug(value: string, request: object) {
  const baseSlug = slugifyHeading(value);
  let headingCounts = headingCountsByRequest.get(request);
  if (!headingCounts) {
    headingCounts = new Map();
    headingCountsByRequest.set(request, headingCounts);
  }

  const occurrence = headingCounts.get(baseSlug) ?? 0;
  headingCounts.set(baseSlug, occurrence + 1);
  return occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence}`;
}

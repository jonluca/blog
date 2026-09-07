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

  let occurrence = headingCounts.get(baseSlug) ?? 0;
  let slug = baseSlug;
  while (headingCounts.has(slug)) {
    occurrence += 1;
    slug = `${baseSlug}-${occurrence}`;
  }

  headingCounts.set(baseSlug, occurrence);
  headingCounts.set(slug, 0);
  return slug;
}

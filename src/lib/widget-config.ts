const widgetUsage: Record<string, readonly string[]> = {
  "ca-plate-checker": ["Gist"],
  clock: ["ClockContent"],
  information: ["Information", "InformationGraph"],
  "nintendo-switch": ["Gist"],
  "optimizing-a-static-site": ["Gist"],
  "ryan-air": ["RyanairApp"],
  "spf-dkim": ["SpfDkimCharts"],
};

const optionalWidgets = new Set(Object.values(widgetUsage).flat());

export function validatePostWidgetUsage(slug: string, source: string) {
  const configuredWidgets = new Set(widgetUsage[slug] || []);
  const referencedWidgets = [...source.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)].map((match) => match[1]);

  for (const widget of referencedWidgets) {
    if (optionalWidgets.has(widget) && !configuredWidgets.has(widget)) {
      throw new Error(`${slug}: optional MDX widget <${widget}> is not registered for this post`);
    }
  }
}

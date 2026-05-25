import { readFile, writeFile } from "node:fs/promises";
import { glob } from "glob";

interface Dimensions {
  width: number;
  height: number;
}

const outputPath = "src/lib/image-dimensions.ts";
const imageExtension = /\.(gif|jpe?g|png|svg|webp)$/i;

function collectMatches(contents: string, pattern: RegExp) {
  const matches = new Set<string>();
  for (const match of contents.matchAll(pattern)) {
    const value = match.slice(1).find(Boolean);
    if (value) {
      matches.add(value);
    }
  }
  return [...matches].sort();
}

function assetUrl(file: string) {
  const url = new URL(file, "https://assets.jonlu.ca");
  if (!imageExtension.test(url.pathname)) {
    url.pathname += ".png";
  }
  return url.href;
}

function dimensionsFromBytes(data: Buffer, contentType: string): Dimensions | undefined {
  if (data.length >= 24 && data.toString("ascii", 1, 4) === "PNG") {
    return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  }

  if (data.length >= 10 && data.toString("ascii", 0, 3) === "GIF") {
    return { width: data.readUInt16LE(6), height: data.readUInt16LE(8) };
  }

  if (data.length >= 30 && data.toString("ascii", 0, 4) === "RIFF" && data.toString("ascii", 8, 12) === "WEBP") {
    const subtype = data.toString("ascii", 12, 16);
    if (subtype === "VP8 ") {
      return { width: data.readUInt16LE(26) & 0x3fff, height: data.readUInt16LE(28) & 0x3fff };
    }
    if (subtype === "VP8L") {
      const dimensions = data.readUInt32LE(21);
      return { width: (dimensions & 0x3fff) + 1, height: ((dimensions >> 14) & 0x3fff) + 1 };
    }
    if (subtype === "VP8X") {
      return {
        width: 1 + data[24] + (data[25] << 8) + (data[26] << 16),
        height: 1 + data[27] + (data[28] << 8) + (data[29] << 16),
      };
    }
  }

  if (data.length >= 2 && data[0] === 0xff && data[1] === 0xd8) {
    let offset = 2;
    while (offset + 8 < data.length) {
      if (data[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = data[offset + 1];
      if (marker >= 0xc0 && marker <= 0xc3) {
        return { width: data.readUInt16BE(offset + 7), height: data.readUInt16BE(offset + 5) };
      }
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 2;
        continue;
      }
      offset += 2 + data.readUInt16BE(offset + 2);
    }
  }

  if (contentType.includes("svg") || data.toString("utf8", 0, 300).includes("<svg")) {
    const svg = data.toString("utf8");
    const size = svg.match(/\bwidth=["']([\d.]+)(?:px)?["'][^>]*\bheight=["']([\d.]+)(?:px)?["']/i);
    const viewBox = svg.match(/viewBox=["']\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)["']/i);
    if (size) {
      return { width: Number(size[1]), height: Number(size[2]) };
    }
    if (viewBox) {
      return { width: Number(viewBox[1]), height: Number(viewBox[2]) };
    }
  }

  return undefined;
}

async function probe(url: string) {
  try {
    const response = await fetch(url, { headers: { Range: "bytes=0-524287" } });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const dimensions = dimensionsFromBytes(Buffer.from(await response.arrayBuffer()), response.headers.get("content-type") ?? "");
    if (!dimensions) {
      throw new Error("unsupported image data");
    }
    return dimensions;
  } catch (error) {
    console.warn(`Skipping dimensions for ${url}: ${error instanceof Error ? error.message : String(error)}`);
    return undefined;
  }
}

async function buildMap(entries: Array<[string, string]>) {
  const dimensions = new Map<string, Dimensions>();
  for (let index = 0; index < entries.length; index += 12) {
    const batch = entries.slice(index, index + 12);
    const results = await Promise.all(batch.map(([, url]) => probe(url)));
    batch.forEach(([key], batchIndex) => {
      const size = results[batchIndex];
      if (size) {
        dimensions.set(key, size);
      }
    });
  }
  return dimensions;
}

function formatMap(name: string, dimensions: Map<string, Dimensions>) {
  const rows = [...dimensions.entries()].map(
    ([key, size]) => `  ${JSON.stringify(key)}: { width: ${size.width}, height: ${size.height} },`,
  );
  return `export const ${name}: Record<string, ImageDimensions> = {\n${rows.join("\n")}\n};`;
}

async function main() {
  const sourceFiles = await glob(["src/pages/about.astro", "src/content/interesting-snippets.mdx", "src/content/posts/*.mdx"]);
  const contents = (await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))).join("\n");
  const renderedContents = contents.replaceAll(/```[\s\S]*?```/g, "");
  const files = collectMatches(renderedContents, /<(?:CustomImage|Image)\b[^>]*?\bfile=(?:"([^"]+)"|'([^']+)')/gs);
  const explicitSources = collectMatches(
    renderedContents,
    /<(?:CustomImage|Image|MediaImage|img)\b[^>]*?\bsrc=(?:"([^"]+)"|'([^']+)'|\{\s*"([^"]+)"\s*\})/gs,
  ).filter((source) => source.startsWith("http"));
  const markdownSources = collectMatches(renderedContents, /!\[[^\]]*\]\((https?:\/\/[^\s)]+)(?:\s+["'][^"']*["'])?\)/g);
  const sources = [...new Set([...explicitSources, ...markdownSources])].sort();

  const fileDimensions = await buildMap(files.map((file) => [file, assetUrl(file)]));
  const sourceDimensions = await buildMap(sources.map((source) => [source, source]));
  const output = `// Generated by \`pnpm images:sync\`. Keep article media dimensions stable to prevent layout shifts.
export interface ImageDimensions {
  width: number;
  height: number;
}

${formatMap("fileImageDimensions", fileDimensions)}

${formatMap("sourceImageDimensions", sourceDimensions)}
`;

  await writeFile(outputPath, output);
  console.log(`Wrote ${fileDimensions.size + sourceDimensions.size} image dimensions to ${outputPath}.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});

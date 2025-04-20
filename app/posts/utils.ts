import fs from "fs";
import path from "path";

interface Metadata {
  title: string;
  date: Date;
  summary: string;
  image?: string;
  redirect_from?: string[];
}

function getDateFromString(date: string): Date {
  let targetDate: Date;

  // Handle different date formats
  if (date.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4}/)) {
    // Format: "2023-06-26 12:26:53 -0400"
    targetDate = new Date(date);
  } else if (date.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)) {
    // Format: "2022-05-28 15:06:28" (without timezone)
    targetDate = new Date(date.replace(" ", "T"));
  } else {
    // Default handling for ISO-like formats
    if (!date.includes("T")) {
      date = `${date}T00:00:00`;
    }
    targetDate = new Date(date);
  }
  return targetDate;
}
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("No metadata found");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();

  // Parse frontmatter with YAML-like structure
  const metadata: Partial<Metadata> = {};
  let currentKey: string | null = null;
  let inArray = false;

  const frontMatterLines = frontMatterBlock.trim().split("\n");

  frontMatterLines.forEach((line) => {
    const trimmedLine = line.trim();

    // Check if this is an array item
    if (trimmedLine.startsWith("- ") && currentKey && inArray) {
      const value = trimmedLine.substring(2).trim();

      if (!Array.isArray(metadata[currentKey as keyof Metadata])) {
        metadata[currentKey as keyof Metadata] = [] as any;
      }

      (metadata[currentKey as keyof Metadata] as any).push(value);
      return;
    }

    // Check if this is a new key
    if (trimmedLine.includes(":")) {
      const colonIndex = trimmedLine.indexOf(":");
      currentKey = trimmedLine.substring(0, colonIndex).trim();
      const restOfLine = trimmedLine.substring(colonIndex + 1).trim();

      // Check if this is the start of an array
      if (restOfLine === "") {
        inArray = true;
        metadata[currentKey as keyof Metadata] = [] as any;
      } else {
        inArray = false;
        let value = restOfLine;
        value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
        metadata[currentKey as keyof Metadata] = value as any;
      }
    }
  });

  // now process metadata.date as a Date object, handling the timezone offset like 2023-04-13 21:31:20 -0700
  if (metadata.date) {
    metadata.date = getDateFromString(metadata.date.toString());
  }

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    // strip leading numbers from slug
    slug = slug.replace(/^(\d+-)+/, "");

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  const postsDir = path.join(process.cwd(), "app", "posts", "posts");
  const mdxData = getMDXData(postsDir);
  return mdxData;
}
export function formatDate(targetDate: Date, includeRelative = false) {
  // Check if the date is valid
  if (isNaN(targetDate.getTime())) {
    return "Invalid date";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }
  const currentDate = new Date();

  // Calculate time differences
  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  // Adjust for negative months
  if (monthsAgo < 0) {
    yearsAgo--;
    monthsAgo += 12;
  }

  // Adjust for negative days
  if (daysAgo < 0) {
    // Get the last day of the previous month
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    daysAgo += lastMonth.getDate();
    monthsAgo--;

    // Readjust negative months if needed
    if (monthsAgo < 0) {
      yearsAgo--;
      monthsAgo += 12;
    }
  }

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  return `${fullDate} (${formattedDate})`;
}

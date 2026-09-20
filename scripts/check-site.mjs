import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = ["index.html", "services.html", "about.html", "quote.html"];
const failures = [];

for (const page of pages) {
  const filePath = path.join(root, page);
  const html = await readFile(filePath, "utf8");
  const requirePattern = (pattern, label) => {
    if (!pattern.test(html)) failures.push(`${page}: missing ${label}`);
  };

  requirePattern(/<!doctype html>/i, "HTML5 doctype");
  requirePattern(/<title>[^<]{20,65}<\/title>/i, "descriptive title");
  requirePattern(/<meta name="description" content="[^\"]{90,170}"/i, "meta description");
  requirePattern(/<link rel="canonical" href="https:\/\//i, "canonical URL");
  requirePattern(/<meta property="og:title"/i, "Open Graph title");
  requirePattern(/<meta property="og:image"/i, "Open Graph image");
  requirePattern(/<h1[\s>]/i, "one primary heading");
  requirePattern(/<main[\s>]/i, "main landmark");
  requirePattern(/<nav[\s>]/i, "navigation landmark");

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count !== 1) failures.push(`${page}: expected exactly one h1, found ${h1Count}`);

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/i.test(image[0])) failures.push(`${page}: image missing alt text`);
  }

  for (const script of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(script[1]);
    } catch {
      failures.push(`${page}: invalid JSON-LD`);
    }
  }

  if (/lorem ipsum|meta name="keywords"/i.test(html)) {
    failures.push(`${page}: contains placeholder or obsolete SEO content`);
  }
}

for (const file of ["assets/styles.css", "assets/site.js", "robots.txt", "sitemap.xml"]) {
  try {
    await access(path.join(root, file));
  } catch {
    failures.push(`missing required file: ${file}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${pages.length} pages: metadata, structure, JSON-LD, and image alt text passed.`);

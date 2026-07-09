// Auto-generates public/sitemap.xml from static routes + product/category data.
// Runs via `predev` and `prebuild` hooks in package.json.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { categoryContent } from "../src/data/categoryContent";
import { productPages } from "../src/data/productPages";

const BASE_URL = "https://www.gscartoes.com";

interface Entry {
  path: string;
  changefreq?: string;
  priority?: string;
}

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/criacao-de-logo", changefreq: "monthly", priority: "0.9" },
];

const categoryEntries: Entry[] = Object.keys(categoryContent).map((slug) => ({
  path: `/categoria/${slug}`,
  changefreq: "weekly",
  priority: "0.8",
}));

const productEntries: Entry[] = productPages.map((p) => ({
  path: `/produto/${p.slug}`,
  changefreq: "weekly",
  priority: "0.9",
}));

const entries: Entry[] = [...staticEntries, ...categoryEntries, ...productEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);

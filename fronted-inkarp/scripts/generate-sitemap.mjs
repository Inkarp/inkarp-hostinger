// scripts/generate-sitemap.mjs
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";

/** Site origin (no trailing slash) */
const BASE = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://inkarp.co.in").replace(/\/+$/, "");

/** Put EVERY route you want in the sitemap here (manually maintained). */
const staticRoutes = [
  // ---- keep your full list here ----
  "/", "/about", "/careers", "/careers/send-resume", "/contactUs",
  "/catalystcue", "/productProfile",
  "/terms-and-conditions", "/privacy-policy",
  "/insights-and-updates/news-and-events",
  "/insights-and-updates/blogs",
  "/insights-and-updates/webinars",
  "/verticals",
  "/verticals/synthesis-and-flow-chemistry",
  "/verticals/analytical-chemistry-and-weighing",
  "/verticals/rheology-and-thermal-analysis",
  "/verticals/pilot-plants-and-automation",
  "/verticals/material-science-and-battery",
  "/verticals/extrusion-and-homogenization",
  "/verticals/analytical-and-chromatography-solutions",
  "/verticals/lifesciences",
  "/verticals/general-laboratory-instrument",
  // …add ALL your extra type/product/blog/event routes here…
];

/** Helpers */
const norm = (p) => (p === "/" ? "/" : `/${p.replace(/^\/+/, "").replace(/\/+$/, "")}`);
const toAbs = (p) => `${BASE}${norm(p)}`;

/** Build XML */
const urls = Array.from(new Set(staticRoutes.map(norm))); // de-dup + normalize
const today = new Date().toISOString().split("T")[0];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => {
    const loc = toAbs(u);
    const depth = norm(u).split("/").filter(Boolean).length;
    const priority = u === "/" ? "1.0" : depth <= 2 ? "0.8" : "0.6";
    const changefreq = u === "/" ? "daily" : "weekly";
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  }).join("\n") +
  `\n</urlset>\n`;

/** Write file */
const outDir = resolve("dist");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "sitemap.xml"), xml, "utf8");

console.log(`✅ Sitemap generated with ${urls.length} URLs -> dist/sitemap.xml`);

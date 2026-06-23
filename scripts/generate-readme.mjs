import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEntries } from "./validate.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const readmePath = join(rootDir, "README.md");

const STALE_DAYS = 90;

const CATEGORY_LABELS = {
  "mcp-server": "MCP Servers",
  "agent-skill": "Agent Skills",
  "cursor-rule": "Cursor Rules",
  hook: "Hooks",
  plugin: "Plugins",
  cli: "CLI Tools",
  other: "Other",
};

const CATEGORY_ORDER = [
  "mcp-server",
  "agent-skill",
  "cursor-rule",
  "hook",
  "plugin",
  "cli",
  "other",
];

function isStale(lastVerified) {
  const verified = new Date(lastVerified);
  const now = new Date();
  const diffMs = now - verified;
  return diffMs > STALE_DAYS * 24 * 60 * 60 * 1000;
}

function formatStars(score) {
  const full = Math.floor(score);
  const half = score - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function generateStats(entries) {
  const categories = new Set(entries.map((e) => e.category));
  const latestVerified = entries
    .map((e) => e.lastVerified)
    .sort()
    .reverse()[0];

  return [
    `- **Total entries:** ${entries.length}`,
    `- **Categories:** ${categories.size}`,
    `- **Last verified entry:** ${latestVerified}`,
    `- **Generated:** ${new Date().toISOString().split("T")[0]}`,
  ].join("\n");
}

function generateTable(entries) {
  const header =
    "| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |";
  const separator =
    "| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |";

  const rows = entries.map((entry) => {
    const stale = isStale(entry.lastVerified) ? " ⚠️ stale" : "";
    const clients = entry.compatibleClients.join(", ");
    const name = `[${entry.name}](${entry.url})`;

    return `| ${name} | ${entry.overall} ${formatStars(entry.overall)}${stale} | ${entry.ratings.documentation} | ${entry.ratings.maintenance} | ${entry.ratings.utility} | ${entry.ratings.trust} | ${clients} | ${entry.lastVerified} |`;
  });

  return [header, separator, ...rows].join("\n");
}

function generateRatingsSection(entries) {
  const sections = [];

  for (const category of CATEGORY_ORDER) {
    const categoryEntries = entries
      .filter((e) => e.category === category)
      .sort((a, b) => b.overall - a.overall || a.name.localeCompare(b.name));

    if (categoryEntries.length === 0) continue;

    sections.push(`### ${CATEGORY_LABELS[category]}`);
    sections.push("");
    sections.push(generateTable(categoryEntries));
    sections.push("");
  }

  return sections.join("\n");
}

function replaceBlock(content, marker, newContent) {
  const start = `<!-- ${marker}:START -->`;
  const end = `<!-- ${marker}:END -->`;
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);

  if (!pattern.test(content)) {
    throw new Error(`Missing markers for ${marker} in README.md`);
  }

  return content.replace(pattern, `${start}\n${newContent}\n${end}`);
}

const entries = loadEntries();
let readme = readFileSync(readmePath, "utf8");

readme = replaceBlock(readme, "STATS", generateStats(entries));
readme = replaceBlock(readme, "RATINGS", generateRatingsSection(entries));

writeFileSync(readmePath, readme, "utf8");
console.log(`Updated README.md with ${entries.length} entries.`);

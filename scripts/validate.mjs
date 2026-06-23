import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const entriesDir = join(rootDir, "data", "entries");
const schemaPath = join(rootDir, "schema", "entry.schema.json");

const schema = JSON.parse(readFileSync(schemaPath, "utf8"));
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

function calculateOverall(ratings) {
  const sum =
    ratings.documentation +
    ratings.maintenance +
    ratings.utility +
    ratings.trust;
  return Math.round((sum / 4) * 10) / 10;
}

function loadEntries() {
  const files = readdirSync(entriesDir).filter((f) => f.endsWith(".json"));
  const entries = [];
  const ids = new Set();

  for (const file of files) {
    const filePath = join(entriesDir, file);
    const content = JSON.parse(readFileSync(filePath, "utf8"));
    const expectedId = file.replace(/\.json$/, "");

    if (content.id !== expectedId) {
      throw new Error(
        `ID mismatch in ${file}: expected "${expectedId}", got "${content.id}"`
      );
    }

    if (ids.has(content.id)) {
      throw new Error(`Duplicate entry id: ${content.id}`);
    }
    ids.add(content.id);

    const valid = validate(content);
    if (!valid) {
      const details = validate.errors
        ?.map((e) => `${e.instancePath || "root"}: ${e.message}`)
        .join("\n");
      throw new Error(`Validation failed for ${file}:\n${details}`);
    }

    entries.push({ ...content, overall: calculateOverall(content.ratings) });
  }

  return entries;
}

try {
  const entries = loadEntries();
  console.log(`Validated ${entries.length} entries successfully.`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

export { loadEntries, calculateOverall };

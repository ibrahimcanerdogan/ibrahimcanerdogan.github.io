import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

for (const path of walk("out")) {
  const normalized = path.replaceAll("\\", "/");
  const isEnglish = normalized === "out/en.html" || normalized.startsWith("out/en/");
  if (!isEnglish || !path.endsWith(".html")) continue;
  const html = readFileSync(path, "utf8");
  writeFileSync(path, html.replace('<html lang="tr"', '<html lang="en"'));
}

console.log("✓ English static HTML language attributes localized.");

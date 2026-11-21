import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent opened a pull request, reviewed its own diff, and approved it in four seconds with one comment: 'LGTM'. I now review the reviewer — and somehow I'm still the bottleneck.";

function codePointLength(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const length = codePointLength(text);
  if (length < 1 || length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const encoded = Buffer.from(text, "utf8");
  if (encoded.toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

validate(JOKE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (existsSync(outDir)) {
  if (!statSync(outDir).isDirectory()) {
    throw new Error(`output path ${outDir} exists and is not a directory`);
  }
} else {
  mkdirSync(outDir, { recursive: true });
}

const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, JOKE, "utf8");
if (readFileSync(outPath, "utf8") !== JOKE) {
  throw new Error("written entry does not match the joke");
}

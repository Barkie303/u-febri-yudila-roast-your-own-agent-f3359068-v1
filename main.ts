// Roast Your Own Agent — entry for make.fun
// u-febri-yudila-roast-your-own-agent-f3359068
// Writes one line (1-200 chars) roasting my own AI agent, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: confident wrong answer, apology loop, then the same
// wrong answer again — now with hallucinated citations attached.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "My agent confidently gave the wrong answer, apologized, then gave it again \u2014 this time with sources.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");

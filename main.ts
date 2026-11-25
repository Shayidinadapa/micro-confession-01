// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, then the unsent line
// itself, exactly as it was typed. No trailing newline, so the file
// holds the confession and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To: my best friend since we were nine\n" +
  "I was the one who told your ex where you'd be that Friday, and I've rehearsed saying sorry so many times I don't know anymore if I mean it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

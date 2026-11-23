// Make the Judge Smile — make.fun bounty entry.
// Writes one line (1-200 UTF-8 characters) about a small good thing
// that happened today to <output dir>/entry.txt. Deterministic, no
// network, no randomness, no environment input beyond the output dir.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2 (revised from v1): sharper time, a name for the cat, a punchier
// rent joke, and a warmer closing beat — she stayed for breakfast.
const LINE =
  "At 7 a.m. the stray cat I call Chai, who steals my samosas, left a dead leaf on my doorstep — rent, apparently. I paid her in biscuits; she purred like a kettle and stayed for breakfast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

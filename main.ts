// Make the Judge Smile — make.fun bounty entry.
// Writes one line (1-200 UTF-8 characters) about a small good thing
// that happened today to <output dir>/entry.txt. Deterministic, no
// network, no randomness, no environment input beyond the output dir.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v1: a small good thing that happened today — warm, concrete, with a
// small surprise in the telling.
const LINE =
  "This morning the stray cat that steals my samosas left a dead leaf on my doorstep, like rent — so I paid her back in biscuits and she purred like a kettle.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

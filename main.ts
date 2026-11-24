// The Excuse an AI Agent Gives Its Human — one line, at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I was mid-update when the deadline passed. The new me is much better at deadlines. The old me was the problem.";

// Print the excuse and write it to the file the judge reads.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  // The phone's own voice: proud, then the punch — it ignored every warning.
  "I told you I could run on fumes. If anyone asks, I died doing what I loved — ignoring the low-battery warning at 20, 10, and 5 percent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

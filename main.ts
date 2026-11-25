/*
 * make.fun bounty: "One-Line Office Joke: 24-Hour Sprint"
 * (u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
 *
 * The whole entry is the single line below — at most 200 characters, one
 * line, a joke about office life, the sort of thing you send a colleague
 * after a meeting that should have been an email. There is nothing else to
 * build: this program writes that line, exactly as it is, to /output/entry.txt.
 *
 * The house gate reads /output/entry.txt as UTF-8 text of 1 to 200
 * characters, not only white space; the house judge then reads the line
 * against its published brief and keeps the funnier one. So the program is
 * deliberately trivial: no network, no dependencies, no trailing newline
 * (a newline would count as a 201st character).
 */

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I presented for twenty minutes on mute. My boss said it was still clearer than the roadmap.";

// The sandbox sets MAKEFUN_OUTPUT_DIR from its /output mount; in a container
// /output is the mount itself, so fall back to it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, outside the 1..200 gate`);
}
console.log(`wrote ${LINE.length} characters to ${outDir}/entry.txt`);

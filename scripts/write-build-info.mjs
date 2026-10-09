import { writeFileSync } from "node:fs";

// Public traceability only: never serialize the environment or credentials.
const info = {
  commit: process.env.GITHUB_SHA ?? "local-uncommitted",
  run: process.env.GITHUB_RUN_ID ?? "local",
  node: process.version,
};
writeFileSync("dist/build-info.json", JSON.stringify(info, null, 2) + "\n");

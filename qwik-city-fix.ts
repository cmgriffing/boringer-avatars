/*
This script should NOT be necessary.

Relevant Issue:
https://github.com/BuilderIO/qwik/issues/2462
*/

import fs from "fs";
import path from "path";

const indexFilePath = path.resolve(__dirname, "apps/docs/dist/qwik/index.html");

const indexFileContents = fs.readFileSync(indexFilePath, { encoding: "utf8" });

const fixedIndexFileContents = indexFileContents.replace(
  `q:base="/build/"`,
  `q:base="/boringer-avatars/qwik/build"`
);

fs.writeFileSync(indexFilePath, fixedIndexFileContents);

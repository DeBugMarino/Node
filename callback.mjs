import * as fs from "node:fs";

fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, file1Data) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(file1Data);
});

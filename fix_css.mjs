import PurgeCSS from "purgecss";
import fs from "fs";
const purgeCSSResults = await new PurgeCSS.default().purge({
  content: [
    "_site/**/*.html",
    "_includes/*.html",
    "_layouts/**.*",
    "_posts/**.*",
  ],
  css: ["stylesheets/style.css"],
});

let final = "";
for (const file of purgeCSSResults) {
  final += file["css"] + "\n";
}
fs.writeFile("./stylesheets/cleaned.css", final, (error) => {
  if (error) {
    console.log("Error creating file:", error);
  } else {
    console.log("File saved");
  }
});

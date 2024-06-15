//the idea is there it still some change and bug to fix but it works do not use before the bug is fixed

const fs = require("fs").promises; // Use the promises API for async operations
const path = require("path");
const appDirectory = "./app"; // Change this to your actual directory path
const allFiles = [];
const allFolders = new Set(); // Using Set to avoid duplicates
let images = [];
function makeRelative(t) {
  const targetPath = `/${t}`;
  console.log("targetPath: ", targetPath);
  const relativePath = `./${t}`; // The relative path you want to replace with
  console.log("relativePath: ", relativePath);

  async function traverseDirectory(dir) {
    try {
      const files = await fs.readdir(dir, { withFileTypes: true }); // Get file details
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
          if (!allFolders.has(fullPath)) {
            // Check if the directory has already been processed
            allFolders.add(fullPath);
            await traverseDirectory(fullPath); // Recursively traverse the directory
          }
        } else {
          allFiles.push({ file: file.name, getDir: fullPath });
        }
      }
    } catch (err) {
      console.error(`Error reading directory ${dir}:`, err);
    }
  }

  async function run() {
    await traverseDirectory(appDirectory);
    console.log("allFiles: ", allFiles);

    for (const file of allFiles) {
      try {
        let content = await fs.readFile(file.getDir, "utf8");

        // Use regular expression with global flag to replace all occurrences
        const regex = new RegExp(targetPath, "g");
        if (regex.test(content)) {
          console.log(`Replacing occurrences in file: ${file.file}`);

          // Replace all occurrences with the relative path
          content = content.replace(regex, relativePath);

          // Save the modified content back to the file
          await fs.writeFile(file.getDir, content, "utf8");

          // Log the number of replacements made
          const numReplacements = (content.match(regex) || []).length;
          console.log(`Replaced ${numReplacements} occurrences.`);
        }
      } catch (err) {
        console.error(`Error reading or writing file ${file.getDir}:`, err);
      }
    }
  }
  run();
}

async function image() {
    images = await fs.readdir("./public");
    console.log("images: ", images);
    for (const image of images) {
      makeRelative(image);
    }
}
image()
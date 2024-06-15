const fs = require("fs").promises; // Use the promises API for async operations
const appDirectory = "./app";
const allFiles = [];
const allFolders = new Set(); // Using Set to avoid duplicates

async function traverseDirectory(dir) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true }); // Get file details
    for (const file of files) {
      const fullPath = `${dir}/${file.name}`;
      if (file.isDirectory()) {
        if (!allFolders.has(fullPath)) { // Check if the directory has already been processed
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
  allFiles.map(async (file) => {
    c = await fs.readFile(file.getDir, "utf8", (err, data) => {
        if(err){console.error(err)}
        return data;
    })
    
    console.log("file:", file.file, "dir:", file.getDir, "data:", c);
  })
}

run();

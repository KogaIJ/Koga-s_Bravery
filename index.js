const fs = require('fs');
const path = require('path');
const pickRandomItem = (dirPath) => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];
  if (randomItem.isFile()) {
    console.log(`Randomly picked file: ${randomItem.name}`);
  } else if (randomItem.isDirectory()) {
    console.log(`Randomly picked folder: ${randomItem.name}`);
    const folderPath = path.join(dirPath, randomItem.name);
    const filesInFolder = fs.readdirSync(folderPath, { withFileTypes: true });
    if (filesInFolder.length > 0) {
      const randomFileIndex = Math.floor(Math.random() * filesInFolder.length);
      const randomFile = filesInFolder[randomFileIndex];
      console.log(`Randomly picked file inside folder: ${randomFile.name}`);
    } else {
      console.log("Folder is empty");
    }
  }
};
const items2Folder = path.join(__dirname, 'items', 'items2');
pickRandomItem(items2Folder);

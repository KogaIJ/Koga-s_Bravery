const fs = require('fs');
const path = require('path');

const pickRandomItem = (dirPath) => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  if (randomItem.isFile()) {
    const randomImagePath = path.join(dirPath, randomItem.name);
    document.getElementById('randomImage').src = randomImagePath;
    console.log(`Randomly picked file: ${randomItem.name}`);
  } else if (randomItem.isDirectory()) {
    console.log(`Randomly picked folder: ${randomItem.name}`);
    const folderPath = path.join(dirPath, randomItem.name);
    pickRandomItem(folderPath); // Pick a random item from the sub-folder
  }
};

const items2Folder = path.join(__dirname, 'items', 'items2');
pickRandomItem(items2Folder);

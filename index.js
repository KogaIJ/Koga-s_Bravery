const pickRandomItem = (dirPath) => {
  const items = [
    { name: 'image1.jpg', isFile: true }, // Sample data for demonstration
    { name: 'subfolder', isFile: false }   // Sample data for demonstration
  ];

  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  if (randomItem.isFile) {
    const randomImagePath = randomItem.name;
    console.log(`Randomly picked file: ${randomItem.name}`);
  } else {
    console.log(`Randomly picked folder: ${randomItem.name}`);
    // Handle picking a random item from the sub-folder
    // You can recursively call pickRandomItem here
  }
};

const items2Folder = 'items/items2'; // Update the path to 'items/items2'
pickRandomItem(items2Folder);

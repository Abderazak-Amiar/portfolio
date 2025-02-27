import fs from 'fs';
import path from 'path';

// Path to the file
const filePath = path.join('src/utils/', 'phrases.txt');

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file content by newlines
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // Map lines to array of objects
  const phrasesArray = lines.map((line, index) => ({
    id: index + 1,
    tech: line.trim(),
  }));

  console.log(phrasesArray);
});

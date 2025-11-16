const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page (page_1.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page_1.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n🚀 Presentation server running at:`);
  console.log(`   http://localhost:${PORT}\n`);
  console.log(`📄 Available pages:`);
  for (let i = 1; i <= 11; i++) {
    console.log(`   http://localhost:${PORT}/page_${i}.html`);
  }
  console.log(`\nPress Ctrl+C to stop the server.\n`);
});


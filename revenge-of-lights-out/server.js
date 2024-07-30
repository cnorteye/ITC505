const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Route to generate a random number
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Serve static files from the "public" directory
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Route for displaying form (GET request)
server.get('/itc505/final/index.html', (req, res) => {
  res.sendFile(path.join(publicServedFilesPath, 'index.html'));
});

server.get('public/itc505/final/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set port based on command line argument
// Use the PORT environment variable if available, otherwise default to 80
const port = process.argv[2] === 'local' ? 8080 : (process.env.PORT || 80);
server.listen(port, () => console.log(`Server is running on port ${port}`));

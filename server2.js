const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

// Routes for random number
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

// POST route for form submission
server.post('/submit', (req, res) => {
    const name = req.body.name;
    // You can process the submitted data here
  
    // Respond back with success message
    res.json({ success: true, message: 'Submitted successfully' });
  });
  


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log('Ready on localhost!'))


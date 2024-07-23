const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 8080;  // Use environment port or default to 8080

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/setCookies', (req, res) => {
    res.cookie('name', 'John Doe', { maxAge: 900000, httpOnly: true });
    res.cookie('email', 'john.doe@example.com', { maxAge: 900000, httpOnly: true });
    res.send('<h1>Cookies are set!</h1><a href="/userData.html">Go back to User Data</a>');
});

// Route for retrieving cookies
app.get('/getCookies', (req, res) => {
    const name = req.cookies['name'];
    const email = req.cookies['email'];
    if (name && email) {
        res.send(`
            <h1>Cookies retrieved:</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <a href="/userData.html">Go back to User Data</a>
        `);
    } else {
        res.send(`
            <h1>No cookies found!</h1>
            <a href="/userData.html">Go back to User Data</a>
        `);
    }
});


// Serve static HTML files
app.get('/statusCode.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'statusCode.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/userData.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'userData.html'));
});

// Custom 404 error page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Optional: Handle other types of errors (500, etc.)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

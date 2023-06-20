const express = require('express');
const apiRouter = require('./repository/api.routes')
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'design')));

// Use api route for quest db
app.use('/api', apiRouter)

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'index.html'));
});
app.get('/analytics', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'register.html'));
});

app.get('/quest', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'quest.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static('./'));

// Serve index.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/images', (req, res) => {
    const imagesDir = path.join(__dirname, 'images');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/.test(file));
        res.json(images);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

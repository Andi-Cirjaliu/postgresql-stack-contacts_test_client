const express = require('express');
const path = require('path');

const server = express();

const buildPath = path.join(__dirname, "build");
console.log('React app build path: ', buildPath);
server.use(express.static( buildPath));

server.use("/*", (req, res) =>{
    res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
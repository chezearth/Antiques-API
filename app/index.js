const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;

app.get('/', (req, res) => {
	res.status(200).send(`Hello world! Our server is running on Port ${port}`);
});

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

// Serve static file
app.use(express.static(publicPath));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
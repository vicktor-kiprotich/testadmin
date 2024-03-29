const express = require('express');
const path = require('path');
const app = express();

const port = process.env.port || 3000;

app.use(express.static(__dirname + 'dist'));
app.use('/src/assets', express.static(__dirname + '/src/assets/'));


app.listen(port, () => {
    console.log(`listening on port ${port} ...... `);
});
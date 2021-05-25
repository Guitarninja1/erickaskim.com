const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
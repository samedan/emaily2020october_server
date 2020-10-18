const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi:'Dan here'});
});

app.listen(5000);


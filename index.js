const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// require data //
const charactersData = require('./data/characters.json')

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.get('/characters', (req, res) => {
    res.send(charactersData)
});

// listen to port //
app.listen(port, () => {
    console.log('App is listening to port ' + port);
});
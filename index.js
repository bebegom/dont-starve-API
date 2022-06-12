const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// require data //
const charactersData = require('./data/characters.json');
const craftableItemsData = require('./data/craftable-items.json');
const craftingTabsData = require('./data/crafting-tabs.json');
const foodGroupsData = require('./data/food-groups.json');
const ingredientsData = require('./data/ingredients.json');
const mobsData = require('./data/mobs.json');

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.get('/characters', (req, res) => {
    res.send(charactersData);
});

app.get('/characters/:id', (req, res) => {
    const index = req.params.id;

    // find character with id === :id
    const foundCharacter = charactersData.find(character => character.id == index)

    res.send(foundCharacter);
});

app.get('/craftable-items', (req, res) => {
    res.send(craftableItemsData);
});

app.get('/crafting-tabs', (req, res) => {
    res.send(craftingTabsData);
});

app.get('/food-groups', (req, res) => {
    res.send(foodGroupsData);
});

app.get('/ingredients', (req, res) => {
    res.send(ingredientsData);
});

app.get('/mobs', (req, res) => {
    res.send(mobsData);
});

// listen to port //
app.listen(port, () => {
    console.log('App is listening to port ' + port);
});
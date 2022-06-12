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

// function to find the id
const findId = (array, index) => {
    const found = array.find(i => i.id == index)
    return found;
}

app.get('/', (req, res) => {
    res.send('Homepage')
});

// GET characters //
app.get('/characters', (req, res) => {
    res.send(charactersData);
});

app.get('/characters/:id', (req, res) => {
    const index = req.params.id;

    // find character with id === :id
    const foundCharacter = findId(charactersData, index)

    res.send(foundCharacter);
});

// GET craftable-items //
app.get('/craftable-items', (req, res) => {
    res.send(craftableItemsData);
});

app.get('/craftable-items/:id', (req, res) => {
    const index = req.params.id;

    // find item with id === :id
    const foundItem = findId(craftableItemsData, index);

    res.send(foundItem);
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
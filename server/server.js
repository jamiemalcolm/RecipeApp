const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb');
const createRouter = require('./helpers/create_router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db= client.db('recipe_data');
        const recipesCollection = db.collection('recipes');
        const recipesRouter = createRouter(recipesCollection);
        app.use('/api/recipes/', recipesRouter);
    })
    .catch(console.error)

app.listen(8080, function () {
    console.log(`listening on port${ this.address().port}`)
});
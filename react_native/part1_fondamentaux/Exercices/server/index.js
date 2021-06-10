const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ny';
const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function (err) {
    const db = client.db(dbName);
    const collection = db.collection('restaurants');
    const express = require('express');
    const bodyParser = require('body-parser');
    let app = express();
    let request = [];
    let borough = [];

    app.use('/search', bodyParser.urlencoded({ extended: true }));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
      });

    app.get('/cuisine', (req, res) => {
        collection.find( {'borough' : "Brooklyn"}, (err, rest) => {
          
            console.log(rest)
        })
    });

    app.get('/', (req, res) => {
        console.log('server')
    })

    // Search
    app.get('/search', (req, res) => {

        res.json(messages);
    });

    app.get('/borough', (req, res) => {

        res.json(messages);
    });


    // Ecoute sur le port 1234
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`listening on ${PORT}`));

});
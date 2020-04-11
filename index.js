
const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;
const app = express();

app.use( express.static( __dirname+'/public/' ) );

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Mario'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        name:  'Mario'
    });
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
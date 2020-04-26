const express = require('express')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000
const fetch = require('node-fetch');


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('./public'));
app.get('/', function(req, res) {
    fetch('http://covid19api.xapix.io/v2/locations')
        .then(res => res.json())
        .then(json => res.render('pages/index', json));
});

app.listen(port, () => console.log(` listening on port ${port}!`))
const express = require('express');
const exphbs = require('express-handlebars');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;

//Middle-Ware
app.use(sassMiddleware({
    src: path.join(__dirname + '/sass'),
    dest: path.join(__dirname + '/public'),
    debug: true,
    outputStyle: 'expanded'
}));
app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
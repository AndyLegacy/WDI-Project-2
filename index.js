const express = require('express'); //
const app = express();
const { dbURI, port } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const routes = require('./config/routes');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.render('home'));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

const express = require('express'); //
const app = express();
const { dbURI, port, secret} = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const routes = require('./config/routes');
const mongoose = require('mongoose');
const userAuth = require('./lib/userAuth');
mongoose.Promise = require('bluebird');
const session = require('express-session');
const flash = require('express-flash');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.render('home'));

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(userAuth);

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

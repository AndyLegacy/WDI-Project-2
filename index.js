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
const methodOverride  = require('method-override');
const bodyParser = require('body-parser');

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

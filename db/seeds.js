const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI = 'mongodb://localhost/yummyhaus';
mongoose.connect(dbURI, { useMongoClient: true });


const Program = require('../models/program');

Program.create([{
  name: 'Starting Strength',
  frequency: '3 Days pr/week',
  level: 'Begginer',
  author: 'Mark Rippertoe',
  image: 'http://www.sethroselife.com/wp-content/uploads/2014/05/ss2.jpeg'

}])

  .then(programs => console.log(`${programs.length} programs created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

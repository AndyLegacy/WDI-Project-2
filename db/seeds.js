const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/yummyhaus';
mongoose.connect(dbURI, { useMongoClient: true });

const mongoose = require('mongoose');

const config = require('../config');
require('./bot');

mongoose.connect(`mongodb://${config.MONGO_HOST}/`, {
    user: config.MONGO_USER,
    pass: config.MONGO_PASS,
    dbname: config.MONGO_DBNAME,
    useNewUrlParser: true,
		useUnifiedTopology: true,
});
const { connection: db } = mongoose;

db.on('connected', () => {
    console.log('Database connected');
})

db.on('disconnected', () =>{
    console.log('Database disconnected');
})

db.on('error', err =>{
    console.error(err);
})


module.exports = db;
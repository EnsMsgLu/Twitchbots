const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');
require('dotenv').config;
const config = require('./config')

require('dotenv').config();

require('./db');
 
const app = express();
app.use(cors());
app.use(helmet());
app.use(volleyball);

/*app.get('/', (req, res) =>{
    res.json({
      	message: 'Twitch Bot!', 
    })
})*/


app.use('/auth/twitch', require('./auth/twitch'));
     
const port = config.PORT || 8888 ;
const server = app.listen(
    port, 
    () => console.log('http://localhost:' + server.address().port)
);
 

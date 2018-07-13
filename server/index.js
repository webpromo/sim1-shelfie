
const express=require('express');
const bodyParser = require('body-parser');
const controller = require('./controller') //// NOT SURE!!
const massive = require('massive');
require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING ).then(dbInstance => app.set('db',dbInstance));

app.use( bodyParser.json() );

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening intently on port ${port}`);});

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const axios = require('axios')
const {conn, Country, Activity, Activity_Country}= require('./db.js');

Country.sync({force: true}).then(
  axios.get('https://restcountries.com/v3.1/all')
  .then((res) =>{
    let countriesArray = []
    countriesArray = res.data.map( c =>{
      //console.log(c.capital) 
      // not al countries have capitals!?
      let country = {
        name : c.name.common,
        id : c.cca3,
        flag : c.flags.svg,
        continent : c.continents.join(', '),
        capital : c.capital ? c.capital.join(', ') : 'N/A',
        area : c.area,
        population: c.population
      }
      return country
    })
    return countriesArray
  })
  .then( (data) =>{
    Country.bulkCreate(data)
  })
  .then(()=>{
    console.log('db populated')
  })
  .catch( (err) => {
    console.log(error)
  })
)


const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

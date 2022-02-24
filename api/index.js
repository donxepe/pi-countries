//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  })
})
.then(()=>{
  let api = axios.get('https://restcountries.com/v3.1/all')
  return api
})
.then((res) => {
  let countriesArray = []
  countriesArray = res.data.map( c =>{
    let country = {
      name : c.name.common,
      id : c.cca3,
      flag : c.flags.png,
      continent : c.continents.join(', '),
      population : c.population,
      // not al countries have capitals!?
      capital : c.capital ? c.capital.join(', ') : 'N/A',
    }
    return country;
  })
  return countriesArray;
})
.then((data) => {
  Country.bulkCreate(data, {Validate: true})
})
.then(() => {
  console.log('db populated')
})
.catch((err) =>{
  console.error(err)
})

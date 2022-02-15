const { Router } = require('express');
const { getAllCountries, getIdCountry } = require('../controllers/country')


const countryRouter = Router();

countryRouter.get('/', getAllCountries) 

countryRouter.get('/:idCountry', getIdCountry)

module.exports = countryRouter;
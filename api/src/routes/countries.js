const { Router } = require('express');
const { getAllCountries } = require('../controllers/country')


const countryRouter = Router();

countryRouter.get('/', getAllCountries) 

countryRouter.get('/:idCountry', async function(req,res){
    const { idCountry } = req.params;
    const country = await Country.findByPk(idCountry, {
        include: Page
    })
    if (!country) return res.sendStatus(404);
    res.json(country)
})

module.exports = countryRouter;
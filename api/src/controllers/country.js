const {Country, Activity} = require('../db.js')
const axios = require('axios');

const getAllCountries = async(req, res) =>{
    try {
        let db = await Country.findAll()
            console.log('consulta db')
        if (db.length === 0){
            console.log('consulta api')
            const api = await axios.get('https://restcountries.com/v3.1/all')

            let apiRes = api.data.map((c) => {
                return {
                    name : c.name.common,
                    id : c.cca3,
                    flag : c.flags.svg,
                    continent : c.continents.join(', '),
                    capital : c.capital ? c.capital.join(', ') : 'N/A',
                    area : c.area,
                    population: c.population
                }
                });
            await Country.bulkCreate(apiRes)
            db = await Country.findAll()
        } 
        res.send(db)
    } catch(e) {
        console.error(e)
    }

}

const getIdCountry = async(req, res) => {

}

const getNameCountry = async(req,res ) =>{

}

module.exports = {
    getAllCountries,
    getIdCountry,
    getNameCountry
}
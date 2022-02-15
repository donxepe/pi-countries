const {Country, Activity} = require('../db.js')
const axios = require('axios');

const getAllCountries = async(req, res) =>{
    try {
        let db = await Country.findAll()
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
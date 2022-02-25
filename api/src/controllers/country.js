const {Country, Activity} = require('../db.js');
const { Op } = require('sequelize');
const axios = require('axios');

const getAllCountries = async(req, res) =>{
    const { name } = req.query;
    let db = await Country.findAll(name && { //run findAll with no args if no name
        where : {
            name : {
                [Op.iLike] : `%${name}%`
            }
        }
    } )
    if (db.length === 0) return res.status(404).send("País no encontrado") 
    res.send(db)
}

const getIdCountry = async(req, res) => {
    const { idCountry } = req.params;
    let country = await Country.findByPk(idCountry.toUpperCase(), {
        include: Activity
    })
    if (!country) return res.sendStatus(404);
    let apiCountry = await axios.get(`https://restcountries.com/v3/alpha/${idCountry}`)
    apiCountry = apiCountry.data[0]
    country.subregion = apiCountry.subregion
    country.area = apiCountry.area 
    res.json(country)
}


module.exports = {
    getAllCountries,
    getIdCountry,
}
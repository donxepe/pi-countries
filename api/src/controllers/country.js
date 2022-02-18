const {Country, Activity} = require('../db.js');
const { Op } = require('sequelize');
const axios = require('axios');

const getAllCountries = async(req, res) =>{
    let db = await Country.findAll({order:['name'] })
    if (db.length === 0) return res.status(404).send("País no encontrado") 
    res.send(db)
}

const getIdCountry = async(req, res) => {
    const { idCountry } = req.params;
    const country = await Country.findByPk(idCountry.toUpperCase(), {
        include: Activity
    })
    if (!country) return res.sendStatus(404);
    res.json(country)
}

const getNameCountry = async(req,res ) =>{


}

module.exports = {
    getAllCountries,
    getIdCountry,
    getNameCountry
}
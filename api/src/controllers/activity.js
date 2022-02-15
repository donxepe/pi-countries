const {Country, Activity} = require('../db.js')

const postActivity = async(req, res) =>{
    const db = await Activity.findAll({include: Country})
    
}
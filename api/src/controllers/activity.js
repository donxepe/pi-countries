const {Country, Activity} = require('../db.js')

const postActivity = async(req, res) =>{
    const { name, dificulty, duration, season, countries } = req.body
    console.log(req.body)
    try {
        const [newActivity, ac] = await Activity.findOrCreate({
            where:{
                name,
                dificulty, 
                duration, 
                season
            }
        })
        await newActivity.setCountries(countries)
        res.send(newActivity)
    } catch (error){
        res.send(error)
    }
}

module.exports = {
    postActivity
}

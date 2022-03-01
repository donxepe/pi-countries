const { Router } = require('express');
const { postActivity, getActivities } = require('../controllers/activity');


const activityRouter = Router();

activityRouter.post('/', postActivity) 

activityRouter.get('/', getActivities)



module.exports = activityRouter;
const { Router } = require('express');
const { postActivity } = require('../controllers/activity');


const activityRouter = Router();

activityRouter.post('/', postActivity) 



module.exports = activityRouter;
const {Router} = require('express');
const activitiesHandler = require('../handlers/activitiesHandler');
const activityHandler = require('../handlers/activityHandler');

const activitiesRouter = Router();

activitiesRouter.get('/', activitiesHandler);
activitiesRouter.post('/', activityHandler);

module.exports = activitiesRouter;
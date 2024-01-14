const express=require('express');
const { getEvents, newEvent, getSingleEvent,getDepartmentEvent } = require('../controllers/eventController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/event').get(getEvents);
router.route('/event/new').post(isAuthenticatedUser,authorizeRoles('admin'),newEvent);
router.route('/event/:id').get(getSingleEvent);
router.route('/events/:id').get(getDepartmentEvent);

module.exports=router;
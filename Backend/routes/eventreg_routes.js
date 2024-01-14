const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const { neweventReg, getRegisteredEvent } = require('../controllers/event_registration_controller');
const {getPaidEvent}=require('../controllers/EventPaidController')
const router = express.Router();

router.route('/event/register/').post(isAuthenticatedUser,neweventReg)
router.route('/event/view_my_event/:id').get(isAuthenticatedUser,getRegisteredEvent)
router.route('/getPaidEvent').get(isAuthenticatedUser,getPaidEvent)

module.exports = router;

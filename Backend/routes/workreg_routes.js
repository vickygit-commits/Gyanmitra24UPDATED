const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const { newworkReg, getRegisteredWorkshop } = require('../controllers/workshop_registration_Controller');
const {getPaidWorkshop}=require('../controllers/WorkshopPaidController')
const router = express.Router();

router.route('/workshop/register').post(isAuthenticatedUser,newworkReg)
router.route('/workshop/view_my_workshop').get(isAuthenticatedUser,getRegisteredWorkshop)
router.route('/getPaidWorkshop').get(isAuthenticatedUser,getPaidWorkshop)

module.exports = router;

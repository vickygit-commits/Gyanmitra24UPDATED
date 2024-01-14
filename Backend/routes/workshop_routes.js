const express=require('express');
const { getWorkshop, newWorkshop, getSingleWorkshop,getDepartmentWorkshop} = require('../controllers/workshopController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/workshop').get(getWorkshop);
router.route('/workshop/new').post(isAuthenticatedUser,authorizeRoles('admin'),newWorkshop);
router.route('/workshop/:id').get(getSingleWorkshop);
router.route('/workshops/:id').get(getDepartmentWorkshop);

module.exports=router;
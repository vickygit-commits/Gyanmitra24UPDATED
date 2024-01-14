const express=require('express');
const { registerUser,
    loginUser,
    logoutUser,
    forgotPassword, 
    resetPassword, 
    getUserProfile, 
    changePassword, 
    getAllUser,
getUser} = require('../controllers/authControllers');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');
const router=express.Router();


router.route('/users/register').post(registerUser);
router.route('/users/login').post(loginUser);

router.route('/users/logout').get(logoutUser)
router.route('/password/forgot').post(forgotPassword);  // Use the forgotPassword function
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);
router.route('/password/change').put(isAuthenticatedUser,changePassword);
router.route('/admin/getAllUsers').get(isAuthenticatedUser,authorizeRoles('admin'),getAllUser);
router.route('/admin/getUser/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getUser);

module.exports=router;

const router = require('express-promise-router')();
const UserController = require('../controller/authController');


// Router Navigations
router
    .route('/signup')
    .post((req,res,next)=>UserController.signup(req,res,next));

router
    .route('/signin')
    .post((req,res,next)=>UserController.signin(req,res,next));

module.exports = router;

   

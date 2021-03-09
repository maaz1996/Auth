
const router = require('express-promise-router')();
const UserController = require('../controller/authController');


// Router Navigations
router
    .route('/signup')
    .post(signupValidateBody(signupSchemas.authSchema), UserController.signup);

router
    .route('/signin')
    .post(
        signinValidateBody(signinSchemas.authSchema),
        passport.authenticate('user-local', {session: false}),
        UserController.signin
    );


module.exports = router;

   

const express = require('express');
const controller = require('../controllers/authController');
const authMiddleware = require('../Middleware/authMiddleware');
const passport = require('passport');
const router = express.Router();


router.get("/protected",authMiddleware.check_user,controller.protected);
router.get('/login', controller.get_login);
router.post('/login', controller.login);
router.post('/signup', controller.signup);

router.post('/update', authMiddleware.check_user, controller.updateCustomer);
router.get('/logout', controller.logout);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'consent' }));
router.get('/google/redirect',(req,res,next)=>{console.log(req.session); next()},passport.authenticate('google'), (req, res) => {
    
    res.redirect('/');
});

module.exports = router;
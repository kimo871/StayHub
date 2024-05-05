const express = require('express');
const controller = require('../controllers/otpController');
const path = require("path");
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');

router.get('/sendMail', authMiddleware.check_user, controller.sendOtp);
router.get("/verify",(req,res)=>res.sendFile(path.join(__dirname, '../dist2', 'index.html')));
router.post('/verify', authMiddleware.check_user, controller.check_otp)

module.exports = router;
const express = require('express');
const Customer = require('../models/customer');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mohandmagdii45@gmail.com', 
      pass: 'hmadalmaza10' 
    }
});

const generateOTP = () => {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const sendOtp = async (req, res) => {
    const {id} = req.body;
    const otp = generateOTP();
    const currentTime = new Date();
    const expiryTime = new Date(currentTime.getTime() + 92 * 1000);
    const change = {otp, otp_expiry: expiryTime};
    const query = {$set: change};

    try {
        const customer = await Customer.findByIdAndUpdate(id, query);

        const mailOptions = {
            from: 'mohandmagdii45@gmail.com',
            to: customer.email,
            subject: 'Email verification',
            text: `Hello, Please use this OTP to verify your email ${otp}`
        };

        const info = await transporter.sendMail(mailOptions);
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const check_otp = async (req, res) => {
    const {otp,id} = req.body;
    const customer = await Customer.findById(id);
    const now = new Date();
    if(customer.otp_expiry >= now){
        if(customer.otp == otp) {
            const newCustomer = await Customer.findByIdAndUpdate(id, {$set: {status: 'verified'}});
           return  res.status(200).json({"success":["Your Email is Verified !"]});
        }
        else
            return res.status(400).json({'errors': ['Incorrect otp']});
    }
    else
       return  res.status(400).json({'errors': ['otp time expired']});
}

module.exports = {
    check_otp,
    sendOtp,

}


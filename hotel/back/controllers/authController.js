const express = require('express');
const Customer = require('../models/customer');
const jwt = require('jsonwebtoken');
const path = require("path");
const bcrypt = require('bcryptjs');

const maxAge = 1 * 24 * 60 * 60;

const create_token = (id) => {
    const token = jwt.sign({id}, 'increaseupto1', {
        expiresIn: maxAge
    })
    return token;
}

const handleErrors = (err) => {
    if(err.message == 'Incorrect Email address') {
        return {'errors': ['Incorrect Email address']};
    } else if (err.message == 'Incorrect password') {
        return {'errors': ['Incorrect password']};
    } else if(err.code == 11000){
        if(err.errorResponse.errmsg.includes('phoneNumber')){
            return {'errors': ['phone number is already in use']};
        } else {
            return {'errors': ['Email is already in use']};
        }
    } else if(err.message.includes('Customer validation failed')) {
        let errors = [];
        Object.values(err.errors).forEach(property => {
            errors.push(property.message);
        })
        return {'errors': errors};
    } else if (err == "Incorrect old password") {
        return {'errors': err};
    } else {
        return {'errors':''};
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const customer = await Customer.login(email, password);
        res.cookie('jwt',create_token(customer._id), {maxAge: maxAge*1000, httpOnly: false});
        res.status(200).json({"success":["Logged in Successfully "]});
    }
    catch(err) {
        const error = handleErrors(err);
        res.status(400).json(error);
    }
}

const signup = async (req, res) => {
    const customer = req.body;

    try {
        const newCustomer = await Customer.create(customer);
        res.status(200).json({"success":["Account Created Successfully"]});
    }
    catch(err) {
        const error = handleErrors(err);
        res.status(400).json(error);
    }
}


const protected = async (req, res) => {
    const id = req.body.id;
    try {
        const customer = await Customer.findByIdAndUpdate(id);
        res.status(200).json({"success": {"email": customer.email, "name": customer.name, "status": customer.status, "type": req.user !== undefined? "google": "basic"}});
    } catch(err) {
        res.status(401).json({"errors": ["User Not Found !"]});
    }
  }
  



const updateCustomer = async (req, res) => {
    const changes = req.body;
    if (changes.email !== undefined)
        changes.status = 'pending';
    if(changes.password !== undefined) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(changes.password, salt);
        changes.password = hashedPassword;
    }
    const id = changes.id;
    delete changes.check_password;
    delete changes.id;
    const query = {$set: changes};
    

    try {
        const customer = await Customer.findById(id);
        if(changes.password !== undefined && customer.password != old_password)
            throw "Incorrect old password";

        const updatedCustomer = await Customer.findByIdAndUpdate(id, query);
        res.status(200).json({"success": ["updated"]});
    } catch (err) {
        console.log(err);
        const error = handleErrors(err);
        res.status(400).json(error);
    }
}

const get_login = (req, res) => {
    res.sendFile(path.join(__dirname, '../dist2', 'index.html'));
};

const logout = (req, res) => {
    req.logout();
    res.cookie('jwt', '', {maxAge: 1});
    res.status(200).json({"success":["success"]});
};


module.exports = { 
    login,
    signup,
    logout,
    protected,
    updateCustomer,
    get_login
}
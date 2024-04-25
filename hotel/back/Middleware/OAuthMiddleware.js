const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Customer = require('../models/customer');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((customer, done) => {
  console.log(customer);
  done(null, customer.id);
})

passport.deserializeUser( async (customerId, done) => {
  try {
    const customer = await Customer.findById(customerId);
    done(null, customer);
  } catch(err) {
    console.log(err);
  }
  
})

passport.use(
    new GoogleStrategy({
        clientID: '184319109567-mgkg7sescehmv7tjn9oa7qgf5dflq183.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/redirect',
      }, async (accessToken, refreshToken, profile, done) => {
        try{
          const customer = await Customer.findOne({email: profile.emails[0].value});
          if(customer == null)
            throw "error";
          done(null, customer);
        } catch(err) {
          const newCustomer = {
            "email": profile.emails[0].value,
            "name": profile.displayName,
            "status": "verified"
          }
          try {
            console.log(1111111);
            const customer = await Customer.create(newCustomer);
            console.log(customer);
            done(null, customer);
          } catch(err) {
            console.log(err);
          }
        }
      }
    )
  );
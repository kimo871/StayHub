const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Customer = require('../models/customer');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {client_id, client_secret} = require('../keys');


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
        clientID: client_id,
        clientSecret: client_secret,
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
            const customer = await Customer.create(newCustomer);
            done(null, customer);
          } catch(err) {
            console.log(err);
          }
        }
      }
    )
  );
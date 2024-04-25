const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require("path");
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');
const Customer = require('./models/customer');
const cookieParser = require('cookie-parser');
const passportSetup = require('./Middleware/OAuthMiddleware');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./Middleware/keys');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cookieSession({maxAge: 24*60*60*1000, keys: [keys.session.cookieKey]}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'dist2')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist2', 'index.html'));
});

//mongodb+srv://mk5391130:RFRZ5EL4MAMugi7Y@cluster0.vgv6oyv.mongodb.net/hotel

mongoose.connect('mongodb+srv://mk5391130:RFRZ5EL4MAMugi7Y@cluster0.vgv6oyv.mongodb.net/hotel');

app.use('/auth', authRoutes);
app.use('/otp', otpRoutes);

app.use("/account",(req, res) => {
  res.sendFile(path.join(__dirname, 'dist2', 'index.html'));
})
//app.set('views', __dirname + '/views');



app.listen(3000);




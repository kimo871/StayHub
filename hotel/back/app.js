const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require("path");
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');
const hotelApiRoutes = require('./routes/hotelApiRoutes');
const Customer = require('./models/customer');
const cookieParser = require('cookie-parser');
const passportSetup = require('./Middleware/passportSetup');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
const {mongo_uri, cookie_secret} = require('./keys');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cookieSession({maxAge: 24*60*60*1000, keys: [cookie_secret]}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'dist2')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist2', 'index.html'));
});

mongoose.connect(mongo_uri);

app.use('/auth', authRoutes);
app.use('/otp', otpRoutes);
app.use('/hotels', hotelApiRoutes);
app.use("/account",(req, res) => {
  res.sendFile(path.join(__dirname, 'dist2', 'index.html'));
})


//app.set('views', __dirname + '/views');



app.listen(3000);




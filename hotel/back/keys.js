const dotenv = require('dotenv');
const CryptoJS = require('crypto-js');
dotenv.config();

utcDate = Math.floor(new Date().getTime() / 1000);
const assemble = process.env.HOTEL_API_KEY + process.env.HOTEL_API_SECRET + utcDate;
const hash = CryptoJS.SHA256(assemble).toString(CryptoJS.enc.Hex);

const hotel_api_headers = {
    'Content-Type': 'application/json',
    'Api-Key': process.env.HOTEL_API_KEY,
    'X-Signature': hash,
    'X-Timestamp': utcDate
};

module.exports = {
    cookie_secret: process.env.COOKIE_SECRET,
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
    client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    mongo_uri: process.env.MONGODB_CONNECTION_STRING,
    apiUrl: process.env.API_URL,
    hotel_api_headers
}
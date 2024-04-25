const mongoose = require('mongoose');
const {isEmail} = require('validator');
const creditCardSchema = require('./creditCard');
const bcrypt = require('bcryptjs');

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter valid email adderss']
    },
    password: {
        type: String,
        minlength: [6, 'Password must be more than 6 characters']
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String },
    status: {
        type: String,
        enum: ['verified', 'pending'],
        default: 'pending'
    },
    otp: {
        type: String
    },
    otp_expiry: {
        type: Date
    },
    address: String,
    nationalId: String,
    creditCard: creditCardSchema
})

customerSchema.pre('save', async function(next) {
    if(this.password == undefined)
        next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    } catch (error) {
        next(error);
    }
});

/*customerSchema.pre('findOneAndUpdate', async function (next) {
    console.log(this);
    if(this._update && this._update.$set && this._update.$set.password) {
        try {
            console.log('joined');
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        } catch (error) {
            console.log('err');
            next(error);
        }
    } else {
        console.log('left');
        next();
    }
});*/


customerSchema.statics.login = async function(email, password) {
    const customer = await this.findOne({email});
    if(customer) {
        const check = await bcrypt.compare(password, customer.password);
        if(check) {
            return customer;
        } else {
            throw Error('Incorrect password');
        }
    } else {
        throw Error('Incorrect Email address');
    }
}

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
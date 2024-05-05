const Customer = require('../models/customer');
const jwt = require('jsonwebtoken');
 
const check_user = async (req, res, next) => {
    const token = req.cookies.jwt;
    if(token !== undefined){
        const auth = jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if(err){
                res.status(401).json({"errors":["UnAuthorized"]});
            } else {
                let user = await Customer.findById(decodedToken.id);
                if(user){
                    req.body.id = decodedToken.id;
                    next();
                }
                else
                    res.status(401).json({"errors":["UnAuthorized"]});
            }
        })
    } else if (req.user !== undefined) {
        let customer = await Customer.findOne({email: req.user.email});
        if(customer == null)
            res.status(401).json({"errors":["UnAuthorized"]});
        else{
            req.body.id = customer.id;
            next();
        }
    } else {
        res.status(401).json({"errors":["UnAuthorized"]});
    }
}

module.exports = {
    check_user
};
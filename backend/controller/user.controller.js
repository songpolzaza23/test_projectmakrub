const mongoose = require('mongoose');
const passport = require('passport');

const User = mongoose.model('profiles');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            //ถ้า eamil ซ้ำจะไม่สามารถ add ข้อมูลได้
            if (err.code == 11000) {
                res.status(422).send(['Duplicate email address found.']);
            } else {
                return next(err);
            }
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json(err);
        } else if (user) {
            return res.status(200).json({ "token": user.generateJwt() });
        }
        // ไม่รู้จัก username หรือ password 
        else {
            return res.status(404).json(info);
        }
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: user.username });
        }
    );
}
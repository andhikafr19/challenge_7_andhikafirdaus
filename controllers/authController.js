const passport = require("../lib/passport")
const {User} = require("../models")

module.exports = {
    registerForm: (req, res) => {
        res.render('register')  
    },
    register: (req, res, next) => {
        User.register(req.body)          // register dari method register yg ada di models/user.js
            .then(() => {
                res.redirect('/login')
            })
            .catch(err => next(err))
    },

    loginForm: (req, res) => {
        res.render('login')
    },

    login : passport.authenticate('local', {
        successRedirect: '/game',
        failureRedirect: '/login',
        failureFlash: true   // untuk mengaktifkan express flash
    }),

    whoami: (req, res) => {
        res.render('profile', req.user.dataValues)
    },

    whoamii: (req, res) => {
        res.render('index', req.user.dataValues)
    }
}
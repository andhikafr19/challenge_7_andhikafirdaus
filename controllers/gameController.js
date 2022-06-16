const passport = require("../lib/passport")
const {User} = require("../models")

module.exports = {

    gameuser: (req, res) => {
        res.render('game', req.user.dataValues)
    }
}
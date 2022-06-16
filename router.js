const router = require('express').Router()
const auth = require('./controllers/authController')
const game = require('./controllers/gameController')
const restrict = require('./middlewares/restrict')

// endpoint index
// router.get('/', restrict, (req, res) => {
//     res.render('index')  
// })
router.get('/', restrict, auth.whoamii)

// register user
router.get('/register', auth.registerForm)
router.post('/register', auth.register)

// login user
router.get('/login', auth.loginForm)
router.post('/login', auth.login)

// get name user
router.get('/whoami', restrict, auth.whoami)

// game
router.get('/game', restrict, game.gameuser )

module.exports = router
const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const {PORT = 3000} = process.env 


// pertama, setting request body parser (untuk menerima inputan dari form)
// body parser harus ditaruh paling atas
app.use(express.urlencoded({ extended: false }))

// kedua, setting session handler (library : express-session)
app.use(session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
}))

// ketiga, seeting passport
// ditaruh sebelum router dan view engine
const passport = require('./lib/passport')
app.use(passport.initialize())
app.use(passport.session())

// keempat, setting flash
app.use(flash())

// kelima, setting view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))


// keenam, setting router
const router = require('./router')
app.use(router)

// ketujuh, nyalakan server pada port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
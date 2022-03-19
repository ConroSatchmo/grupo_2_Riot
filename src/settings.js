const express = require('express')
const logger = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const routes = require('./routes/index.routes')
const methodOverride = require('method-override')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(logger('dev'))
app.use(methodOverride('_method'))

// static files
app.use(express.static(path.join(__dirname, '../public')))

// routes
routes(app)

// 404
app.use((req, res, next) => {
    res.status(404).render('errors/404')
})


module.exports = app
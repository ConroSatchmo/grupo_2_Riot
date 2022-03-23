module.exports = app => {
    app.use('/', require('./home.routes'))
    app.use('/auth', require('./auth.routes'))
    app.use('/products', require('./products.routes'))
}
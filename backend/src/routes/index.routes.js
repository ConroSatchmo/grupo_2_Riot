module.exports = app => {
    app.use('/', require('./home.routes'))
    app.use('/auth', require('./auth.routes'))
    app.use('/products', require('./products.routes'))
    app.use('/api/users', require('./users.api.routes'))
    app.use('/api/products', require('./products.api.routes'))
}
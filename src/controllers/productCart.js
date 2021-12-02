const path = require('path');

const productCartController = {
    renderProductCart: (req, res) => {
        res.render('productCart');
    },
}

module.exports = productCartController;
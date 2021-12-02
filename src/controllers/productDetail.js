const path = require('path');

const productDetailController = {
    renderProductDetail: (req, res) => {
        res.render('productDetail');
    },
}

module.exports = productDetailController;
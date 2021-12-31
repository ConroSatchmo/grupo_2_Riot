const path = require('path');
const fs = require('fs');

let productsJSON = fs.readFileSync(path.resolve(__dirname, "../database/products.json"), 'utf-8');
let products = JSON.parse(productsJSON);

const db = {
    select: (id = 'all') => {
        if (id === 'all') {
            return products;
        } else {
            product = products.find(product => product.id == id);
            return product;
        }
    },
    insert: (product) => {
        products.push(product);
        fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
    }
}

module.exports = db;
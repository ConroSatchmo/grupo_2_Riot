const fs = require("fs");
const path = require("path");
const productsJSON = fs.readFileSync("./products.json", "utf-8");
let products = JSON.parse(productsJSON);
products.forEach((product) => {
  console.log(
    "INSERT INTO products (id, name, description, price, brand_id, color_id) " +
      "VALUES(" +
      " '" +
      product.id +
      "'" +
      ", " +
      " '" +
      product.name +
      " '" +
      ", " +
      "'" +
      product.description +
      "'" +
      ", " +
      "'" +
      product.price +
      "'" +
      ", " +
      "'" +
      1 +
      "'" +
      "," +
      "'" +
      1 +
      "'" +
      ")" +
      ";"
  );
});

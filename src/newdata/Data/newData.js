const fs = require("fs");
const path = require("path");
const folderData = path.join(__dirname, "./oldData");
const productsJSON = fs.readFileSync(folderData + "/products.json", "utf-8");

let products = JSON.parse(productsJSON);

products.forEach((product) => {
  console.log(
    "INSERT INTO products (`id`, `name`, `description`, `price`, `brand_id`, `color_id`) " +
      "VALUES(" +
      " '" +
      product.id +
      "'" +
      ", " +
      product.name +
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
      "default" +
      "'" +
      "," +
      "'" +
      "default" +
      "'" +
      ")" +
      ";"
  );
});

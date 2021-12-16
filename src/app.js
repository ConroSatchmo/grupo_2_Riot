const app = require("./settings");

app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});

console.log("hola")
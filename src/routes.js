const { Router } = require("express");
const routes = new Router();

const customers = require('./app/customer/CustommersConstrollers')


//Cada route pega diretamente do diretorio CustomersControllers o método pra cada operação.
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/Id", customers.update);
routes.delete("/customers/Id", customers.destroy);

module.exports = routes;
import { Router } from "express";
const routes = new Router();

import customers from "./app/controllers/CustomersController";

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);


routes.get("/hello", (req,res) => {
    return res.json({message: "Hello"});
})


module.exports = routes;

// //Cada route pega diretamente do diretorio CustomersControllers o método pra cada operação.
// routes.get("/customers", customers.index);
// routes.get("/customers/:id", customers.show);
// routes.post("/customers", customers.create);
// routes.put("/customers/Id", customers.update);
// routes.delete("/customers/Id", customers.destroy);

// export default routes;
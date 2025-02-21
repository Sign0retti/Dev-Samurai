import { Router } from "express";
const routes = new Router();

import customers from "./app/controllers/CustomersController";


//Cada route pega diretamente do diretorio CustomersControllers o método pra cada operação.
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/Id", customers.update);
routes.delete("/customers/Id", customers.destroy);

export default routes;
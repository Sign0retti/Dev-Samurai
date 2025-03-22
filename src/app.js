// Aulas utilizadas neste repositório:
// Aula 0601 - Configurando uma estrutura moderna

import express from "express"
import routes from "./routes";

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){ //Camada entre o APP e o Express utilizado principalmente em autenticidades
        this.server.use(express.json()); //Mesma coisa que "server.use(express.json());" que itilizamos no Index

    }

    routes(){

        this.server.use(routes);
    }
}

export default new App().server
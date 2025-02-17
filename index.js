const express = require ("express");
const server = express();

//http://localhost:3000/?nome=Gabriel&idade=23
// Query params = ?nome=Gabriel&idade=23
/*A primeira Query sempre com ? e o demais com & */

//http:localhost:3000/hello/Felipe
// Route params = /hello/:nome

/*Aula sobre CRUD basica para relembrar implementando e utilizando Insomnia*/

server.use(express.json());

let customers = [

    {id: 1, name: "Gabriel Signoretti", site:    "https://www.linkedin.com/in/gabriel-signoretti-ab535418b/"},
    {id: 2, name: "Google",             site:     "https://google.com.br"}

];

server.get("/customers", (req,res) =>{
    return res.json(customers)
});


//GET na API pra trazer customers com ID
server.get("/customers/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id)
    const status = customers ? 200 : 400 //if pra saber se deu certo a requisição na API
    return res.status(status).json(customer);
})

//Post pra incluir novo cliente
server.post("/customers", (req,res) =>{
    const {name, site} = req.body;
    const nextId = customers[customers.length -1].id + 1;
    const newCustomer = {id: nextId, name, site}
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);

});


server.put("/customers/:id", (req,res) =>{
    const id = parseInt(req.params.id);
    const{name, site} = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers[index] = {id : parseInt(id), name, site};
    }

    return res.status(status).json(customers[index]);
});


server.delete("/customers/:id", (req,res) =>{
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers.splice(index,1)
    }

    return res.status(status).json();
});


server.listen(3000);
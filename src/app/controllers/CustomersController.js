let customers = [

    {id: 1, name: "Gabriel Signoretti", site:    "https://www.linkedin.com/in/gabriel-signoretti-ab535418b/"},
    {id: 2, name: "Google",             site:     "https://google.com.br"}

];


class  CustomerController{
    
    //Listagem dos Registros
    index(req, res){
        server.get("/customers", (req,res) =>{
            return res.json(customers)
        });
    }

    // Recupera um Customer
    show(req,res){
        server.get("/customers/:id", (req,res) => {
            const id = parseInt(req.params.id);
            const customer = customers.find(item => item.id === id)
            const status = customers ? 200 : 400 //if pra saber se deu certo a requisição na API
            return res.status(status).json(customer);
        })
    }

    //Cria um novo Customer
    create(req, res){
        server.post("/customers", (req,res) =>{
        const {name, site} = req.body;
        const nextId = customers[customers.length -1].id + 1;
        const newCustomer = {id: nextId, name, site}
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
        });
    }

    //Atualiza um Customer
    update(req, res){
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

    }

    //Deleta um Customer
    destroy(req, res){
        server.delete("/customers/:id", (req,res) =>{
            const id = parseInt(req.params.id);
            const index = customers.findIndex(item => item.id === id);
            const status = index >= 0 ? 200 : 404;
        
            if(index >= 0){
                customers.splice(index,1)
            }
        
            return res.status(status).json();
        });
    }

}

module.exports = new CustomerController();
# Dev-Samurai

# 📝 Praticando CRUD com Insomnia

Este repositório foi criado para praticar as operações **CRUD** (Create, Read, Update, Delete) utilizando o **Insomnia** para testar requisições HTTP.

Todas as operações foram baseadas nas video-aulas do antigo canal "Dev-Samurai" para praticas de Backend!

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Insomnia** (para testar as requisições)

## 📌 Endpoints Disponíveis

### 🔹 Criar um novo cliente (CREATE)
- **Método:** `POST`
- **URL:** `/customers`
- **Body (JSON):**
  ```json
  {
    "id": 1,
    "name": "Cliente Exemplo",
    "site": "https://cliente.com"
  }
  ```

### 🔹 Listar todos os clientes (READ)
- **Método:** `GET`
- **URL:** `/customers`

### 🔹 Atualizar um cliente (UPDATE)
- **Método:** `PUT`
- **URL:** `/customers/:id`
- **Body (JSON):**
  ```json
  {
    "name": "Novo Nome",
    "site": "https://novosite.com"
  }
  ```

### 🔹 Deletar um cliente (DELETE)
- **Método:** `DELETE`
- **URL:** `/customers/:id`


5. **Abra o Insomnia e teste os endpoints!**

## 🛠 Melhorias Futuras
- [ ] Adicionar validação de dados
- [ ] Implementar banco de dados
- [ ] Criar uma interface frontend

---
📌 *Este projeto foi feito para fins de aprendizado e prática.* 😊


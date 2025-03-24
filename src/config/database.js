const { underscoredIf } = require("sequelize/lib/utils");

module.exports ={
  dialect: 'postgres',
  host: "localhost",
  username: "postgres",
  password: "secret",
  database: "teste-dominando-nodejs",
  define: {
    timestamp: true, //cria duas coilunas: createdAt e updatedAt
    underscored: true, //nomeclatura _ (não camelCase)
    underscoredAll: true,
  }
};

const Sequelize = require("sequelize");
const database = require("../../db/db");

const Aluno = database.define("aluno", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  preco: Sequelize.DECIMAL,
  descricao: Sequelize.STRING,
});

module.exports = Produto;

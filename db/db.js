const Sequelize = require("sequelize");
const sequelize = new Sequelize("cad_aluno", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;

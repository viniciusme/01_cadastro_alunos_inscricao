const Sequelize = require("sequelize");
const sequelize = new Sequelize("cad_aluno", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;

//   console.log(req.query.status);

//   const status = "ativo";
//   console.log(dataCursos);
//   res.status(200).json(dataCursos);

//   if (status === req.query.status) {
//     res.status(200).json("O status informado é válido");
//   } else {
//     return res.status(400).send("O status informado é inválido");
//   }

//   res.status(200).json("Rota cursos funcionando!");

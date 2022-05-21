const validator = require("../../validators/");

module.exports = (router) => {
  router.post("/auth", (req, res, next) => {
    console.log(req.body);

    // validar os dados recebidos

    if (!req.body.login) {
      res.status(400).send("login não informado!");
    }

    if (!req.body.password) {
      res.status(400).send("Password não informado!");
    }

    //pesquisar na base de dados

    // verificar se a senha está correta

    // construir JWT para o usuário

    // devolver a credencial JWT

    res.status(200).send("Login realizado com sucesso!");
  });

  router.post("/alunos", (req, res, next) => {
    console.log(req.body);
    res.status(200).json("Rota cursos funcionando!");
  });
};

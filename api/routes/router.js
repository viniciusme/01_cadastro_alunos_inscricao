const { Router } = require("express");

const { name, version } = require("../../package.json");

module.exports = (app) => {
  //health-check
  app.get("/", (req, res, next) => {
    res.status(200).send({ name, version });
  });

  app.post("/auth", (req, res, next) => {
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

  app.get("/cursos", (req, res, next) => {
    // console.log(req.query);

    // const status = ["ativo", "inativo"];

    // if (req.query.status) {
    //   if (!status.includes(req.query.status));
    //   return res.status(400).send("O status informado é inválido");
    // }

    res.status(200).json("Rota cursos funcionando!");
  });

  app.post("/cursos/:id/inscricoes", (req, res) => {
    console.log(req.params);
    console.log(req.body);

    res.status(200).send("Rota inscrição de cursos funcionando!");
  });

  app.post("/alunos", (req, res, next) => {
    console.log(req.body);
    res.status(200).json("Rota cursos funcionando!");
  });
};

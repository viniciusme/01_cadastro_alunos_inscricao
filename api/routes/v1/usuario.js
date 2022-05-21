const express = require("express");
const Validator = require("../../middlewares/Validator");

module.exports = (router) => {
  router.post("/auth", Validator("login"), (req, res, next) => {
    console.log(req.body);
    const accessToken = Date.now();
    const refreshToken = Date.now();

    res.json(
      `Sejá Bem Vindo! ${req.body.email}! ${(accessToken, refreshToken)}`
    );
  });

  router.post("/cadastro", Validator("register"), (req, res, next) => {
    console.log(req.body);
    // res.send(req.body.nome);

    res.status(200).json(req.body);
  });

  router.get("/alunos", (req, res, next) => {
    const alunos = [
      {
        id: "1",
        nome: "Vinicius",
        email: "vini@vinimendes.com.br",
      },
      {
        id: "2",
        nome: "Thallyta",
        email: "thallyta@teste.com.br",
      },
    ];
    console.log(alunos);

    res.status(200).json(alunos);
  });
};

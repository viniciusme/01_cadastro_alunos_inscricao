const express = require("express");
const jwt = require("jsonwebtoken");

const usuarioController = require("../../controllers/usuario.controller");

const Validator = require("../../middlewares/Validator");

const dataAlunos = require("../../../db/dataAlunos");

const SECRET = "vinimendesteste";

module.exports = (router) => {
  router.post("/cadastro", Validator("register"), usuarioController.criaAluno);

  router.post("/auth", Validator("login"), (req, res, next) => {
    const body = req.body;
    console.log(req.body);

    if (
      req.body.email === "vini@vinimendes.com.br" &&
      req.body.password === "12345"
    ) {
      const token = jwt.sign({ user: 1 }, SECRET, { expiresIn: 500 });

      res.json(
        // `Sejá Bem Vindo! ${req.body.email}! ${(accessToken, refreshToken)}`
        { auth: true, token }
      );
    }
    res.status(200).json("Login realizado com sucesso!");
  });

  router.get("/alunos", (req, res, next) => {
    console.log(dataAlunos);

    res.status(200).json(dataAlunos);
  });

  router.get("/aluno/:id", (req, res, next) => {
    // console.log(req.params.id);
    const id = req.params.id;
    console.log(id);

    const newDb = dataAlunos.filter((valorAtual) => {
      return valorAtual.id.includes(id);
    });

    res.status(200).json(newDb);
  });
};

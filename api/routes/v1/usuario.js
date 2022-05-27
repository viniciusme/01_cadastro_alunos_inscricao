const express = require("express");
const jwt = require("jsonwebtoken");

const Validator = require("../../middlewares/Validator");
const usuarioController = require("../../controllers/usuario.controller");

const dataAlunos = require("../../../db/dataAlunos");

const SECRET = "vinimendesteste";

module.exports = (router) => {
  router.post("/cadastro", Validator("register"), (req, res, next) => {
    const body = req.body;

    dataAluno.push(body);
    return res.json(dataAlunos);

    res.status(200).json("Cadastro realizado com sucesso!");
  });

  router.post("/auth", Validator("login"), (req, res, next) => {
    const body = req.body;
    console.log(body);

    // if (req.body.email === dataAlunos.email && req.body.password === "12345") {
    //   const token = jwt.sign({ user: 1 }, SECRET, { expiresIn: 500 });

    //   res.json(
    //     // `Sejá Bem Vindo! ${req.body.email}! ${(accessToken, refreshToken)}`
    //     { auth: true, token }
    //   );
    // }

    res.status(401).end();
  });

  router.get("/usuario", (req, res, next) => {
    console.log(req.body);

    res.status(200).json("Rota usuários funcionando!");
  });

  router.get("/alunos", (req, res, next) => {
    console.log(dataAlunos);

    res.status(200).json(dataAlunos);
  });

  router.get("/aluno/:id", (req, res, next) => {
    console.log(req.params.id);

    res.status(200).json(req.params.id);
  });
};

const express = require("express");
const jwt = require("jsonwebtoken");
const Validator = require("../../middlewares/Validator");

const dataAlunos = require("../../../db/dataAlunos");
const dataCurss = require("../../../db/dataCursos");

const SECRET = "vinimendesteste";

module.exports = (router) => {
  router.post("/auth", Validator("login"), (req, res, next) => {
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
    const accessToken = Date.now();
    const refreshToken = Date.now();

    res.status(401).end();
  });

  router.post("/cadastro", Validator("register"), (req, res, next) => {
    console.log(req.body);
    // res.send(req.body.nome);

    res.status(200).json(req.body);
  });

  router.get("/alunos", (req, res, next) => {
    console.log(dataAlunos);
    res.status(200).json(dataAlunos);
  });

  router.post("/logout", (req, res, next) => {
    res.end();
  });
};

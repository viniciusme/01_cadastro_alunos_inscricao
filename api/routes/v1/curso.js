const express = require("express");
const Validator = require("../../middlewares/Validator");

const dataAlunos = require("../../../db/dataAlunos");
const dataCursos = require("../../../db/dataCursos");

module.exports = (router) => {
  router.get("/cursos", (req, res, next) => {
    console.log(req.query.status);

    const status = "ativo";
    console.log(dataCursos);
    res.status(200).json(dataCursos);

    if (status === req.query.status) {
      res.status(200).json("O status informado é válido");
    } else {
      return res.status(400).send("O status informado é inválido");
    }

    res.status(200).json("Rota cursos funcionando!");
  });

  router.post("/cursos/:id/inscricoes", (req, res) => {
    console.log(req.params);
    console.log(req.body);

    res.status(200).send("Rota inscrição de cursos funcionando!");
  });
};

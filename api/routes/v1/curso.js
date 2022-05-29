const express = require("express");

const cursoController = require("../../controllers/curso.controller");

module.exports = (router) => {
  router.get("/cursos", cursoController.listarCursos);

  router.post("/cursos/:id/inscricoes", cursoController.inscricao);

  router.get("/inscricoes", cursoController.listarInscricao);

  router.delete("/curso/:id", cursoController.cancelarInscricao);
};

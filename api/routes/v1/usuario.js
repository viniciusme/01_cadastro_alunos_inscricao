const express = require("express");

const usuarioController = require("../../controllers/usuario.controller");

const Validator = require("../../middlewares/Validator");

module.exports = (router) => {
  router.post("/cadastro", Validator("register"), usuarioController.criaAluno);

  router.post("/auth", Validator("login"), usuarioController.autenticarUsuario);

  router.get("/alunos", usuarioController.listarAlunos);

  router.get("/aluno/:id", usuarioController.buscarAluno);

  router.delete("/aluno/:id", usuarioController.buscarAluno);
};

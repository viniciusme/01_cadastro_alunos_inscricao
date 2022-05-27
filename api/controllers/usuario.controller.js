const jwt = require("jsonwebtoken");

const dataAlunos = require("../../db/dataAlunos");
const SECRET = "vinimendesteste";

const criaAluno = async (req, res, next) => {
  // const body = req.body;
  // dataAluno.push(body);
  // return res.json(dataAlunos);
};

const autenticarUsuario = async (req, res, next) => {
  // console.log("cheguei aqui");
  const aluno = dataAlunos;
};

const listarAluno = async (req, res, next) => {};

const excluirAluno = async (req, res, next) => {};

const atualizarAluno = async (req, res, next) => {};

module.exports = {
  criaAluno,
  autenticarUsuario,
};

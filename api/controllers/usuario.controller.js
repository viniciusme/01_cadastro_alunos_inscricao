const jwt = require("jsonwebtoken");

const dataAlunos = require("../../db/dataAlunos");
const SECRET = "vinimendesteste";

const criaAluno = async (req, res, next) => {
  const body = req.body;
  console.log(body);

  const novoObj = {
    ...body,
    id: Math.trunc(Math.random() * 20),
  };

  dataAlunos.push(novoObj);

  res.status(200).json(`Cadastro realizado com sucesso!`);
};

const autenticarUsuario = async (req, res, next) => {
  const aluno = dataAlunos;
};

const listarAluno = async (req, res, next) => {};

const excluirAluno = async (req, res, next) => {};

const atualizarAluno = async (req, res, next) => {};

module.exports = {
  criaAluno,
  autenticarUsuario,
};

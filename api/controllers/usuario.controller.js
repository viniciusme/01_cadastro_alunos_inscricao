const jwt = require("jsonwebtoken");
const SECRET = "vinimendesteste";

const dataAlunos = require("../../db/dataAlunos");

const criaAluno = async (req, res, next) => {
  const body = req.body;
  console.log(body);

  const novoObj = {
    id: Math.trunc(Math.random() * 30000),
    ...body,
  };

  dataAlunos.push(novoObj);

  res.status(200).json(`Cadastro realizado com sucesso!`);
};

const autenticarUsuario = async (req, res, next) => {
  const body = req.body;
  console.log(req.body);

  if (
    req.body.email === "vini@vinimendes.com.br" &&
    req.body.password === "12345"
  ) {
    const token = jwt.sign({ user: 1 }, SECRET, { expiresIn: 500 });

    res.status(200).json(`Sejá Bem Vindo! ${req.body.email}! Token: ${token}`);
  } else {
    res.status(400).json("Usuário ou senha inválido");
  }
};

const listarAlunos = async (req, res, next) => {
  console.log(dataAlunos);

  res.status(200).json(dataAlunos);
};

const buscarAluno = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  let alunoId = dataAlunos.filter((item) => item.id == id);

  res.status(200).json(alunoId);
};

module.exports = {
  criaAluno,
  autenticarUsuario,
  listarAlunos,
  buscarAluno,
};

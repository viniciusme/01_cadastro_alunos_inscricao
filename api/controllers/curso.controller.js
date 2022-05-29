let dataCursos = require("../../db/dataCursos");
let inscricaoCurso = require("./../../db/inscricaoCurso");

const listarCursos = async (req, res, next) => {
  console.log(dataCursos);

  res.status(200).json(dataCursos);
};

const listarInscricao = async (req, res, next) => {
  console.log(inscricaoCurso);

  res.status(200).json(inscricaoCurso);
};

const inscricao = async (req, res, next) => {
  const id = req.params.id;
  const alunoEmail = req.body.alunoEmail;

  // console.log(params);
  // console.log(body);

  const novoObj = {
    id: Math.trunc(Math.random() * 30000),
    alunoEmail,
  };

  console.log(novoObj);

  inscricaoCurso.push(novoObj);

  res.status(200).send("Inscrição realizada com sucesso!");
};

const cancelarInscricao = async (req, res, next) => {
  const id = req.params.id;

  console.log(id);

  let newDb = inscricaoCurso.filter((item) => item.id != id);

  console.log(newDb);

  inscricaoCurso = newDb;

  res.status(200).send("Inscrição cancelada com sucesso!");
};

module.exports = {
  listarCursos,
  listarInscricao,
  inscricao,
  cancelarInscricao,
};

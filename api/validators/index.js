const register = require("../validators/register.validator");
const login = require("../validators/login.validator");
const listarAluno = require("../validators/listar.alunos.validator");

module.exports = {
  register,
  login,
  listarAluno,
};

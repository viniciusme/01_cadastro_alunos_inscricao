const usuarioController = require("../controllers/usuario.controller");

const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    "any.required": `E-mail é um campo obrigatório`,
    "string.empty": `E-mail não deve ser vazio`,
    "string.email": `E-mail deve ser um email válido`,
  }),
  password: Joi.string().min(5).max(20).required().messages({
    "any.required": `Password é um campo obrigatório`,
    "string.empty": `Password não deve ser vazio`,
    "string.min": `Password não deve ter menos que {#limit} caracteres`,
    "string.max": `Password não deve ter mais que {#limit} caracteres`,
    // "string.uppercase": `"Password" Deve ter no mínimo {#limit} caracteres maiúscula`,
  }),
});

module.exports = loginSchema;

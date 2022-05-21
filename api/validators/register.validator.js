const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    "any.required": `E-mail é um campo obrigatório`,
    "string.empty": `E-mail não deve ser vazio`,
    "string.email": `E-mail deve ser um email válido`,
  }),
  firstname: Joi.string().min(3).max(30).required().messages({
    "any.required": `Nome é um campo obrigatório`,
    "string.empty": `Nome não deve ser vazio`,
    "string.min": `Nome não deve ter menos que {#limit} caracteres`,
    "string.max": `Nome não deve ter mais que {#limit} caracteres`,
  }),
  lastname: Joi.string().min(3).max(30).required().messages({
    "any.required": `Sobrenome é um campo obrigatório`,
    "string.empty": `Sobrenome não deve ser vazio`,
    "string.min": `Sobrenome não deve ter menos que {#limit} caracteres`,
    "string.max": `Sobrenome não deve ter mais que {#limit} caracteres`,
  }),
  phone: Joi.string().min(11).max(11).required().messages({
    "any.required": `Telefone é um campo obrigatório`,
    "string.empty": `Telefone não deve ser vazio`,
    "string.min": `Telefone não deve ter menos que {#limit} caracteres`,
    "string.max": `Telefone não deve ter mais que {#limit} caracteres`,
  }),
  birthdate: Joi.date().iso().required(),
  password: Joi.string().required().min(8).max(20).messages({
    "any.required": `Password é um campo obrigatório`,
    "string.empty": `Password não deve ser vazio`,
    "string.min": `Password não deve ter menos que {#limit} caracteres`,
    "string.max": `Password não deve ter mais que {#limit} caracteres`,
  }),
});

module.exports = registerSchema;

const createHttpError = require("http-errors");

//* Inclui joi para verificar o tipo de erro
const Joi = require("joi");
const jwt = require("jsonwebtoken");

//* Inclui todos os validadores
const Validators = require("../validators/index");

module.exports = function (validator) {
  //! Se o validador não existir, jogue err
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);

  return async function (req, res, next) {
    try {
      const validated = await Validators[validator].validateAsync(req.body);

      req.body = validated;

      next();
    } catch (err) {
      //* Passa err para o próximo
      //! Se ocorrer um erro de validação, chame next com HTTP 422. Caso contrário, HTTP 500

      if (err.isJoi)
        return next(createHttpError(422, { message: err.message }));

      next(createHttpError(500));
    }
  };
};

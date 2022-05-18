const { Router } = require("express");

const { name, version } = require("../../package.json");

const cursoRoutesV1 = require("./v1/curso");
const usuarioRoutesV1 = require("./v1/usuario");

module.exports = (router) => {
  //health-check
  router.get("/", (req, res, next) => {
    res.status(200).send({ name, version });
  });

  const routerV1 = Router();

  cursoRoutesV1(routerV1);
  usuarioRoutesV1(routerV1);

  router.use("/v1", routerV1);
};

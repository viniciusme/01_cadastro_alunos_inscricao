module.exports = (routerApp) => {
  routerApp.get("/cursos", (req, res, next) => {
    console.log(req.query);

    res.status(200).json("Rota cursos funcionando!");
  });

  routerApp.post("/cursos/:id/inscricoes", (req, res) => {
    console.log(req.params);
    console.log(req.body);

    res.status(200).send("Rota inscrição de cursos funcionando!");
  });
};

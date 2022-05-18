const express = require("express");
const app = express();

const porta = 3000;

app.use(express.json());

app.listen(porta, () => {
  console.log("Servidor rodando na porta: ", porta);
});

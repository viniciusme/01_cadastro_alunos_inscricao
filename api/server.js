const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const router = require("./routes/router");

const porta = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

app.listen(porta, () => {
  console.log(`Servidor rodando em: http://localhost:${porta}`);
});

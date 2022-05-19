const express = require("express");
const app = express();

const router = require("./routes/router");

const porta = 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log("test middleware global");
  next();
});

router(app);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`);
});

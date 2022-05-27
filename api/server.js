const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.unsubscribe(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const router = require("./routes/router");

const porta = 3000;

router(app);

app.listen(porta, () => {
  console.log(`Servidor rodando em: http://localhost:${porta}`);
});

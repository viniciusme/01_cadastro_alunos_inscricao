require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const router = require("./routes/router");

router(app);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});

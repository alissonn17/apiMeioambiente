// IMPORTANDO PACOTES
import express from "express"
import user from "./routes/user.routes.js";
import city from "./routes/city.routes.js";
import country from "./routes/country.routes.js";
import main from "./routes/main.routes.js";

// INSTANCIANDO O EXPRESS
// const express = require("express");
const app = express();

// DEFININDO A PORTA
const port = 3000;

// MIDDLEWARE
app.use(express.json());

// USANDO AS ROTAS
app.use(main);
app.use("/user", user);
app.use("/city", city);
app.use("/country", country);

// RODA APP
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


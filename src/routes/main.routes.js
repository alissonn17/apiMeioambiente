// IMPORTANDO ROUTER E MAINCONTROLLER
import { Router } from "express";
import MainController from "../controller/Main.controller.js";

// CONST ROUTER
const main = Router();

// ROTAS
main.get("/", MainController.pegaInfo);

//EXPORTAÇÃO PADRÃO DA CONST
export default main;
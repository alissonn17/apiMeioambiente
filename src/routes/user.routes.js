// IMPORTANDO ROUTER E USERCONTROLLER
import { Router } from "express";
import UserController from "../controller/User.controller.js";

// CONST ROUTER
const user = Router();

// ROTAS
user.get("/", UserController.pegaUser);
user.post("/cadastra", UserController.criaUser);

//EXPORTAÇÃO PADRÃO DA CONST
export default user;
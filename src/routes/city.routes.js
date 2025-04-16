// IMPORTANDO ROUTER E CITYCONTROLLER
import { Router } from "express";
import CityController from "../controller/City.controller.js";

// CONST ROUTER
const city = Router();

// ROTAS
city.get("/", CityController.pegaHab);
city.get("/destaque", CityController.pegaCity);
city.get("/descricao", CityController.pegacidaD);
city.get("/:nome", CityController.consultaCity);

//EXPORTAÇÃO PADRÃO DA CONST
export default city;
// IMPORTANDO ROUTER E COUNTRYCONTROLLER
import { Router } from "express";
import CountryController from "../controller/Country.controller.js";

// CONST ROUTER
const country = Router();

// ROTAS
country.get("/", CountryController.pegaHab);
country.get("/destaque", CountryController.pegaDestaque);
country.get("/descricao", CountryController.pegaDetalhe);
country.get("/:nome", CountryController.consultaCountry);

//EXPORTAÇÃO PADRÃO DA CONST
export default country;
// IMPORTANDO DADOS CIY
import { hab, destaque, cidadesTecnologicas } from "../data/city.js";


// CIDADE CONTROLLER
class CityController{    
    // PEGA HABITANTES
    pegaHab(req, res){
        res.json({ city:  hab });
    }

    // PEGA CIDADES
    pegaCity(req, res){
        res.json({ city:  destaque });
    }

    // PEGA DESCRIÇÃO 
    pegacidaD(req, res){
        res.json({ city:  cidadesTecnologicas });
    }

    // PROCURA CITY
    consultaCity(req, res){
        const search = req.params.nome
        if (hab[search]){
            res.json({ CityInfo: [`${search} habitantes: ${hab[search]}`, destaque[search], cidadesTecnologicas[search]]});
        }else{
            res.json({Erro: "Cidade não encontrada!!!"})
        }        
    }
}

// EXPORTE PADRÃO
export default new CityController();
// IMPORTANDO DADOS COUNTRY
import { infoHab, destaque, maisInfo } from "../data/country.js";


// COUNTRY CONTROLLER
class CountryController{    
    // PEGA HABITANTES
    pegaHab(req, res){
        res.json({ country:  infoHab });
    }

    // PEGA COMBATE A POLUIÇÃO
    pegaDestaque(req, res){
        res.json({ country:  destaque });
    }

    // PEGA DESCRIÇÃO
    pegaDetalhe(req, res){
        res.json({ country:  maisInfo });
    }

    // PROCURA COUNTRY
    consultaCountry(req, res){
        const search = req.params.nome;
        if (infoHab[search]){
            res.json({ CountryInfo: [`${search} habitantes: ${infoHab[search]}`, destaque[search], maisInfo[search]]});
        }else{
            res.json({Erro: "País não encontrado!!!"})
        }          
    }
}

// EXPORTE PADRÃO
export default new CountryController();
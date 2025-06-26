// IMPORTANDO DADOS CITY
import { info } from "../data/main.js";


// CIDADE CONTROLLER
class MainController{    
    // PEGA HABITANTES
    pegaInfo(req,res){
        res.status(200).json({ Main:  info });
    }
}

// EXPORTE PADRÃO
export default new MainController();
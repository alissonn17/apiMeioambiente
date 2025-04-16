// IMPORTANDO DADOS CIY
import { info } from "../data/main.js";


// CIDADE CONTROLLER
class MainController{    
    // PEGA HABITANTES
    pegaInfo(req,res){
        res.json({ Main:  info });
    }
}

// EXPORTE PADRÃO
export default new MainController();
// IMPORTANDO CLASSE
import { User } from "../model/User.model.js";
import { v4 as id } from "uuid";

// CLASSE CONTROLE DO USER
class UserController{
    // PEGA USER
    pegaUser(req,res){
        res.json({ user: User.user });
    }

    // INSTANCIANDO USER
    criaUser(req, res) {
        // DESESTRUTURANDO A REQUISIÇÃO DO POST
        const { nome, idade, email, telefone } = req.body;

        if (!nome || !idade || !email || !telefone){
            res.status(400).json({ message: "Está faltando dados." });
        }

        if (typeof idade != "number"){
            res.status(400).json({ message: "Por Favor, idade deve ser um número." });
        }

        // INSTANCIA NOVO USER
        const novoUser = new User(id(), nome, idade, email, telefone);
      
        // SALVANDO USER
        novoUser.salvaUser(novoUser);
        res.json({ user: novoUser });
    }
}

// EXPORTE PADRÃO
export default new UserController();
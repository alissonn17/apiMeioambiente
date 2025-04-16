// EXPORTANDO CLASSE USER
export class User {
    // CONSTRUTOR DA CLASSE USER
    constructor(id,nome,idade,email,telefone){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.telefone = telefone;
    }

    // LISTA DE OBJETOS
    static user = [];

    // SALVAR USER
    salvaUser(user){
        User.user.push(user);
    }
}
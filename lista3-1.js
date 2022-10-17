"use strict";
class Usuario {
    constructor(_email, _senha) {
        this.admin = false;
        this.isAdmin = () => {
            if (this.admin == false) {
                console.log("Não é adimnistrador!");
            }
            else {
                console.log("É adimnistrador!");
            }
        };
        this.email = _email;
        this.senha = _senha;
    }
}
class Admin extends Usuario {
    constructor(_email, _senha) {
        super(_email, _senha);
        this.admin = true;
    }
}
let Monique = new Usuario("moniquesouza@email.com", "34800");
let Fernanda = new Admin("fernandacarvalho@email.com", "34800");
Monique.isAdmin();
Fernanda.isAdmin();

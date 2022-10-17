class Usuario{
    email:string
    senha:string
    admin:boolean = false

    constructor(_email:string, _senha:string)
    {
        this.email = _email
        this.senha = _senha
    }

    isAdmin = () => {
        if(this.admin == false)
        {
            console.log("Não é adimnistrador!");
        }
        else{
            console.log("É adimnistrador!");
        }
    }
}

class Admin extends Usuario{

    constructor(_email:string, _senha:string)
    {
        super(_email, _senha)
        this.admin = true
    }
}

let Monique:Usuario = new Usuario("moniquesouza@email.com", "34800")
let Fernanda:Admin = new Admin("fernandacarvalho@email.com", "34800")

Monique.isAdmin()
Fernanda.isAdmin()

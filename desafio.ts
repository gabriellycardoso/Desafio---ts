class Pacote {
  nome: string
  descricao: string
  data: Date
  status: boolean
  id: string

  constructor (_nome:string, _descricao:string, _data:Date, _status:boolean, _id:string)
  {
    this.nome = _nome
    this.descricao = _descricao
    this.data = _data
    this.status = _status
    this.id = _id
  }
}

let pacotes: Array<Pacote> = []

fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes',{
  method: 'GET',
  headers: {'Content-Type': "application/json"}
})

.then(response => response.json())
.then(result => {
  console.log(result);

     for (let index = 0; index < result.length; index++){
      pacotes[index] = new Pacote(result [index].nome,result[index].descricao,new Date(result [index].data), result[index].status, result[index].id)
    }
    console.log(pacotes)
    listar ()
})
let div = document.querySelector(".ajustes") as HTMLElement

const listar = () => {
div.innerHTML = ""
  for (let index = 0; index < pacotes.length; index++)
  {
    div.innerHTML += ` <div class="botoes_gerais">

    <h2>${pacotes [index].nome}</h2>
    <br>
    <p>
        ${pacotes [index].descricao} 
    </p>
    <p>
        ${pacotes [index].data} 
    </p>
    <br>
    <button class="botao2">Editar</button>

    <button class="botao3">Excluir</button>

</div>`
  }

}

let dia = document.getElementById("data") as HTMLInputElement
let pacote = document.getElementById("text") as HTMLInputElement
let descricao_geral = document.getElementById("descricao") as HTMLInputElement
const cadastrar = () => {
  let documentos = pacote.value
  let data = dia.value
  let descricao = descricao_geral.value

  let responsavel = (pacotes.length+1)
  let cadastrar: Pacote = new Pacote (documentos, descricao, new Date(data), true, responsavel.toString())

  pacotes.push(cadastrar)
  listar ()

}


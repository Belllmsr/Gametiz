let menu = document.getElementById("menu") 
let iconeBarras= document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //Menu fechado - tem a classe menu-fechado
    //Menu aberto - não tem a classe menu-fechado

    //alterna a classe "menu-fechado" no menu
    //menu.classList.toggle("menu-fechado")
  
    //Se o menu contem a classe menu-fechado
if(menu.classList.contains("menu-fechado")){
    //Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

//esconder icone barras
iconeBarras.style.display = "none"

//mostrar o icone do x
iconeX.style.display = "inline"

}else{
    //Fechar o menu - adicionar a classe menu-fechado
    menu.classList.add("menu-fechado")

    //esconder icone do x
    iconeX.style.display= "none"

    //mostrar o icone barras
    iconeBarras.style.display = "inline"
}


}
function solicitarOrcamento(event){
    //Pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorTelefone = document.getElementById("campo-telefone").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

  

    //Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        telefone: valorTelefone,
        email: valorEmail,
        descricao: valorDescricao
    }

 
    //Enviar a requisicao para a API
    //Metodo HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/SolicitacaoServico", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

    //CASO SUCESSO
    .then(resposta => {
        console.log(resposta);
        //Limpar os inputs
        document.querySelector("#agendamento form").reset()

        //mostrar um alert de sucesso
        alert("Solicitação enviada com sucesso!!! 👍")
    })

    // CASO ERRO
       //Mostrar alert com mensagem de erro
    .catch(erro =>{
        console.log(erro);
        alert("Erro na requisição 😓")
    })

    event.preventDefault()
    
}
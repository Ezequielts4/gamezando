let menu = document.getElementById("menu")

let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

// outra forma -> menu.classList.toggle("menu-fechado")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu

        menu.classList.remove("menu-fechado")

        // mostrar ícone X e esconder o ícone barras

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"

    }
    else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // mostrar o ícone barras e esconder o ícone X

        iconeBarras.style.display = "inline"

        iconeX.style.display = "none"

    }
}

// mostrar novamente o menu acima da responsividade 
onresize = () => {

    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"
}


// Receber pedidos do formulário

function solicitarOrcamento(event) {
    // Pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value
    
    // Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar a requisição para a API

    //metodo HTTP POST - Criar/Create -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/pedidos", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

        // CASO SUCESSO
        .then(resposta => {
            console.log(resposta)

            // Limpar os inputs
            document.querySelector("#form").reset()

            // Mostrar um alert de sucesso
            alert("Solicitação enviada com sucesso! 😉")
        })

        // CASO ERRO
        .catch(erro => {
            // Mostar um alert com erro
            console.log(erro)
            alert("Erro na requisição! 🫤")
        })
        
        // previni que o formulário regarregue a página ao enviar
        event.preventDefault()
}
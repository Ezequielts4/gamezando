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
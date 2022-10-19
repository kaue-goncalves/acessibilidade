var botao_contraste_branco = document.getElementById('branco')
var botao_contraste_preto = document.getElementById('preto')
var todos = document.querySelectorAll('*')

function mudarParaBranco() {
    console.log(todos);

    todos.forEach(function(elemento){
        elemento.style.color = 'black'
        elemento.style.backgroundColor = 'white'
    })
}

botao_contraste_branco.addEventListener('click', mudarParaBranco)

function mudarParaPreto() {
    console.log(todos);

    todos.forEach(function(elemento){
        elemento.style.color = 'white'
        elemento.style.backgroundColor = 'black'
    })
}

botao_contraste_preto.addEventListener('click', mudarParaPreto)
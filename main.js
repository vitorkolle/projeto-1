'use strict'

const btnCadastrar = document.getElementById('botao-cadastrar')
btnCadastrar.addEventListener('click', cadastrar)

const btnLogar = document.getElementById('botao-logar')
btnLogar.addEventListener('click', logar)


function cadastrar(){
    const nome = document.getElementById('input-nome').value
    const email = document.getElementById('input-email').value
    const senha = document.getElementById('input-senha').value
}

function logar(){
    const email = document.getElementById('input-email').value
    const senha = document.getElementById('input-senha').value
}
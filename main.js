'use strict' 

const nome = document.getElementById('input-nome').value
const email = document.getElementById('input-email').value
const senha = document.getElementById('input-senha').value

//Uso da detecção da tecla 'enter' para realizar a ação
const input_nome = document.getElementById('input-nome')
    input_nome.addEventListener('keypress', function(event){
        if(event.key == 'Enter'){
            criarNovoUsuario()
        }
    })

    const input_email = document.getElementById('input-email')
    input_email.addEventListener('keypress', function(event){
        if(event.key == 'Enter'){
            criarNovoUsuario()
        }
    })

    const input_senha = document.getElementById('input-senha')
    input_senha.addEventListener('keypress', function(event){
        if(event.key == 'Enter'){
            criarNovoUsuario()
        }
    })
    
function criarNovoUsuario(){
const nome = document.getElementById('input-nome').value
const email = document.getElementById('input-email').value
const senha = document.getElementById('input-senha').value

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha 
        }
    
        cadastrar(novoUsuario) 
}

async function cadastrar(novoUsuario){
    
    const url = 'http://localhost:5080/usuario'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type:' : 'application/json',
        },
        body: JSON.stringify(novoUsuario)
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}
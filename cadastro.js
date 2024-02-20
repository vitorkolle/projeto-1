'use strict' 

function criarNovoUsuario(){
const nome = document.getElementById('input-nome').value
const email = document.getElementById('input-email').value
const senha = document.getElementById('input-senha').value

if(nome === '' || senha === '' || email === ''){
    alert('Por favor, preencha todos os campos!!')
    return false;
}
try{
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha 
        }
    
        cadastrar(novoUsuario) 
}
catch(error){
    alert('Erro ao acessar a API !')
    console.error(error);
}
}

async function cadastrar(novoUsuario){

    const url = 'http://localhost:5080/usuario'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}
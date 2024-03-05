'use strict' 

function criarNovoUsuario(){
const nome = document.getElementById('input-nome').value
const email = document.getElementById('input-email').value
const senha = document.getElementById('input-senha').value
const premium = document.getElementById('input-premium')

if(nome === '' || senha === '' || email === ''){
    alert('Por favor, preencha todos os campos!!')
    return false;
}
try{
    if(premium.checked){
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha,
            premium: 1           
        }
        cadastrar(novoUsuario) 
    }
    else{
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha,
            premium: 0           
        }
        cadastrar(novoUsuario)
    }
    
   
        
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
    window.location.href = './pag home/home.html'
    return response.ok
}
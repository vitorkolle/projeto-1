'use strict'

async function validarLogin(){

    const email = document.getElementById('input-email').value;
    const senha = document.getElementById('input-senha').value; 
        
    if(email === '' || senha === ''){
        alert('Por favor, preencha todos os campos!!')
        return false;
    } else {

    try {

        const users = await fetch('http://localhost:5080/usuario');

        const listUsers = await users.json();
        
        listUsers.forEach((user) => {
            if(email === user.email && senha === user.senha){
                alert('Usuário Logado com Sucesso !!');
                localStorage.setItem('idUsuario', user.id)
                window.location.href = "../pag home/home.html"
                return true;
            }
        })

    } catch (error) {
        alert('Erro ao acessar a API !')
        console.error(error);
    }

    }
}
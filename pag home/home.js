'use strict'

async function criarCards(){
    const response = await fetch('http://localhost:5080/tarefas')
    const tarefas =  await response.json()
    const containerTarefas = document.getElementById('container-cards')
   
    tarefas.forEach(t => {
        const cont = document.createElement('div')

        cont.innerHTML = `
        <div class="card" id="${t.id}">
        <p class="titulo">${t.descrição}</p>
        <p class="data">${t.dataConclusão}</p>
        <div class="rodape-card">
        <div class="container-imagens">
        <img src="../img/image 2.png" class="btn-editar" id="${t.id}" onclick="editarCard()">
        <img src="../img/image 3.png" class="btn-excluir" id="${t.id}">
        <img src="../img/image 4.png" class="btn-criar" id="${t.id}">
        </div>
        <input type="checkbox"></input>
        </div>
        </div>
        `
        containerTarefas.appendChild(cont)
        
    })

}

async function editarCard(){
    const btnEditar = document.getElementsByClassName('btn-editar')
    btnEditar.addEventListener('click', pegarId(btnEditar))
    function pegarId(btnEditar){
        alert(btnEditar.target.id)
    }
    const titulo = prompt("Novo Título:")
    const data = prompt("Nova data:")

    alert()

    const url = `http://localhost:5080/tarefas/${id}`

}

// async function excluirCard(){
//     const 
//     const url = `http://localhost:5080/tarefas${id}`
//     const options = {
//         method: 'DELETE',
//     }
//     const response = await fetch(url, options)
// }

criarCards()
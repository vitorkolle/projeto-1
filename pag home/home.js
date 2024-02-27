'use strict'

async function criarCards(){
    const response = await fetch('http://localhost:5080/tarefas')
    const tarefas =  await response.json()
    const containerTarefas = document.getElementById('container-cards')

        for (let i = 0; i < tarefas.length; i++) {
            const cont = document.createElement('div')

            cont.innerHTML = `
            <div class="card">
            <p class="titulo">${tarefas[i].descrição}</p>
            <p class="data">${tarefas[i].dataConclusão}</p>
            <div class="rodape-card">
            <div class="container-imagens">
            <img src="../img/image 2.png" id="btn-editar${tarefas[i].id}">
            <img src="../img/image 3.png" id="btn-excluir${tarefas[i].id}">
            <img src="../img/image 4.png" id="btn-criar${tarefas[i].id}">
            </div>
            <input type="checkbox"></input>
            </div>
            </div>
            `
            containerTarefas.appendChild(cont)
            const btnEditar = document.getElementById('btn-editar' + tarefas[i].id)
            btnEditar.addEventListener('click', function(){
            pegarDadosCard()
            })
        }  
}

function pegarDadosCard(){
    const id = prompt("Id da tarefa que deseja substituir:")
    const titulo = prompt("Novo Título:")
    const data = prompt("Nova data:")

    const novoCard = {
        "id": id,
        "descrição": titulo,
        "dataConclusão": data
    }
    editarCard(novoCard)
}
async function editarCard(novoCard){

    const url = `http://localhost:5080/tarefas/${novoCard.id}`
    const responseG = await fetch(url)
    const tarefas =  await responseG.json()

    console.log(tarefas)
    
    try {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCard)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
    
   } catch (error) {
    alert('erro')
   }
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
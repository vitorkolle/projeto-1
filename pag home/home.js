'use strict'

const idUser = localStorage.getItem('idUsuario')
const premiumUser = localStorage.getItem('premiumUsuario')
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
            <img src="../img/imagem-comentarios.png" id="btn-comentario${tarefas[i].id}" class="img-comentarios">
            </div>
            </div>
            </div>
            `
            containerTarefas.appendChild(cont)

            const btnComentario = document.getElementById('btn-comentario' + tarefas[i].id)
            btnComentario.id = tarefas[i].id
            btnComentario.addEventListener('click', function(){
            localStorage.setItem('idCard', this.id)
            window.location.href = '../comentarios/comentario.html'
        })

            if(premiumUser == 1 && idUser == tarefas[i].idUsuario){
            const btnEditar = document.getElementById('btn-editar' + tarefas[i].id)
            btnEditar.addEventListener('click', function(){
            pegarDadosCard()
            })

            const btnExcluir = document.getElementById('btn-excluir' + tarefas[i].id)
            btnExcluir.addEventListener('click', function(){
            const idLocal = tarefas[i].id
            excluirCard(idLocal)
            })

            const btnCriar = document.getElementById('btn-criar' + tarefas[i].id)
            btnCriar.addEventListener('click', function(){
                criarCard()
            })
        }else{
            const btnEditar = document.getElementById('btn-editar' + tarefas[i].id)
            btnEditar.classList.add('inativo')

            const btnExcluir = document.getElementById('btn-excluir' + tarefas[i].id)
            btnExcluir.classList.add('inativo')

            const btnCriar = document.getElementById('btn-criar' + tarefas[i].id)
            btnCriar.classList.add('inativo')
            
        }
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

async function excluirCard(id){
     const url = `http://localhost:5080/tarefas/${id}`
     const options = {
         method: 'DELETE',
     }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

async function criarCard(){
    const titulo = prompt("Titulo da Tarefa")
    const data = prompt("Data da Tarefa")

    const novoCard = {
        "descrição": titulo,
        "dataConclusão": data,
        "idUsuario": id
    }

    const url = 'http://localhost:5080/tarefas'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(novoCard)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

window.onload = criarCards()
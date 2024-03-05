'use strict'

const idCard = localStorage.getItem('idCard')
const idUser = localStorage.getItem('idUsuario')
async function mostrarCard(){
    const response = await fetch(`http://localhost:5080/tarefas/${idCard}`)
    const card = await response.json()
    const container = document.getElementById('container-card')

    container.innerHTML = `
    <div class="card">
    <p class="titulo">${card.descrição}</p>
    <p class="data">${card.dataConclusão}</p>
    <div class="rodape-card"></div>
    </div>

    <div class="container-comentarios"></div>
    `
    
    

}
mostrarCard()
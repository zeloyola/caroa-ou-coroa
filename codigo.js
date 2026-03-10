const visor = document.querySelector('#visor')
const buttonSortear = document.querySelector('#sortear')
const buttonResetar = document.querySelector('#reset')

buttonSortear.addEventListener("click", sortear)
buttonResetar.addEventListener("click", reset)

function sortear() {

    const R = Math.random()
    const valorSorteado = R >= 0.5
    const resultado = valorSorteado ? 'Cara' : 'Coroa'
    
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (resultado == 'Cara') {
        img.setAttribute('src', 'imagens/gato-cara.png')
    }
    console.log(img)

    visor.innerHTML = resultado
    buttonSortear.classList.add('hide')
    buttonResetar.classList.remove('hide')

}


function reset() {
    visor.innerHTML = 'Escolha suas opções... (Cara ou Coroa)'
    buttonSortear.classList.remove('hide')
    buttonResetar.classList.add('hide')
}  
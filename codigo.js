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
    } else{
        img.setAttribute('src', 'imagens/gato-coroa.png')
    }
   

    visor.innerHTML = resultado
    visor.appendChild(img)
    rolarSom()
    buttonSortear.classList.add('hide')
    buttonResetar.classList.remove('hide')

}

function rolarSom(){
    const audio = document.querySelector('#efeitoSonoro')
    audio.play()
}


function reset() {
    visor.innerHTML = 'Escolha suas opções... (Cara ou Coroa)'
    buttonSortear.classList.remove('hide')
    buttonResetar.classList.add('hide')
}  
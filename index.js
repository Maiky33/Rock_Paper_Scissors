const piedra = document.getElementById('selector_piedra')
const papel = document.getElementById('selector_papel')
const tijera = document.getElementById('selector_tijera')
const boton = document.getElementById('button_restart')
const animacion = document.getElementById('animation')

let result_winlose = document.getElementById('container_winlose')
let result_player = document.getElementById('selector_player')
let result_cpu = document.getElementById('selector_cpu')


piedra.addEventListener('click', () => {    
    selector_player.replaceWith(piedra.children[0].cloneNode(true))
    result_cpu = (Math.round(Math.random() * 2))

    if (result_cpu == 0) {
        selector_cpu.replaceWith(piedra.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>EMPATE</div>')
    }else if (result_cpu == 1){   
        selector_cpu.replaceWith(papel.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>PERDISTE</div>')
    }else if (result_cpu == 2) {  
        selector_cpu.replaceWith(tijera.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>GANASTE</div>')
    }

})

papel.addEventListener('click', () => {
    selector_player.replaceWith(papel.children[0].cloneNode(true))
    result_cpu = (Math.round(Math.random() * 2))

    if (result_cpu == 0) {
        selector_cpu.replaceWith(piedra.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>GANASTE</div>')
    } else if (result_cpu == 1) {
        selector_cpu.replaceWith(papel.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>EMPATE</div>')
    } else if (result_cpu == 2) {
        selector_cpu.replaceWith(tijera.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>PERDISTE</div>')
    }

})

tijera.addEventListener('click', () => {
    selector_player.replaceWith(tijera.children[0].cloneNode(true))
    result_cpu = (Math.round(Math.random() * 2))

    if (result_cpu == 0) {
        selector_cpu.replaceWith(piedra.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>PERDISTE</div>')
    } else if (result_cpu == 1) {
        selector_cpu.replaceWith(papel.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>GANASTE</div>')
    } else if (result_cpu == 2) {
        selector_cpu.replaceWith(tijera.children[0].cloneNode(true))
        result_winlose.children[0].insertAdjacentHTML('afterend', '<div>EMPATE</div>')
    }

})

boton.addEventListener('click', () => {    
    location.reload()
})
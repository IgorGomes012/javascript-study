const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function getHoursSecund(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pr-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getHoursSecund(segundos)
    }, 1000)
}

document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio();
    }
    if (element.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if (element.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
    }
})

//outra maneira 

// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (event) {
//     relogio.classList.add('pausado')
//     clearInterval(timer)
// });

// zerar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0
// });

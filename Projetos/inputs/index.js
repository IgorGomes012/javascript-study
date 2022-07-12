function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    //o form tem um objeto addeventlistener que basicamente adiciona um evento que escuta, passamos com parametro submit que quer dizer enviar, e dentro desse objeto temos uma function anonima que fala evento.previna o padrao  que no caso seria o subimit    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        //criei variaveis que recebem o valor digitado
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        //sempre que quiser o valor, coloque o .value
        //console.log(nome.value, sobrenome.value, peso.value, altura.value)

        //esta empurrando com push o valor das variaveis gigitadas no input, nome,sobrenome,peso,altura e esta jogando para um objeto dentro o array
        pessoas.push({
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,
           altura: altura.value
        })
        console.log(pessoas);
        
        resultado.innerHTML +=  `<p>${nome.value} ${sobrenome.value}</p>`
    })
}
meuEscopo();
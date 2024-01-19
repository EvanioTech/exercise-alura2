let titulo = document.querySelector('h1')
titulo.innerHTML = ('Hora do Desafio')

function verificarClique() {
    console.log('O botão foi clicado')
}

function clickAlert() {
    alert('Eu amo JS')
}

function clickPrompt(){
    let city = prompt('Digite o nome de uma cidade do Brasil')
    alert(`Estive em ${city} e lembrei de você.`)

}

function clickSoma(){
    let num1 = prompt('insira 1 numero para somar')
    let num2 = prompt('insira mais 1 numero para somar')
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    alert(num1 + num2)
}
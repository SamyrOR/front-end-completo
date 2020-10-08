//              CÓDIGO DO JOGO DE ADVINHAS
//Declaração das variaveis
let = document.querySelector('#n1').innerHTML;
let = document.querySelector('#n2').value;
//Função para resetar os campos e alterar o valor do primeiro
function resetar () {
    let random = Math.floor(Math.random() * 100);
    n2.value ="";
    n1.innerHTML = r;
};
//Function who validate if input match the number displayed 
function verificar () { 
    if (n1 == n2) {
        alert('Você acertou, parabéns');
    } else {
        alert(`Infelizmente você errou, o número era ${n1}` );
    };
    resetar();
}
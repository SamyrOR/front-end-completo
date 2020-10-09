let iniciar = setInterval(addBola, 1000)
document.onload = iniciar
function addBola() {
    let bola = document.createElement('div');
    bola.classList.add('bola')
    let p1 = Math.floor(Math.random() * 500);
    let p2 = Math.floor(Math.random() * 500);
    bola.setAttribute('style', `left:${p1}px; top:${p2}px; background-color: ${randomColor()}`);
    document.body.appendChild(bola);
    estourar(bola)
}
let count = 0
function score() {
    count++
    return count
}
function estourar(elemento) {
    elemento.addEventListener('click', () => {
        document.body.removeChild(elemento)
        document.querySelector('.score').innerHTML = score()
    })
}
function randomColor() {
    let letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color
}
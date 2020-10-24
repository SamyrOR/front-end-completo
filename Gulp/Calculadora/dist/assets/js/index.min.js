let result = document.querySelector('.resultado')
function soma() {
    let n1 = parseFloat(document.querySelector('#n1').value);
    let n2 = parseFloat(document.querySelector('#n2').value);
    if (n1 >= 0 && n2 >= 0) {
        return result.innerHTML = n1+n2
    } else { 
        result.innerHTML = 'Digite valores nos campos'
    }
}
let btnCalc = document.querySelector('.btn-calc')
btnCalc.addEventListener('click', soma)
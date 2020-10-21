import '../style/style.css';
import Button from '../components/botao/index';

let botao = new Button('Teste');

console.log('peguei o botao', document.querySelector('.area'))
document.querySelector('.area').appendChild(botao.render());
import './style.scss';
class Button {
    constructor(title){
        this._title = title;
        this._botao = document.createElement('button');
    }
    render(){
        let button = this._botao
        button.classList.add('botao');
        button.innerHTML = this._title;
        button.addEventListener('click', this.callClicked );
        return button
    }
    callClicked(){
        alert('Deu certo')
    }
    set btnTitle(btnTitle) {
        this._title = btnTitle;
    }
}
export default Button
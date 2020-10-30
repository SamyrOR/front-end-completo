//Classe
export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private _idade: number, protected _cpf: string) {}
  set idade(idade: number) {
    // setter
    this._idade = idade;
  }
  set cpf(cpf: string) {
    this._cpf = cpf;
  }
  get cpf(): string {
    //getter
    return this.cpf;
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
export class Aluno extends Pessoa {
  // extends = Herança
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: number) {
    super(nome, sobrenome, idade, cpf); // super = acesso a classe pai
  }
  getNomeCompleto(): string {
    //Alterando comportamento do metodo existente na classe pai = polimorfismo
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}
const aluno = new Aluno('Samyr', 'Ribeiro', 30, '123.456.789-10', 1);
console.log(aluno.getNomeCompleto());

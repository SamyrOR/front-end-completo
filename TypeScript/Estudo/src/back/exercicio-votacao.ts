import readline from 'readline';
interface MultiplaEscolha {
  titulo: string;
  a: string;
  b: string;
  c: string;
}
export class voteApp {
  //private _options: string[];
  private _a: number;
  private _b: number;
  private _c: number;
  private _pergunta: any;
  private _answer: number;
  constructor(private _question: MultiplaEscolha) {
    //this._options = [...options];
    this._pergunta = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this._a = 0;
    this._b = 0;
    this._c = 0;
    this._answer = 0;
  }

  resposta(answer: string): void {
    //if (typeof answer == 'number') {
    switch (answer) {
      case '1':
        this._a++;
        this.mostraResultado();
        break;
      case '2':
        this._b++;
        this.mostraResultado();
        break;
      case '3':
        this._c++;
        this.mostraResultado();
        break;
      //}
    }
    // else {
    //   console.log(`Apenas números de 1 a 3 são válidos`);
    // }
  }

  mostraResultado(): void {
    console.log(`Resultado:
    ${this._question.a}: ${this._a}
    ${this._question.b}: ${this._b}
    ${this._question.c}: ${this._c}`);
  }

  init() {
    this._pergunta.question(
      ` ${this._question.titulo}
        ${this._question.a}
        ${this._question.b}
        ${this._question.c}
    `,
      (answer: string) => {
        this.resposta(answer);
        this.denovo();
      }
    );
  }

  denovo(): void {
    this._pergunta.question('Deseja continuar? (y/n)', (answer: string) => {
      if (answer == 'y' || answer == 'n') {
        switch (answer) {
          case 'y':
            this.init();
            break;
          case 'n':
            this._pergunta.close();
        }
      } else {
        console.log('Desculpe, responda y para sim ou n para Não');
        this.denovo();
      }
    });
  }
}

const langVote = new voteApp({
  titulo: 'Qual a sua linguagem de programação favorita?',
  a: '1) JavaScript',
  b: '2) TypeScript',
  c: '3) Python',
});
const corVote = new voteApp({
  titulo: 'Qual a sua cor favorita?',
  a: '1 - Vermelho',
  b: '2 - Verde',
  c: '3 - Azul',
});
corVote.init();

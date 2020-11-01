import readline from 'readline';
interface Perguntas {
  pergunta: string;
  respostas: number;
}
interface MultiplaEscolha {
  titulo: string;
  perguntas: Perguntas[];
}
export class voteApp {
  private _pergunta: any;
  constructor(private _question: MultiplaEscolha) {
    this._pergunta = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  resposta(answer: string): void {
    console.log(typeof eval(answer));
    if (typeof eval(answer) == 'number') {
      this._question.perguntas.forEach((element, index) => {
        if (eval(answer) == index + 1) {
          element.respostas++;
        }
      });
      this.mostraResultado();
    } else {
      console.log(`Por favor, selecione um número de 1 a ${this._question.perguntas.length}`);
      return;
    }
  }

  mostraResultado(): void {
    this._question.perguntas.forEach((element) => {
      console.log(`${element.pergunta}: ${element.respostas}`);
    });
  }

  pergunta(): string {
    return `${this._question.titulo}
            ${this._question.perguntas.forEach((element) => {
              `${console.log(element.pergunta)}`;
            })}`;
  }

  init() {
    this._pergunta.question(this.pergunta(), (answer: string) => {
      this.resposta(answer);
      this.denovo();
    });
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

const corVote = new voteApp({
  titulo: 'Qual a sua cor favorita?',
  perguntas: [
    { pergunta: '1 - Vermelho', respostas: 0 },
    { pergunta: '2 - Verde', respostas: 0 },
    { pergunta: '3 - Azul', respostas: 0 },
    { pergunta: '4 - Preto', respostas: 0 },
    { pergunta: '5 - Amarelo', respostas: 0 },
  ],
});
corVote.init();

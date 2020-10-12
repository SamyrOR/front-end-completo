class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo < valor) {
            console.log(`Saldo insuficiente: ${this.saldo}`)
            return;
        }
        this.saldo -= valor;
        this.verSaldo();
    }
    
    depositar(valor) {
        this.saldo += valor;
        this.verSaldo()
    }

    verSaldo() {
        console.log(`Ag/C ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}` )
    }
    
}

// const conta1 = new Conta(123, 321, 100);
// conta1.depositar(150);
// conta1.sacar(200);

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo,limite){
        super(agencia, conta, saldo)
        this.limite = limite
    }
    sacar (valor) {
        if (this.saldo + this.limite < valor) {
            console.log(`Saldo insuficiente: ${this.saldo}`)
            return;
        }
        this.saldo -= valor;
        this.verSaldo();
    }
}
const contaCorrente = new ContaCorrente(123, 321, 100, 150)
console.log(contaCorrente)
contaCorrente.sacar(250)
contaCorrente.sacar(1)
class ContaPoupanca extends Conta {
    constructor(agencia, conta, saldo){
        super(agencia, conta, saldo)
    }
}
const contaPoupanca = new ContaPoupanca(555, 123, 555)
console.log(contaPoupanca)
contaPoupanca.sacar(200);
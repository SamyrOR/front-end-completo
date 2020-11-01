abstract class Veiculo {
  constructor(protected _modelo: string, protected _rodas: number, protected _ano: number) {}
  abstract andar(): void;
  abstract buzinar(): void;
  abstract get modelo(): string;
  abstract set modelo(modelo: string);
  abstract get rodas(): number;
  abstract get ano(): number;
}

class Moto extends Veiculo {
  constructor(protected _modelo: string) {
    super(_modelo, 2, 2010);
  }
  andar(): void {
    console.log('Vrummm vrum ');
  }
  buzinar(): void {
    console.log('Biii biii');
  }
  get modelo(): string {
    return this._modelo;
  }
  set modelo(modelo) {
    this._modelo = modelo;
  }
  get rodas() {
    return this._rodas;
  }
  get ano() {
    return this._ano;
  }
}

const moto1 = new Moto('Honda');
moto1.modelo = 'yamaha';
console.log(moto1.rodas);

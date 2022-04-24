class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
  exibirSaldoPoupanca() {
    console.log(this.saldoPoupanca);
  }
}

const bruno = new ClientePoupanca(
  "bruno",
  "brunomequi@gmail.com",
  "01306643406",
  100,
  200
);

console.log(bruno);
bruno.depositar(30);
bruno.depositarPoupanca(45);
console.log(bruno);
bruno.exibirSaldo();
bruno.exibirSaldoPoupanca();

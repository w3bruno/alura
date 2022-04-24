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

const bruno = new Cliente("bruno", "brunomequi@gmail.com", "01306643406", 100);
console.log(bruno);
bruno.depositar(30);
console.log(bruno);
bruno.exibirSaldo();

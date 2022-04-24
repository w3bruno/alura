function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function Poupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const Bruno = new Poupanca(
  "Bruno",
  "01306643406",
  "brunomequi@gmail.com",
  10000,
  200
);

console.log(Bruno);

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const bruno = new Cliente(
  "Bruno",
  "01306643406",
  "brunomequi@gmail.com",
  10000
);

console.log(bruno);

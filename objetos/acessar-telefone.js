const objeto = {
  nome: "Bruno",
  idade: 40,
  cpf: "01306643406",
  email: "brunomequi@gmail.com",
  fones: ["79999530420", "7988776677"],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(objeto.saldo);
objeto.depositar(50);
console.log(objeto.saldo);

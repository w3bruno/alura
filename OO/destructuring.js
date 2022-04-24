const pessoa = {
  nome: "Bruno",
  idade: 40,
};

function imprimeDados({ nome, idade }) {
  console.log(nome, idade);
}
imprimeDados(pessoa);

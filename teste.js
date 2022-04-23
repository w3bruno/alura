// const arrayVazia = [, , ,];
// console.log(arrayVazia.length);
// arrayVazia.push(50);
// console.log(arrayVazia);
// console.log(arrayVazia.length);

// const listaOriginal = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
// const listaModificada = listaOriginal.splice(1, 2, "Rodrigo");
// console.log(listaModificada, listaOriginal);

// const alunosLista = ["João", "Juliana", "Caio", "Ana"];
// const alunosMedias = [10, 8, 7, 9];

// let listaDeNotasEAlunos = [alunosLista, alunosMedias];

// for (let i = 0; i < alunosLista.length; i++) {
//   console.log(
//     `Aluno(a) ${listaDeNotasEAlunos[0][i]} teve a média ${listaDeNotasEAlunos[1][i]}`
//   );
// }

// const exibeNome = (nomeDoAluno) => {
//   if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
//     let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
//     return `${listaDeNotasEAlunos[0][indice]} sua média é: ${listaDeNotasEAlunos[1][indice]}`;
//   } else {
//     return nomeDoAluno + " não está cadastrado";
//   }
// };

// console.log(exibeNome("Nemo"));

// const listaNumeros = [100, 200, 300, 400, 500, 600];
// for (let index = 0; index < listaNumeros.length; index++) {
//   console.log(index + " - " + listaNumeros[index]);
// }

// const listaMedias = [10, 6.5, 8, 7.5];
// let elemento = 0;
// for (let index = 0; index < listaMedias.length; index++) {
//   element += listaMedias[index];
// }
// console.log(element / listaMedias.length);
// listaMedias.forEach((nota) => {
//   elemento += nota;
// });
// console.log(elemento / listaMedias.length);

// const nomesLista = ["Ana", "Ju", "Paula"];

// nomesLista.forEach(exibirNomes);

// function exibirNomes(nome) {
//   console.log(nome);
// }

// const notasAluno = [10, 9, 8, 7, 6];
// const novoArray = notasAluno.map((nota) => (nota == 10 ? nota : ++nota));

// console.log(novoArray);

// const alunosLista = ["ana Julia", "Caio Vinicius", "BIA silva"];
// const alterados = alunosLista.map((aluno) => aluno.toUpperCase());
// console.log(alterados);

// const nomesLista = ["Ana", "Marcos", "Maria", "Mauro"];
// const notasLista = [7, 4.5, 8, 1.5];

// const reprovados = nomesLista.filter((_, indice) => notasLista[indice] < 5);
// console.log(`Reprovados : ${reprovados}`);

// const arryMulti = [nomesLista, notasLista];

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(sala) {
  const mediaNotas = sala.reduce((acum, atual) => atual + acum, 0);
  return mediaNotas / sala.length;
}

console.log(mediaSala(salaJS));

console.log(
  salaJava.reduce((atual, acum) => atual + acum, 0) / salaJava.length
);

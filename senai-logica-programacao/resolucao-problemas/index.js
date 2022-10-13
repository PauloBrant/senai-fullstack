//variável, seu valor pode ser alterado no decorrer do programa
//let nomeEstudante = "Helena";
//console.log(nomeEstudante);

//constante, seu valor não pode ser alterado
//const nomeDoEstudante = "Helena";
//console.log(nomeDoEstudante);

//Em outras linguagens, portanto você encontrará algo semelhante a:
//String: nomeEstudante = "Helena";

//Exercicio de lista
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let    quantidadeDeEstudantes =  listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);

//Exercicio de loop
for (let indice = 0; indice < quantidadeDeEstudantes;     indice++) { 
    const alunoCorrente = listaDeEstudantes[indice];
    console.log(alunoCorrente);
    }
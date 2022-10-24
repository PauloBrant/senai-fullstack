/*
Percorrer de Zero até o número de alunos

Se o número for par, escreva ‘par’ e o número correspondente

Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  

Se o número for zero, escreva ‘zero’ e o número correspondente
*/

var numeroDeAlunos = 10

for (let cont = 0; cont <= numeroDeAlunos; cont++) {
    
    if (cont == 0) {
        console.log (cont + " - O número é ZERO")
    } else 
        if (cont % 2 == 0) {
            console.log (cont + " - O número é PAR")
        
        } else { console.log (cont + " - O número é IMPAR")
        
    }

}
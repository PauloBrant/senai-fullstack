//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


var participante = [["Paulo Sergio","Antonio Carlos","Ricardo Padilha"], [10,50,20]]

var contC = 0


do {
    //console.log ("Cadastro - "+ contC)
        
       if (participante[1][contC] < 18) {
        console.log ("Participante " + participante[0][contC] +" com menos de 18 anos")
        console.log("Cadastro não permitido")
        
    } else {
        console.log("Participante " + participante[0][contC] +" cadastrado")
        
    }
    contC=contC+1

    if (contC >= 3) {
        console.log("Evento lotado")
        break
    }

} while (contC < 3) 
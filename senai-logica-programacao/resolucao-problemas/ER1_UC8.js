//Permitir o cadastro da peça somente se ela pesar mais de 100g.
//Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.
//Validar se o nome da peça possui mais de 3 caracteres.





var listadePeca = [["Filtro de Ar","Amortecedor","Dsico de Freio"], [10,50,200]]
//var contL = 0
var contC = 0

//console.log(listadePeca[contL][contC].length)

do {
    console.log ("Cadastro - "+ contC)
    //console.log(listadePeca[0][contC].length)
    
    if (listadePeca[0][contC].length > 3) {
        console.log("Peça - "+listadePeca[0][contC] + " - nome válido")
        
    } else { 
        console.log ("Nome de peça - "+ listadePeca[0][contC] +" com menos de 3 caracteres")
        console.log("Peça não cadastrada")
    }

    if (listadePeca[1][contC] < 100) {
        console.log ("Peso da peça - "+ listadePeca[1][contC] +" com menos de 100g")
        console.log("Peça não cadastrada")
        
    } else {
        console.log("Peça cadastrada")
        
    }
    contC=contC+1

    if (contC >= 3) {
        console.log("lista de peças está lotada")
        break
    }

} while (contC < 3) 



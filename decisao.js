let pivo = true;

if(pivo){
    console.log("Olá pessoal");
}else{
    console.log("bye bye bye")
}

let nome = "Heterp top" // se tirar oq tem dentro da variavel, vai imprimir o else. pois identifica como false.

if(nome){ 
    console.log("Hetero top na area")
}else{
    console.log("Hetero top nos deixou")
}

function testezinho (entrada){
    // if(entrada){
    //     return console.log("Sua entrada foi", entrada);      
    // }
    if(entrada === "1"){
        return console.log("Sua entrada foi", entrada);
    }
    if(entrada === "Wallace"){           
        return console.log("Sua entrada foi", entrada);        
    }
    console.log("Nenhum nome confere")
}

testezinho("Wallace");
testezinho("1");


let num =2;
let msg;

num === 1 ? msg ="O número é 1" : msg ="O número não é 1"; // isso é um IF TERNARIO, ele permite q vc faça ifs em uma linha.
                                                      // ? = teste lógico contrário.
                                                      //                                         
// console.log(msg)

let msg1 ="1";
let num1 = "1"

switch (num1){
    case  1:
        msg1 ="um";
        break;

    case 2:
        msg1 ="dois";
        break;  

    case 3:
        msg1 ="três";
        break;    

    default:
        msg1 = "Sem número";
} 

    console.log(msg1)
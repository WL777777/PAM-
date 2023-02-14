// var a = 3; // delcarando váriavel com VAR
// let b = 4;

// var a = 30;
// b = 40

// a = 300
// b = 400

// console.log(a,b)

// const c =5;

// for(let a =1; a <5; a++){
//     if(a<5){
//         console.log(a)
//     }
// // }


// let qualquer = 'legal'
// console.log(qualquer)
// console.log(typeof qualquer)

// qualquer = 3.14
// console.log(qualquer)
// console.log(typeof qualquer)

// let qualquer = ['Wallace', 'Lins']
// let qualquer2 = {
//     nome: 'Wallace',
//     idade: 16
// }

// console.log(qualquer)
// console.log(Array.isArray (qualquer))
// console.log(qualquer2)
// console.log(typeof qualquer2)

const escola = 'Cod3r'

console.log(escola.charAt(4)) // retorna a letra da quarta posição, visto que começa no 0
console.log(escola.charAt(5)) // retorna vazio.

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('o')) //indice associado a variavel escola

console.log(escola.substring(1)) //inclui indice 1 até o final
console.log(escola.indexOf(0,3)) // indice 0 a 2

console.log('Escola' .concat(escola).concat("!"))  // ele concatena variáveis, strings, etec.                         


console.log(escola.replace(3, 'e'))// ele coloca a string ou número pedido, na posição indicada, no caso, na posição 3
console.log(escola.replace(/\d/, 'e')) // regex (inclusive tem um site de como aprender isso.) para substituir os digitos

console.log('Ana, Maria, Pedro'.split(',')) // converte para array
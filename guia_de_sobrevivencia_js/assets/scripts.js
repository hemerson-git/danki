let myName = 'Hemerson';
let yearsOld = 24;
let height = 1.78;
let alive = true;  

function printValue(param) {
  console.log(param);
}

/* IIFE (Immediately Invoked Function Expression) 
**************************************************/

// (() => {
//   alert(nome);
// })();

// IIFE with params

// (value => {
//   console.log(value);
// })('IIFE Hemerson');

/* Funtion with callback 
********************************* */

// function fCallback(name, func) {
//   console.log(name);
//   func();
// }

// fCallback('Grazielle', () => {
//   console.log('this is a callback function')
// });

/* Callback with params
***************************************/

// function testes(name, func) {
//   console.log(name);
//   par = { name: 'Hemerson' }
//   func ( par )
// }

// testes('Hemerson', function(par) {
//   alert(par.name);
// });

// printValue(myName)

/**
 *  Java Script Classes
 */

// class DankiCode {
//   constructor(name) {
//     this.name = name;
//   }

//   printName() {
//     console.log(this.name)
//   }
// }

// let dankiCode = new DankiCode('Hemerson');

// dankiCode.printName();

// dankiCode.name = 'Graziele';

// dankiCode.printName();

/**
 * Promises
 */

function testes() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Hemerson');
  })
}

(async () => {
  let response = await testes();
  console.log(response);

  console.log('This will execute after promise');
})()


/*Operadores II
  Operadores lógicos
  Operadores de compararción*/

  let num1 = 22;
  let num2 = 13;
  let text1 = 'texto 1'
  let text2 = 'texto 1'
  let text3 = '22'

/*Los comparadores de comparacoón comparan dos expresiones
  y devuelven un valor boolean que representa la relación
  de sus valores*/
document.write("Los dos valores, son iguales?: ");
document.write(num1 == num2);  
document.write("Los dos valores, son diferentes?: ");
document.write(num1 != num2);  
document.write("Los dos textos, son iguales?: ");
document.write(text1 == text2);  
document.write("Los dos textos, son diferentes?: ");
document.write(text1 != text2); 
document.write("Las dos variables, son iguales?: ");
document.write(num1 == text3);
document.write("Las dos variables, son idénticas?: ");
//Idénticas quiere decir si son del mismo tipo de dato
document.write(num1 === text3);
document.write("valor1, es mayor que el valor2: ");
document.write(num1 > num2); 
document.write("valor1, es menor que el valor2: ");
document.write(num1 < num2); 

/*Los operadores lógicos nos devuelve un resultado a partir 
  de que se cumpla (o no) una condición, su resultado es 
    booleano. y sus operandos son valores lógicos o
    asimilables a ellos. Tablas de verdad*/

let valor1 = true;
let valor2 = true;

let resultado1 = valor1 && valor2;
let resultado2 = valor1 || valor2;
let resultado3 = !valor1;

document.write(resultado1);

num1 = 12;
num2 = 24;

afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;

document.write(afirmacion1 && afirmacion2);
document.write(afirmacion1 || afirmacion2);
document.write(num1 < num2 || num1 == num2);

// document.write(true && true);
// document.write(false && true);
// document.write(true && false);
// document.write(false && false);

// document.write(true || true);
// document.write(false || true);
// document.write(true || false);
// document.write(false || false);

// document.write(!false);
// document.write(!true);

num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!num1 && num5 != num3);

document.write(op);

    
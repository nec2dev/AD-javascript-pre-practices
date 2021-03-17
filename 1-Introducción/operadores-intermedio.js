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
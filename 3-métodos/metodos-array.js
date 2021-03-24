document.write("<b>METODOS TRANSFORMADORES</b><br><br>");

/*pop(): Elimina el último elemento de un array y lo devuelve */
const anfibios = ["salamandra", "rana flecha roja", "sapo comun", "rana de seychelles"];
document.write("Array original:<b>" + anfibios + "</b><br>");
let res = anfibios.pop();
document.write("Lo que quitó el método pop(): <b>" + res + "</b><br>");
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br><br>");

/*shift(): El método shift elimina el elemento en el índice cero y 
desplaza los valores consecutivos hacia abajo, devolviendo el valor 
eliminado. Si la propiedad length es 0, devuelve undefined.*/
document.write("Array original: <b>" + anfibios + "</b><br>");
res = anfibios.shift();
document.write("Lo que quitó el método shift(): <b>" + res + "</b><br>");
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br><br>");

/*push(): Agrega un elemento la final de un array y lo devuelve */
document.write("Array original: <b>" + anfibios + "</b><br>")
res = anfibios.push("rana de seychelles", "jalapa tritón falso");
document.write("Con el método push() quedaron: <b>" + res + "</b> elementos.<br>");
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br><br>");

/*reverse(): Invierte el orden de los elemntos de un array */
document.write("Array original: <b>" + anfibios + "</b><br>")
res = anfibios.reverse();
document.write("Como quedó el array con reverse(): <b>" + anfibios + "</b><br><br>");

/*unshift(): El método unshift() agrega uno o más elementos al inicio 
del array, y devuelve la nueva longitud del array.*/
document.write("Array original: <b>" + anfibios + "</b><br>");
res = anfibios.unshift("Cecilia");
document.write("Con el método unshift() quedaron: <b>" + res + "</b> elementos.<br>");
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br><br>");

/*sort(): Ordena los elementos de un arreglo (array) localmente y 
devuelve el arreglo ordenado*/
document.write("Array original: <b>" + anfibios + "</b><br>");
res = anfibios.sort();
document.write("Como quedó el array ordenado: <b>" + anfibios + "</b><br><br>");

/*splice(): Cambia el contenido de un array eliminando elementos 
existentes y/o agregando nuevos elementos.*/
document.write("Array original: <b>" + anfibios + "</b><br>");
res = anfibios.splice(1,4, "jalapa", "seychelles", "flecha ", "sapo");
document.write("Como quedó el array con los reemplazos de splice(): <b>" + anfibios + "</b><br>");
res = anfibios.splice(1,0, "rana");
document.write("Como quedó el array con el agregado de splice(): <b>" + anfibios + "</b><br><br>");

document.write("<b>METODOS ACCESORES</b><br><br>");

/*join(): Une todos los elementos de una matriz (o un objeto similar a 
una matriz) en una cadena y devuelve esta cadena.*/

const numeros = [1,2,3];
document.write(numeros + "<br>");
let resultado = numeros.join();
/*Podemos usar toString para generar el mismo resultado, pero con este 
método podemos intercalar un símbolo*/
document.write(resultado + "<br>");
resultado = numeros.join(" ");
document.write(resultado + "<br>");
resultado = numeros.join("*");
document.write(resultado + "<br>");



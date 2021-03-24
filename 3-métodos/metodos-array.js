/*pop(): elimina el último elemento de un array y lo devuelve */
let anfibios = ["salamandra", "rana flecha roja", "sapo comun", "rana de seychelles"];
document.write("Array original:<b>" + anfibios + "</b><br>")
let res = anfibios.pop();
document.write("Lo que quitó el método pop(): <b>" + res + "</b><br>")
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br>");
document.write("<br>");

/*shift(): elimina el primer elemento de un array y lo devuelve */
document.write("Array original: <b>" + anfibios + "</b><br>")
res = anfibios.shift();
document.write("Lo que quitó el método shift(): <b>" + res + "</b><br>")
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br>");
document.write("<br>");

/*push(): agrega un elemento la final de un array y lo devuelve */
document.write("Array original: <b>" + anfibios + "</b><br>")
res = anfibios.push("rana de seychelles", "jalapa tritón falso");
document.write("Con el método push() quedaron: <b>" + res + "</b> elementos.<br>")
document.write("Como quedó el array ahora: <b>" + anfibios + "</b><br>");
document.write("<br>");

/*reverse(): Invierte el orden de los elemntos de un array */
document.write("Array original: <b>" + anfibios + "</b><br>")
res = anfibios.reverse();
document.write("Como quedó el array con reverse(): <b>" + anfibios + "</b><br>");
document.write("<br>");
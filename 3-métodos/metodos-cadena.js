// concat(): Junta dos o más cadenas de texto y devuelve 1
let cadena = "La cadena de caracteres";
let cadena1 = " Se concatena con esta nueva cadena de caracteres"
let cadena2 = "La cadena ";
let cadena3 = "de caracteres";
// res = cadena.concat(" Se concatena con esta nueva cadena de caracteres");
res = cadena.concat(cadena1);
document.write(res + "<br>");
document.write("<br>");

/*startsWith(): Si una cadena termina con los caracteres de otra
cadena, devuelve true, de lo contrario, devuelve false*/
res = cadena.startsWith(cadena1);
document.write(res + "<br>");
res = cadena.startsWith(cadena2)
document.write(res + "<br>");
document.write("<br>");

/*endsWith(): Si una cadena termina con los caracteres de otra
cadena, devuelve true, de lo contrario, devuelve false*/
res = cadena.endsWith(cadena3);
document.write(res + "<br>");

/*includes(): Si una cadena se encuentra dentro de otra cadena,
devuelve true, de lo contrario, devuelve false*/
res = cadena.includes(cadena3);
document.write(res + "<br>");

/*indexof(): Nos devuelve el índice del primer carácter de la
cadena, si no existe nos devuelve -1*/

res = cadena1.indexOf("nueva");
document.write(res + ", es la posición donde se encuentra la letra: " + cadena1[res] + "<br>");
document.write("<br>");

/*lastIndexOf(): Nos devuelve el último índice del primer carácter 
de la cadena, si no existe nos devuelve -1*/
res = cadena1.lastIndexOf("e");
document.write(res + ", es la posición donde se encuentra la última letra: " + cadena1[res] + "<br>");
document.write("<br>");

/*padStart(): Propuesta de ECMAScript, rellena cadela al principio
con los caracteres deseados*/
res = cadena2.padStart(22, "X");
document.write(res + "<br>");
document.write("<br>");

/*padEnd(): Propuesta de ECMAScript, rellena cadela al final
con los caracteres deseados*/
res = cadena2.padEnd(22, "IO");
document.write(res + "<br>");
document.write("<br>");

/*repeat(): Devuelve la misma cadena pero repetida la cantidad 
de veces que le pasemos por parámetro*/
res = cadena2.repeat(5);
document.write(res + "<br>");
document.write("<br>");

/*split(): Divide la cadena como querramos y crea un array*/
res = cadena.split("a");
document.write(res[3]);
document.write("<br>");
res = cadena.split("cadena de");
document.write(res[1]);
document.write("<br>");
//document.write(res + "<br>");
document.write("<br>");

/*substring(): El método substring() extrae los caracteres de 
una cadena, entre dos índices especificados, y devuelve una 
nueva sub-cadena. */
res = cadena.substring(0,12);
document.write(res);
document.write("<br>");

/*toLowerCase(): Devuelve el valor en minúsculas de la cadena que 
realiza la llamada.*/
res = cadena.toLowerCase();
document.write(res);
document.write("<br>");

/*toUpperCase(): Devuelve el valor convertido en mayúsculas de la 
cadena que realiza la llamada.*/
res = cadena.toUpperCase();
document.write(res);
document.write("<br>");

/*toString(): Devuelve el valor convertido en string de la 
cadena que realiza la llamada.*/
let cadena6 = 123456;
let resultado = cadena6.toString();
document.write(resultado * 2);
document.write("<br>");
document.write(2 + resultado);
document.write("<br>");
document.write("<br>");

/*trim(): Elimina los espacios en blanco de la cadena */
let cadena7 = "   La Cadena de Caracteres                     ";
document.write("La cadena con espacios tiene "+ cadena7.length + "caracteres");
document.write("<br>");
res = cadena7.trim();
document.write("La cadena sin espacios tiene "+ res.length + "caracteres");
document.write("<br>");

/*trimEnd(): Elimina los últimos espacios en blanco de la cadena */
document.write("La cadena con espacios tiene "+ cadena7.length + "caracteres");
document.write("<br>");
res = cadena7.trimEnd();
document.write("La cadena sin los últimos espacios tiene "+ res.length + "caracteres");
document.write("<br>");

/*trimEnd(): Elimina los espacios en blanco del principio de la cadena */
document.write("La cadena con espacios tiene "+ cadena7.length + "caracteres");
document.write("<br>");
res = cadena7.trimStart();
document.write("La cadena sin los espacios del principio tiene "+ res.length + "caracteres");
document.write("<br>");

/*valueOf(): Retorna el valor primitivo del objeto especificado
JavaScript utiliza el método valueOf para convertir un objeto a un 
valor primitivo. Raramente usted necesitará invocar el método valueOf 
por su cuenta; JavaScript lo realizará de forma automática cuando 
encuentre un objeto, donde un valor primitivo es esperado.

Por defecto, el método valueOf es heredado por cada objeto descendiente 
de Object. Cada objeto incorporado en el núcleo del lenguaje 
sobreescribe este método para retornar un valor apropiado. 
Si un objeto no tiene un valor primitivo, valueOf devuelve el objeto 
en sí.*/
function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  document.write(object1 + 3);
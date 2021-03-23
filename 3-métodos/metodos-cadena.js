// concat(): Junta dos o más cadenas de texto y devuelve 1
let cadena = "La acadena de caracteres";
let cadena1 = " Se concatena con esta nueva cadena de caracteres"
let cadena2 = "La acadena ";
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




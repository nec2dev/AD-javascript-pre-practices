/*
Sentencia label:
*/
let colores = ["verde", "rojo", "amarillo", "violeta"];
let formas = ["cuadrado", "circulo", "hexagono", colores, "triangulo"];

forFiguras:
for (let array in formas) {
    if (array == 2) {
        for (let array of colores) {
            document.write(array + "<br>");
            //break forFiguras;
            continue forFiguras;
        }
    } else {
        document.write(formas[array] + "<br>");
    }
};

/*
Sentencia While
*/
let numeroInicial = 0;
// while (numero > 10); No se ejecuta y por ende, no devuelve nada
while (numeroInicial <= 10){
    numeroInicial++;
    document.write(numeroInicial);
    document.write(`<br>`);
}
document.write(`<br>`);


/*
Sentencia Do While
*/
let numero = 0;
do {
    numero++;
    document.write(numero);
    document.write(`<br>`);
}
while (numero <= 10);
// while (numero > 10); Se ejecuta una vez u devuelve "0"
document.write(`<br>`);

/*
Sentencia break
*/
let num = 0;
while (num < 1000){
    num++;
    document.write(num);
    document.write(`<br>`);
    if (num == 10) {
        break;
    }
}
document.write(`<br>`);
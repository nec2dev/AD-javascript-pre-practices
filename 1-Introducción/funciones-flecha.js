/* Una forma de crear una función:
function darIMC(nombre, peso, altura, edad){
    if (edad >= 18){
        imc = (peso / altura ** 2);
        let clasificacion = "";
        if (imc <= 18.5){
            clasificacion = "Peso insuficiente";
        } else if (imc > 18.6 && imc < 24.9){
            clasificacion = "Normopeso";
        } else if (imc > 25 && imc < 26.9){
            clasificacion = "Sobrepeso grado I";
        } else {
            clasificacion = "Sobrepeso grado II";
        }
        let res = `Hola ${nombre}! tu IMC es de: ${imc}. Tu clasificación es: ${clasificacion}`
    document.write(res);
    } else {
        let res = `No es posible calcular tu IMC, ya que ers menor, tu edad es de: ${edad} años`
    document.write(res);
    }
}*/

/* Otra forma de crear una función:
const darIMC = function(nombre, peso, altura, edad){
    if (edad >= 18){
        imc = (peso / altura ** 2);
        let clasificacion = "";
        if (imc <= 18.5){
            clasificacion = "Peso insuficiente";
        } else if (imc > 18.6 && imc < 24.9){
            clasificacion = "Normopeso";
        } else if (imc > 25 && imc < 26.9){
            clasificacion = "Sobrepeso grado I";
        } else {
            clasificacion = "Sobrepeso grado II";
        }
        let res = `Hola ${nombre}! tu IMC es de: ${imc}. Tu clasificación es: ${clasificacion}`
    document.write(res);
    } else {
        let res = `No es posible calcular tu IMC, ya que ers menor, tu edad es de: ${edad} años`
    document.write(res);
    }
}*/

// Función Flecha, tercer forma de crear una función:

const darIMC = (nombre, peso, altura, edad) => {
    if (edad >= 18){
        imc = (peso / altura ** 2);
        let clasificacion = "";
        if (imc <= 18.5){
            clasificacion = "Peso insuficiente";
        } else if (imc > 18.6 && imc < 24.9){
            clasificacion = "Normopeso";
        } else if (imc > 25 && imc < 26.9){
            clasificacion = "Sobrepeso grado I";
        } else {
            clasificacion = "Sobrepeso grado II";
        }
        let res = `Hola ${nombre}! tu IMC es de: ${imc}. Tu clasificación es: ${clasificacion}`
    document.write(res);
    } else {
        let res = `No es posible calcular tu IMC, ya que ers menor, tu edad es de: ${edad} años`
    document.write(res);
    }
}

darIMC("Nahuel", 70, 1.69, 40);

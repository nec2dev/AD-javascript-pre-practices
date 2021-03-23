function pedirEdadParaVotar (){
    edad = prompt("Por favor ingresa tu edad");
if (edad >= 18) {
    alert("OK, estás obligado a votar");
} else if (edad >= 16){
    alert("OK, tenés la opción de votar");  
} else {
    alert("Lamentablemente no cuentas con la edad necesaria para votar");
}
};

pedirEdadParaVotar();

function suma(num1,num2) {
    let res = num1 + num2;
    return res;
}
// document.write(num1) Fuera de la función no existe la variable
let resultado = suma(15,16);
document.write(resultado + "<br>");

function darNotaPromedio (nombre, notaprom) {
    //ponemos let para que el alcance sea regional y no global
    let parcial1 = prompt ("Ingrese la nota del primer parcial:");
    let parcial2 = prompt ("Ingrese la nota del segundo parcial:");
    let avisonota = "";
    nombre = prompt ("Ingrese su nombre");
    notaprom = suma(parseInt(parcial1), parseInt(parcial2))/2;
    if(notaprom >= 7){
        avisonota = `Buenos días ${nombre}, su nota final es ${notaprom}, usted promocionó la materia, felicitaciones!`
    }else{
        avisonota = `Buenos días ${nombre}, su nota final es ${notaprom},usted debe rendir el examen final de la materia`
    }
    document.write(avisonota);
}

darNotaPromedio();
document.write(darNotaPromedio());
 

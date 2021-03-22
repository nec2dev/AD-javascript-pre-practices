/*
Sentencia for 
Consta de 3 parámetros
1° la declaración e inicialización: let i = 0;
2° La condición: i < 6;
3° Si aumenta o decrementa: i++; 
*/
//let i = 20;
//Como el índice es regional podemos definir la variable i por bloque
for (let i = 0; i < 6; i++ ) {
    document.write(i + "<br>");
};
document.write("<br>");

for (let i = 6; i > 0; i-- ) {
    document.write(i + "<br>");
};
document.write("<br>");

// Inicializar la variable afuera:
// let i = 6;
// for (i; i >= 0; i-- ) {
//     document.write(i + "<br>");
// };

/*
Sentencia continue
*/
for (let i = 0; i < 20; i++ ) {
    if(i == 12){
        continue;
    }
    document.write(i + "<br>");
};

document.write("<br>");

/*
Sentencia for in: nos muestra el recorrido de la posición del array
*/
let thundercats = ["Jaga", "Leon-O", "Tigro", "Chitara", "Panthro", "Snarf", "Felino","Felina"];
thundercats.nroDeTemporadas = 2; 

for (thundercat in thundercats){
   document.write(thundercat + "<br>")
   //document.write(thundercats[thundercat] + "<br>")
};
document.write("<br>");

/*
Sentencia for of
*/
for (thundercat of thundercats){
    document.write(thundercat + "<br>")
 };
 document.write(thundercats.nroDeTemporadas);
 



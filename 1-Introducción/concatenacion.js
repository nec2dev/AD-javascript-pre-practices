/*Concatenación: 
-definición y ejemplo:
-Con el signo + :
- para números forzamos string
-con Concat
-con backtiks y con la variable entre ${}
-escape de comillas simples
-escape de comillas dobles*/

saludo = 'Hola Mayra, Buen día!';
pregunta = ' Cómo estás?';

frase = saludo + pregunta;

document.write(frase);

num1 = 5;
num2 = 8;
num3 = '12'
//Tipado dinámico, forzamos el string con las comillas
suma = '' + num1 + num2;
//Concat, método de js, necesita que 1 solo elemnto sea string
concat = num3.concat(num2);

document.write(suma);
document.write(concat);

/*nombre = 'Nahuel Correa';
//fraseSaludo = 'Hola, soy ' + nombre + ', tengan ustedes buen día';
fraseSaludo = `Hola, soy ${nombre} tengan ustedes buen día`;
//` estos son backtiks o acentos graves.
document.write(fraseSaludo);*/

nombre = 'Nahuel Correa';
//fraseSaludo = "Hola, soy "Nahuel", tengan ustedes buen día";
fraseSaludo = 'Hola, soy "Nahuel", tengan ustedes buen día';
document.write(fraseSaludo);








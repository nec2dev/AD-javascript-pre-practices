/*Window Object
El objeto window representa la ventana que contiene un 
documento DOM; la propiedad document apunta al DOM do-
cument cargado en esa ventana. El objeto window al que 
pertenece un documento puede ser obtenido usando la 
propiedad document.defaultView.

open(): Carga un recurso en el contexto de un nuevo 
navegador (como una ventana) o uno que ya existe, 
dependiendo de los parametros.*/
let mozillaDeveloperURL = "https://developer.mozilla.org/es/";
let ventana = window.open(mozillaDeveloperURL);

/*close(): Cierra la ventana actual, o la ventana en 
la cual fue llamada.*/ 
ventana.close();

/*closed(): Esta propiedad de solo lectura indica si la ventana r
eferenciada está cerrada o no.*/ 
ventana.closed();

/**/
ventana.stop();

/*alert() muestra un diálogo de alerta con 
contenido opcional especificado y un botón OK 
(Aceptar).*/
alert();

/*print(): Abre el diálogo para imprimir el documento 
actual. En la mayoría de navegadores, este método bloquea 
mientras el díalogo de impresión esté abierto, sin 
embargo, en algunas versiones recientes de Safari podría 
retornar de inmediato.*/
ventana.print();

/*Window.prompt() muestra un diálogo con mensaje opcional, 
que solicita al usuario que introduzca un texto.*/
var sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
};

// there are many ways to use the prompt feature
var sign = window.prompt(); // open the blank prompt window
var sign = prompt();       //  open the blank prompt window
var sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
var sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"

/*Window.confirm() muestra una ventana de 
diálogo con un mensaje opcional y dos botones, 
Aceptar y Cancelar.*/
confirm();

/*screen(): La interfaz Screen representa una pantalla, usualmente 
la misma donde la ventana actual está siendo visualizada.
Usualmente es también la única en la que la ventana actual está 
siendo visualizada, obtenida utilizando window.screen.*/
screen();

/*screen.left(); Retorna la distancia en pixels desde el borde 
izquierdo de la pantalla principal al borde izquierdo de la 
pantalla actual.*/
screenLeft();

/*screen.top(): Retorna la distancia en pixels desde el borde 
supierior de la pantalla principal al border superior de 
la pantalla actual.*/
screenTop();


scroll();
scrollX()
scrollY();
scrollBy()
scrollTo();




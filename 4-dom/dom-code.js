let parrafo = "Buenas, soy un párrafo <br>";
document.write(parrafo + "<br>");

parrafo = document.getElementById("parrafo");
document.write(parrafo + "<br>");

parrafo = document.getElementsByTagName("p");
document.write(parrafo + "<br>");

parrafo = document.querySelectorAll("p");
document.write(parrafo + "<br>");
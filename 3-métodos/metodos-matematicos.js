document.write("<b>METODOS MATH</b><br><br>");

num = Math.sqrt(144);
document.write(num + "<br>");

num = Math.cbrt(1728);
document.write(num + "<br>");

num = Math.max(1,2,3,4,5,6,7,8,9,10);
document.write(num + "<br>");

num = Math.min(1,2,3,4,5,6,7,8,9,10);
document.write(num + "<br>");

num = Math.random();
document.write(num + "<br>");
num = Math.random()*100;
num = num.toString();
numero = num[0] + num[1];
if (num[1] == "."){
    numero = num[0];
}
document.write(numero + "<br>");

num = Math.random()*100;
num = Math.round(num);
document.write(num + "<br>");

num = Math.random()*99;
num = Math.floor(num);
document.write(num + "<br>");

num = Math.fround(12.55555434355536637738);
document.write(num + "<br>");

num = Math.trunc(12.9999955555434355536637738);
document.write(num + "<br><br>");

document.write("<b>PROPIEDADES</b><br><br>");



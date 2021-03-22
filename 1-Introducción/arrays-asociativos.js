let workstation1 = {
    procesador: "Intel(R) Core(TM) i3-3110M @ 2.4GHz 2.4 GHz",
    memoriaInstaladaRAM: "6,00 GB",
    tipoDeSistema: "Sistema Operativo de 64 bits, procesador x64",
    lapizYEntradaTactil: "La entrada táctil o manuscrita no está disponible para esta pantalla",
};

let procesador = workstation1["procesador"];
let memoriaInstaladaRAM = workstation1["memoriaInstaladaRAM"];
let tipoDeSistema = workstation1["tipoDeSistema"];
let lapizYEntradaTactil = workstation1["lapizYEntradaTactil"];

descripcion = `procesador: <b>${procesador}</b><br>
                Memoria Instalada &#40RAM&#41: <b>${memoriaInstaladaRAM}</b><br>
                Tipo de Sistema: <b>${tipoDeSistema}</b><br>
                Lápiz y entrada táctil: <b>${lapizYEntradaTactil}</b><br>`;

document.write(descripcion);

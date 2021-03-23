class Marvelheroes {
    constructor(nombreheroe, nombrereal, identidad, altura, peso, cabello, universo){
        this.nombreheroe = nombreheroe;
        this.nombrereal = nombrereal;
        this.identidad = identidad;
        this.altura = altura;
        this.peso = peso;
        this.cabello = cabello;
        this.universo = universo;
        this.dataclasificada = `Alias actual: ${this.nombreheroe}<br>
                                Nombre real: ${this.nombrereal}<br>
                                Identidad: ${this.identidad}<br>
                                Altura: ${this.altura}<br>
                                Peso: ${this.peso}<br>
                                Cabello: ${this.cabello}<br>
                                Universo: ${this.universo}<br><br>`
    }
    verdataclasificada(){
        document.write(this.dataclasificada);
    }
}

class Mutantes extends Marvelheroes {
    constructor(nombreheroe, nombrereal, identidad, altura, peso, cabello, universo, tipogenmutante, habilidadprincipal){
        super(nombreheroe, nombrereal, identidad, altura, peso, cabello, universo);
        this.tipogenmutante = null;
    }

    set setGen(newGen){
        this.tipogenmutante = newGen;
    }

    get getGen(){
        return this.getGen;
    }
}


const heroe001 = new marvelheroes("Scarlet Witch", "Wanda Maximoff", "Pública", 1.7, 60, "Castaño", "Tierra-616");
const heroe002 = new marvelheroes("Vision", "Vision", "Pública", 1.85, 136, "Calvo", "Tierra-616");
const heroe003 = new marvelheroes("Charles Francis Xavier", "Profesor X", "Pública", 1.83, 86, "Calvo", "Tierra-616");
const heroe004 = new marvelheroes("Jane Foster", "Valkyrie", "Secreta", 1.75, 204, "Rubio", "Tierra-616");
const heroe005 = new marvelheroes("Groot", "Groot", "Pública", null, 3719, "null", "Tierra-616");

// document.write(heroe001.identidad);
// document.write(heroe001.dataclasificada);
// document.write(heroe002.dataclasificada);
// document.write(heroe003.dataclasificada);
// document.write(heroe004.dataclasificada);
// document.write(heroe005.dataclasificada);

heroe001.verdataclasificada();
heroe002.verdataclasificada();
heroe003.verdataclasificada();
heroe004.verdataclasificada();
heroe005.verdataclasificada();
class Cliente{
    #nombre
    apellido
    edad

    constructor(nom,ape,ed){
        this.#nombre = nom

        this.apellido = ape
        this.edad = ed
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nom){
        this.#nombre=nom
    }

    
}

class Persona extends Cliente{
      saludar(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }

    Apellido(){
        console.log(`Tu apellido es ${this.apellido}`);
        
    }
}

let nomb = prompt("Ingrese su nombre");
let ape = prompt("Ingrese su apellido"); 
let ed = parseInt(prompt("Ingrese su edad"));

let persona  = new Persona(nomb,ape, ed);
let array =[persona];

console.log(array);
persona.saludar()
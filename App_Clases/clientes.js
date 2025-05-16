class Atencion{

    nombre
    turno

    constructor(name , turno){
        this.nombre=name
        this.turno=turno
    }

    agregarCliente(){
        turno ++
        if(this.name){
            this.nombre=this.name
            alert(`El cliente ${this.name} fue añadido y sera atendido con el turno ${this.turno}`)
        }
    }

    
}
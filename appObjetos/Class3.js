class Cliente{
    nombre
    turno

    constructor(nom,tur){
        this.nombre = nom
        this.turno = tur
    }

    agregarCliente(nom){
         tur++
        if(nom !=null){
            this.nombre = nom
            console.log(`El cliente ${this.nombre} se añadio con el turno ${this.turno}`)
        }else{
            console.log("No hay personas en la cola")
        }
    }

   verCola() {
    if (!this.clientes || this.clientes.length === 0) {
        console.log("No hay personas por ver en la cola.");
    } else {
        let lista = "";
        this.clientes.forEach((cliente, index) => {
            lista += `${index + 1}. ${cliente.nombre} - turno: ${cliente.turno}\n`;
        });
        console.log("Personas en la cola:\n" + lista);
    }
}

}

const cliente = new Cliente();

cliente.agregarCliente("juan")
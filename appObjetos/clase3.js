class Cliente{
    constructor(nombre,turno){
        this.nombre = nombre
        this.turno = turno
    }
}

class ColaClientes{
    constructor(){
        this.clientes = []
        this.turnoActual = 1
    }


    agregarCliente(nombre){
        if(nombre != null){
            const objeto = new Cliente
            (nombre,this.turnoActual++)
            this.clientes.push(objeto);
            console.log(`El cliente ${objeto.nombre} se añadio con el turno ${objeto.turno}`);
        }else{
            console.log("NO hay personas en la cola");
            
        }
    }

    verCola(){
        if(this.clientes.length=== 0){
            console.log("No hay personas en la cola");
        }else{
            let lista = ""
            this.clientes.forEach((clientes, index) => {
                lista += `${index+1}. ${clientes.nombre} que va a ser atendido en el turno ${clientes.turno} \n`
            })
            console.log(lista)

        }
    }
}


const cola = new ColaClientes()
cola.agregarCliente("juan");
cola.agregarCliente("juan");
cola.agregarCliente("juan");
cola.agregarCliente("juan");
cola.verCola()
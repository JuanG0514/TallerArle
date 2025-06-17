class Clientes{
    constructor(nombre,turno){
        this.nombre = nombre
        this.turno=turno
    }
}

class ColaClientes{
    constructor(){
        this.cliente = []
        this.turnoActual = 1
    }


    agregarCliente(nombre){
        if(nombre!=null){
            const objeto = new Clientes(nombre,this.turnoActual++);
            this.cliente.push(objeto);
            console.log(`el cliente ${objeto.nombre} fue agregado con el turno ${objeto.turno}`);
        }else{
            console("Error al ingrsar el usuario")
        }
    }

    verCola(){
        let lista ="";
        if(this.cliente.length===0){
            console.log("No hay personas por mostrar")
        }else{
            this.cliente.forEach((clientes,index)=>{
                lista += `${index+1}. ${clientes.nombre} y tiene el turno${clientes.turno}\n`
            }) 
            
        } console.log(lista)
    }
}


const cola = new ColaClientes;

cola.agregarCliente("juan")
cola.agregarCliente("andrees")
cola.agregarCliente("juan")
cola.verCola()
class Cliente{
    nombre
    turno

    constructor(nom,tur){
        this.nombre = nom
        this.turno = tur
    }

}

const cliente = new Cliente();

cliente.agregarCliente("juan")


class Cliente {
    constructor(nombre, turno) {
        this.nombre = nombre;
        this.turno = turno;
    }
}

class ColaClientes {
    constructor() {
        this.clientes = [];
        this.turnoActual = 1;
    }

    agregarCliente(nombre) {
        if (nombre != null && nombre !== "") {
            const nuevoCliente = new Cliente(nombre, this.turnoActual++);
            this.clientes.push(nuevoCliente);
            console.log(`El cliente ${nuevoCliente.nombre} se añadió con el turno ${nuevoCliente.turno}`);
        } else {
            console.log("No hay personas en la cola");
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

// Ejemplo de uso:
const cola = new ColaClientes();
cola.agregarCliente("Juan");
cola.agregarCliente("Ana");
cola.verCola();

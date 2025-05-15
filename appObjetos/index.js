let cola = [

];
const MAX_COLA = 7;
let turno = 0


    const agregarCliente = (nombre)=>{
     turno++

        const  objetos = {
            cliente:nombre,
            turno:turno
        }
     if(nombre != null){
             cola.push(objetos)
            alert(`El cliente ${objetos.nombre} fue añadido exitosamente con el turno ${objetos.turno}`);
      }
      console.log(cola)
    } 

    const mostrarCola =()=>{
        if(cola.length===0){
            alert("La cola esta vacia");
        }else{
            let lista ="";
            for (let i = 0; i < cola.length; i++) {
                const x = cola[i];
                lista +=  `El señor ${x.nombre
                } va a ser atendido con el turno ${x.turno}\n`
                
            }
            alert(lista);
        }
    }

    
    function atender(){
    alert(`atendendiedo al señor ${cola[0].nombre} en el turno ${cola[0].turno}`)
    cola.shift()
    } 

  
    while (true) {
        let opcion = prompt("Ingresa la opción que quieres realizar:\n1. Añadir cliente\n2. Mostrar clientes\n3. Atender\n4. Salir");
        
        if (opcion === "1") {
            let nombre = prompt("Ingresa el nombre del cliente");
            agregarCliente(nombre);
        } else if (opcion === "2") {
            mostrarCola();
        } else if (opcion === "3") {
            atender();
        } else if (opcion === "4") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    }

console.log(cola);

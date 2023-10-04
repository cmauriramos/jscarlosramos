
// Simulador//

alert("BIENVENIDO AL SIMULADOR DE PRESTAMOS")

let nombre = prompt("Ingrese su nombre")
while (nombre == "") {
    alert("No ingresaste tu nombre, por favor inresa tu nombre: ")
    nombre = prompt("Ingrese su nombre")
}

alert("Antes de la simulacion, te solictaremos unos datos para nuestra base de datos:")



const cliente = []

function agregarcliente(nombre, apellido, edad, ciudad, tarjeta, banco) {
    if (!nombre || !apellido || isNaN(edad) || !ciudad || !tarjeta || !banco) {
        alert("Por favor, ingrese datos validos para el ingreso.")
        return false
    }
    const fechaHoraIngreso = new Date()
    const horaIngreso = `${fechaHoraIngreso.getHours()}:${fechaHoraIngreso.getMinutes()} ${fechaHoraIngreso.getHours() >= 12 ? 'PM' : 'AM'}`
    const fechaIngreso = `${fechaHoraIngreso.getDate()}/${fechaHoraIngreso.getMonth() + 1}/${fechaHoraIngreso.getFullYear()}`

    cliente.push({
        nombre,
        apellido,
        edad,
        ciudad,
        tarjeta,
        banco,
        fechaHoraIngreso: `${fechaIngreso} ${horaIngreso}`
    })
    return true
}

function eliminarcliente() {
    let listadoclientes = "Lista de clientes ingresados:\n"
    cliente.forEach((cliente, index) => {
        listadoclientes += `${index + 1}. ${cliente.nombre} ${cliente.apellido}\n`
    })
    const eliminar = prompt(listadoclientes + "\nIngrese el numero del cliente que desea eliminar:")
    if (isNaN(eliminar) || eliminar < 1 || eliminar > cliente.length) {
        alert("Numero de cliente es invalido.")
    } else {
        cliente.splice(eliminar - 1, 1)
        alert("El Cliente ha sido eliminado correctamente.")
    }
}


function simular() {

    let monto = parseFloat(prompt(" Ahora " + nombre + ", Ingrese el monto a solicitar inferior a $50.000"))


    while (monto > 50000 || monto <= 0) {
        monto = parseFloat(prompt("Por favor, ingrese un Monto VÁLIDO: "))

    }
    alert(" El monto ingresado es: $ " + monto)

    let cuota = parseInt(prompt("ingrese el numero de cuotas deseadas, hasta 48 cuotas !!"))

    while (cuota > 48 || cuota <= 0) {
        cuota = parseInt(prompt("Por favor, ingrese un numero de Cuotas VÁLIDO: "))

    }
    alert(" El numero de cuotas ingresado es:  " + cuota)


    if (monto > 0 && monto <= 10000) {
        total = monto * 0.15;
        //tot = total + monto;
        //totcuota = tot / cuota;

    } else if (monto > 10000 && monto <= 20000) {
        total = monto * 0.25;
        //tot = total + monto;
        //totcuota = tot / cuota;
    } else if (monto > 20000 && monto <= 30000) {
        total = monto * 0.45;
        //tot = total + monto;
        //totcuota = tot / cuota;
    } else if (monto > 30000 && monto <= 40000) {
        total = monto * 0.65;
        //tot = total + monto;
        //totcuota = tot / cuota;
    } else if (monto > 40000 && monto <= 50000) {
        total = monto * 0.85;
        //tot = total + monto;
        //totcuota = tot / cuota;
    }

    function calcular() {
        tot = total + monto
        totcuota = tot / cuota
        return tot, totcuota

    }

    calcular()

    alert(" El monto a devolver es: $ " + tot + " y el Valor de cada cuota es: $ " + totcuota)

    continuar = confirm(nombre + ", Desea realizar una nueva simulacion??")
    if (continuar == true) {
        simular()
    } else {
        alert("Muchas gracias por su visita!!!!!")
    }

}


while (true) {
    const opcion = prompt("Seleccione una opcion:\n1. Agregar Cliente\n2. Eliminar Cliente\n3. Salir")

    if (opcion === "1") {
        const nombre = prompt("Ingrese el nombre:")
        const apellido = prompt("Ingrese el apellido:")
        const edad = parseInt(prompt("Ingrese la edad:"))
        const ciudad = prompt("Ingrese la ciudad:")
        const tarjeta = prompt("Ingrese que tarjeta de credito usa:")
        const banco = prompt("Ingrese el banco emisor:")
        const clienteAgregado = agregarcliente(nombre, apellido, edad, ciudad, tarjeta, banco)

        if (clienteAgregado) {
            alert("Cliente agregado con exito.")
            alert("Pasamos a la simulacion")
            simular()
        }
    } else if (opcion === "2") {
        eliminarcliente()
    } else if (opcion === "3") {
        break
    } else {
        alert("Opcion invalida. Por favor, seleccione una opcion valida.")
    }
}


//simular()


















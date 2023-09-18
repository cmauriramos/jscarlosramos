
// Simulador//

alert("BIENVENIDO AL SIMULADOR DE PRESTAMOS")

let nombre = prompt("Ingrese su nombre")
while (nombre == "") {
    alert("No ingresaste tu nombre, por favor inresa tu nombre: ")
    nombre = prompt("Ingrese su nombre")
}

//let nuevoingreso = true




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

    } else if (monto > 10000 && monto <= 20000) {
        total = monto * 0.25;

    } else if (monto > 20000 && monto <= 30000) {
        total = monto * 0.45;

    } else if (monto > 30000 && monto <= 40000) {
        total = monto * 0.65;

    } else if (monto > 40000 && monto <= 50000) {
        total = monto * 0.85;

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

simular()


















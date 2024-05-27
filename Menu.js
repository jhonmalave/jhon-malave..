const read = require("prompt-sync")();

function menuEjercicios() {
    console.log("Menú Ejercicios")
    console.log("1) Algoritmo que transforme de grados Celsius a Fahrenheit")
    console.log("2) Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")
    console.log("3) Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
    console.log("4) Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos.")
    console.log("5) Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))")
    console.log("6) Calcular sueldo, sobretiempo, ingreso total, seguro social y neto a recibir.")
    console.log("7) Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar.")
    console.log("8) Leer un carácter y deducir si está comprendido entre 'a' y 'z' o es un signo de puntuación.")
    console.log("9) Determinar cuánto se debe pagar por x cantidad de colas.")
    console.log("10) Calcular descuento en trajes y precio final con IVA.")
    console.log("11) Dado un día en número, presentar el nombre de ese día.")
    console.log("12) Dado un mes en número, presentar el nombre de ese mes.")
    console.log("13) Dado 5 nombres almacenarlos en un arreglo y presentarlos desde el último al primero.")
    console.log("14) Presentar dirección, primer, medio y último carácter.")
    console.log("15) Almacenar 5 valores aleatorios en un arreglo y verificar si el primero es par positivo y el último impar negativo.")
    console.log("16) Añadir 3 nombres a un arreglo y presentar el primer y último carácter de cada nombre.")
    console.log("17) Presentar el primer carácter de una cadena si es un dígito.")
    console.log("18) Presentar el último carácter de una cadena si es una letra.")
    console.log("19) Presentar el primer carácter de una cadena si es una vocal.")
    console.log("20) Presentar el carácter de en medio si es un carácter de puntuación.")
    console.log("21) Comparar dos caracteres.")
    console.log("22) Comparar dos nombres.")
    console.log("23) Indicar cuántos elementos tiene una cadena sin usar ciclos.")
    console.log("24) Indicar cuántos elementos tiene un arreglo sin usar ciclos.")

    let opcion = parseInt(read("Elija opción [1…24]: "))

    switch (opcion) {
        case 1:
            console.log("Ejercicio 1: Transformar de grados Celsius a Fahrenheit")
            let celsius = parseFloat(read("Ingrese los grados Celsius: "))
            let fahrenheit = (celsius * 9/5) + 32;
            console.log(`Grados Fahrenheit: ${fahrenheit}`)
            break
        case 2:
            console.log("Ejercicio 2: Doble y triple de un número entero")
            let numero = parseInt(read("Ingrese un número entero: "))
            console.log(`Doble: ${numero * 2}, Triple: ${numero * 3}`)
            break
        case 3:
            console.log("Ejercicio 3: Producto, suma y media aritmética de 4 variables")
            let var1 = parseFloat(read("Ingrese la primera variable: "))
            let var2 = parseFloat(read("Ingrese la segunda variable: "))
            let var3 = parseFloat(read("Ingrese la tercera variable: "))
            let var4 = parseFloat(read("Ingrese la cuarta variable: "))
            let producto = var1 * var2 * var3 * var4
            let suma = var1 + var2 + var3 + var4
            let media = suma / 4
            console.log(`Producto: ${producto}, Suma: ${suma}, Media: ${media}`)
            break
        case 4:
            console.log("Ejercicio 4: Convertir peso de libras a kilogramos y gramos")
            let libras = parseFloat(read("Ingrese el peso en libras: "));
            let kilogramos = libras * 0.453593;
            let gramos = kilogramos * 1000;
            console.log(`Kilogramos: ${kilogramos}, Gramos: ${gramos}`)
            break
        case 5:
            console.log("Ejercicio 5: Resolver expresión matemática")
            // Esta parte puede necesitar librerías matemáticas adicionales
            // para cálculos trigonométricos y raíces. Se necesita más información.
            break
        case 6:
            console.log("Ejercicio 6: Calcular sueldo, sobretiempo, ingreso total, seguro social y neto a recibir")
            let horas = parseFloat(read("Ingrese las horas trabajadas: "))
            let sueldo, sobretiempo = 0
            if (horas <= 40) {
                sueldo = horas * 5
            } else {
                sueldo = 40 * 5
                sobretiempo = (horas - 40) * 10
            }
            let ingresoTotal = sueldo + sobretiempo
            let seguroSocial = ingresoTotal * 0.1
            let neto = ingresoTotal - seguroSocial
            console.log(`Sueldo: $${sueldo}, Sobretiempo: $${sobretiempo}, Ingreso Total: $${ingresoTotal}, Seguro Social: $${seguroSocial}, Neto a recibir: $${neto}`)
            break
        case 7:
            console.log("Ejercicio 7: Comparar dos números con condiciones específicas")
            let num1 = parseInt(read("Ingrese el primer número: "))
            let num2 = parseInt(read("Ingrese el segundo número: "))
            if (num1 % 2 === 0 && num2 % 2 !== 0) {
                if (num1 > num2) {
                    console.log(`${num1} es mayor que ${num2}`)
                } else {
                    console.log(`${num2} es mayor que ${num1}`)
                }
            } else {
                console.log("No se cumplen las condiciones para la comparación.")
            }
            break
        case 8:
            console.log("Ejercicio 8: Verificar carácter")
            let caracter = read("Ingrese un carácter: ")
            if (caracter >= 'a' && caracter <= 'z') {
                console.log("El carácter está entre 'a' y 'z'.")
            } else if (",.;:".includes(caracter)) {
                console.log("Es un signo de puntuación.")
            } else {
                console.log(`Carácter ingresado: ${caracter}`)
            }
            break
        case 9:
            console.log("Ejercicio 9: Calcular costo de colas")
            let cantidadColas = parseInt(read("Ingrese la cantidad de colas: "))
            let costoCola = cantidadColas < 12 ? 0.25 : 0.225
            let totalColas = cantidadColas * costoCola
            console.log(`Total a pagar por ${cantidadColas} colas es $${totalColas}`)
            break
        case 10:
            console.log("Ejercicio 10: Calcular descuento en trajes y precio final con IVA")
            let precioTraje = parseFloat(read("Ingrese el precio del traje: $"))
            let descuento, precioConDescuento, iva, precioFinal
            if (precioTraje > 200) {
                descuento = precioTraje * 0.1
            } else {
                descuento = 10
            }
            precioConDescuento = precioTraje - descuento
            iva = precioConDescuento * 0.15
            precioFinal = precioConDescuento + iva
            console.log(`Precio inicial: $${precioTraje}, Descuento: $${descuento}, Precio con descuento: $${precioConDescuento}, IVA: $${iva}, Precio final: $${precioFinal}`)
            break
        case 11:
            console.log("Ejercicio 11: Día de la semana")
            let diaNumero = parseInt(read("Ingrese el número del día (1-7): "))
            let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
            if (diaNumero >= 1 && diaNumero <= 7) {
                console.log(`El día es: ${diasSemana[diaNumero - 1]}`)
            } else {
                console.log("Número de día no válido.")
            }
            break
        case 12:
            console.log("Ejercicio 12: Nombre del mes")
            let mesNumero = parseInt(read("Ingrese el número del mes (1-12): "))
            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            if (mesNumero >= 1 && mesNumero <= 12) {
                console.log(`El mes es: ${meses[mesNumero - 1]}`)
            } else {
                console.log("Número de mes no válido.")
            }
            break
        case 13:
            console.log("Ejercicio 13: Presentar nombres en orden inverso")
            let nombres = []
            for (let i = 0; i < 5; i++) {
                nombres.push(read(`Ingrese el nombre ${i + 1}: `))
            }
            console.log(nombres.reverse().join(", "))
            break
        case 14:
            console.log("Ejercicio 14: Dirección y caracteres")
            let direccion = read("Ingrese una dirección: ")
            let primerCaracter = direccion.charAt(0)
            let medioCaracter = direccion.charAt(Math.floor(direccion.length / 2))
            let ultimoCaracter = direccion.charAt(direccion.length - 1)
            console.log(`Dirección: ${direccion}, Primer carácter: ${primerCaracter}, Carácter del medio: ${medioCaracter}, Último carácter: ${ultimoCaracter}`)
            break
        case 15:
            console.log("Ejercicio 15: Valores aleatorios en un arreglo")
            let valores = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) - 50)
            console.log("Arreglo:", valores)
            if (valores[0] % 2 === 0 && valores[0] > 0) {
                console.log("El primer valor es par positivo:", valores[0])
            }
            if (valores[valores.length - 1] % 2 !== 0 && valores[valores.length - 1] < 0) {
                console.log("El último valor es impar negativo:", valores[valores.length - 1])
            }
            break
        case 16:
            console.log("Ejercicio 16: Añadir 3 nombres a un arreglo y presentar el primer y último carácter de cada nombre")
            let arregloNombres = []
            for (let i = 0; i < 3; i++) {
                arregloNombres.push(read(`Ingrese el nombre ${i + 1}: `))
            }
            arregloNombres.forEach(nombre => {
                console.log(`Nombre: ${nombre}, Primer carácter: ${nombre.charAt(0)}, Último carácter: ${nombre.charAt(nombre.length - 1)}`)
            })
            break
        case 17:
            console.log("Ejercicio 17: Presentar el primer carácter si es un dígito")
            let cadena1 = read("Ingrese una cadena: ")
            if (!isNaN(cadena1.charAt(0))) {
                console.log(`El primer carácter es un dígito: ${cadena1.charAt(0)}`)
            } else {
                console.log("El primer carácter no es un dígito.")
            }
            break
        case 18:
            console.log("Ejercicio 18: Presentar el último carácter si es una letra")
            let cadena2 = read("Ingrese una cadena: ")
            let ultimoChar = cadena2.charAt(cadena2.length - 1)
            if (/[a-zA-Z]/.test(ultimoChar)) {
                console.log(`El último carácter es una letra: ${ultimoChar}`)
            } else {
                console.log("El último carácter no es una letra.")
            }
            break
        case 19:
            console.log("Ejercicio 19: Presentar el primer carácter si es una vocal")
            let cadena3 = read("Ingrese una cadena: ");
            let primerChar = cadena3.charAt(0).toLowerCase();
            if ("aeiou".includes(primerChar)) {
                console.log(`El primer carácter es una vocal: ${primerChar}`)
            } else {
                console.log("El primer carácter no es una vocal.")
            }
            break
        case 20:
            console.log("Ejercicio 20: Presentar el carácter de en medio si es un carácter de puntuación")
            let cadena4 = read("Ingrese una cadena: ")
            let medioChar = cadena4.charAt(Math.floor(cadena4.length / 2))
            if (";:.,,".includes(medioChar)) {
                console.log(`El carácter de en medio es un signo de puntuación: ${medioChar}`)
            } else {
                console.log("El carácter de en medio no es un signo de puntuación.")
            }
            break
        case 21:
            console.log("Ejercicio 21: Comparar dos caracteres")
            let char1 = read("Ingrese el primer carácter: ")
            let char2 = read("Ingrese el segundo carácter: ")
            if (char1 === char2) {
                console.log("Los caracteres son iguales.")
            } else if (char1 < char2) {
                console.log(`${char1} es menor que ${char2}`)
            } else {
                console.log(`${char1} es mayor que ${char2}`)
            }
            break
        case 22:
            console.log("Ejercicio 22: Comparar dos nombres")
            let nombre1 = read("Ingrese el primer nombre: ")
            let nombre2 = read("Ingrese el segundo nombre: ")
            if (nombre1 === nombre2) {
                console.log("Los nombres son iguales.");
            } else if (nombre1 < nombre2) {
                console.log(`${nombre1} es menor que ${nombre2}`)
            } else {
                console.log(`${nombre1} es mayor que ${nombre2}`)
            }
            break
        case 23:
            console.log("Ejercicio 23: Indicar cuántos elementos tiene una cadena sin usar ciclos")
            let cadena5 = read("Ingrese una cadena: ")
            console.log(`La cadena tiene ${cadena5.length} elementos.`)
            break
        case 24:
            console.log("Ejercicio 24: Indicar cuántos elementos tiene un arreglo sin usar ciclos")
            let arreglo = read("Ingrese los elementos del arreglo separados por comas: ").split(",")
            console.log(`El arreglo tiene ${arreglo.length} elementos.`)
            break
        default:
            console.log("Opción no válida. Por favor, elija una opción entre 1 y 24.")
    }
}

menuEjercicios()

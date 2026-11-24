//------Funciones y arrays------
// 1) Crear una función que reciba dos parámetros y retorne un valor.

function dobleParam(num1, num2) {
    return num1 + num2;
}
console.log(dobleParam(1,6)); //ésto es una funcion tradicional que recibe 2 parametros y devuelve la suma de ambos

// 2) Crear una función que se llame calcularAreaCuadrado, que reciba un parámetro
// que sea el lado del cuadrado, calcule el área y la retorne

function calcularAreaCuadrado(lado) {
    return lado * lado;
}
console.log("el area del cuadrado es de", calcularAreaCuadrado(7)); //poner una coma "," en vez del mas "+", tambien permite concatenar
//strings ("") y los valores de variables, agregando un espacio entre ellos, sin que tengas que poner a mano el " ".
// ya vas entendiendo

// 3) Crear una función por declaración, puede hacer lo que quieras.

let nombre = "Maxi" //string
let edad = 30 //number
let exitoso = true; //booleano
//js es muy flexible con tema de tipo de datos. Podes cambiar un int a string sin especificarlo.
//pero no te avisará de los errores que vengan con eso, asi que cuidado.

// 4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que
// es un array de números y retorna la suma del total de los números (utilizar foreach para
// recorrer el array)

let autosuma = (arrayNum) => {
    let suma = 0
    arrayNum.forEach(element => {
        suma = element + suma
    });
    return suma
}

let array = [1,4,6,7,40]
console.log("La suma del array es de:", autosuma(array))

// 5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y
// retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años”

let bienvenida = (nom, nac) => {
    let hoy = Date.UTC(2026, 10, 7)
    let diaFinal = hoy - Date.UTC(nac)
    diaFinal = ((((((diaFinal/1000)/60)/60)/24)/30.5)/12) //el Date te devuelve el dia, pero en milesimas de segundo. Pasao a años.
    diaFinal = diaFinal.toFixed(1) //no hay ganas de ver como redondearlo pa abajo
    return console.log("Hola", nom + ". Éste año tenés", diaFinal, "años")
}

bienvenida("Maxi", 2005)

// 6) Crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y
// un nombre, que agregue al alumno en la ultima posición del array

let inscribirAlumno = (arrayAlu, nombre) => {
    arrayAlu.push(nombre) //el push lo agregará al final del array
}

let arrayAlum = ["Tomi", "Bryan", "Facu", "Gabriel"]
inscribirAlumno(arrayAlum, "Hector")
arrayAlum.forEach( cosa => {
    console.log(cosa)
})

// 7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un
// nombre a buscar, y diga si encuentra el nombre en la lista.

let buscador = (arrayAlu, nombre) => { //usamos el array del punto anterior
    
    if(arrayAlu.includes(nombre)) { //ésto devuelve true o false directamente. Mas cómodo que hacerlo con find.
        return console.log("El nombre fue encontrado:", nombre)
    } else {
        return console.log("Nop, nada coincide con el nombre")
    }
}

buscador(arrayAlum, "Tomi")

let separador = () => {
    return console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°")
}
separador()

//------ Parte 2: Callbacks -------
// 1) Definir una función que se llame Calculadora, que reciba un array de números, y
// una callback
//   a) Pasarle por argumento una función arrow que realice la suma de los elementos
//   del array.
let arrayNumerico = [4, 5, 10, 3, 15]

let Calculadora = (arrayNum, callback) => {
    return callback(arrayNum)
}

let suma = (arraySum) => {
    let greg = arraySum[0]
    for (let i = 1; i<arraySum.length; i++) {
        greg = greg + arraySum[i]
    }
    console.log("La suma del arreglo es:", greg)
}

Calculadora(arrayNumerico, suma)

//   b) Pasarle por argumento una función arrow que realice la resta de los elementos
//   del array

let resta = (arrayRes) => {
    let greg = arrayRes[0]
    for (let i = 1; i<arrayRes.length; i++) {
        greg = greg - arrayRes[i]
    }
    console.log("La resta del arreglo es:", greg)
}

Calculadora(arrayNumerico, resta)

//   c) Pasarle por argumento una función arrow que realice la multiplicación de los
//   elementos.

let multiplica = (arrayMul) => {
    let greg = arrayMul[0]
    for (let i = 1; i<arrayMul.length; i++) {
        greg = greg * arrayMul[i]
    }
    console.log("La multiplicacion del arreglo es:", greg)
}

Calculadora(arrayNumerico, multiplica)

// 2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número,
// y un array, la función debe validar si el número es mayor o igual a cero y menor o
// igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso
// contrario debe arrojar un error informando que el número es mayor o menor a lo
// establecido. Debe retornar el array con el resultado.

let agregarSiEstaEntreCeroYDiez = (number, arreglao) => {
    if((number >= 0)&&(number <= 10)) {
        arreglao.unshift(number)
    } else {
        console.log("El numero ingresado no está en el rango especificado")
    }
    return console.log(arreglao)
}

agregarSiEstaEntreCeroYDiez(1, arrayNumerico) //reciclada historica

// 3) Definir una función similar a la del punto 2, pero que en vez de un número reciba
// un array con números y valide si cada uno de los elementos cumple con la
// condición de estar entre cero y diez, debe retornar un array con los números que
// cumplan la función

arrayNumerico.push(14, 30)

let agregarSiEntreCeroYDiezRaro = (arregaloNum) => {
    let arregloBajo = arregaloNum.filter((element) => 
        element >= 0 && element <= 10 //acordarse que acá no se ponen "{}", asi te lo acepta
    )
    return console.log("El nuevo arreglo es:", arregloBajo)
}

agregarSiEntreCeroYDiezRaro(arrayNumerico)

// 4) Momento de creatividad! – Definir una función que reciba tres parámetros, algo, y
// dos callbacks, que internamente las ejecute y realice algún procedimiento

let detectorDeExitosos = (nombre, edad, estudiante, gamer, callback1, callback2) => {
    console.log("Veamos el perfil de éste estudiante:")
    callback1(nombre, edad)
    callback2(estudiante, gamer)
}

let verificador = (nombre, edad) => {
    if (edad >= 20) {
        return console.log("El usuario llamado", nombre, "tiene los conocimientos necesarios para fundar una empresa")
    } else {
        return console.log("El usuario", nombre, "todavia le falta estudiar cosas para fundar su empresa")
    }
}

let pasatiempos = (estudiante, gamer) => {
    if (gamer == true) {
        console.log("El estudiante (", estudiante, ") pasa mucho tiempo jugando, y no estudia na (", gamer, ")")
    } else {
        console.log("El estudiante (", estudiante, ") no juega nada y, aun asi, tiene fiaca de estudiar (", gamer, ")")
    }
}

detectorDeExitosos("Maxi", 21, true, true, verificador, pasatiempos)

// 5) Realizar una función que se llame validarIngreso, que reciba una edad, y una
// callback. Esta función debe validar por medio de un operador ternario si puede
// intregar o no (la condición es que sea mayor a 18 años). El resultado del operador
// ternario de debe pasar como argumento a la ejecución de la callback. (Podes
// elegir que hacer con la función callback que le vas a pasar por agumento a la
// función validarIngreso)

const validarIngreso = (edad, llamarAtras) => {
    //el operador ternario es el if resumido
    let pase
    edad >= 18 ? (pase = true) : (pase = false)

    llamarAtras(pase)
}
let generadorDeTokens= (acceso) => {
    if (acceso == true) {
        return console.log("Edad verificada. Entre al sistema")
    } else {
        return console.log("Edad verificada. Acceso denegado")
    }
    
}

validarIngreso(30, generadorDeTokens)

//falta ver como subir esto a github
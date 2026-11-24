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


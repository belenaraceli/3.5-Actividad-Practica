// Función para solicitar datos de entrada
function obtenerDatos() {
    // Usamos prompt() para pedir los datos al usuario
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));
    return { numero1, numero2 };
}

// Función para procesar la información obtenida
function procesarDatos(datos) {
    // Realizamos alguna operación con los datos, por ejemplo, una suma
    let suma = datos.numero1 + datos.numero2;
    return suma;
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    // Mostramos el resultado en la consola
    console.log("El resultado de la suma es: " + resultado);
    alert("El resultado de la suma es: " + resultado);
}

// Ejecución del algoritmo: obtener los datos, procesarlos y mostrar el resultado
function ejecutarAlgoritmo() {
    let datos = obtenerDatos(); // Paso 1: obtener datos
    let resultado = procesarDatos(datos); // Paso 2: procesar datos
    mostrarResultado(resultado); // Paso 3: mostrar resultado
}

// Llamamos a la función que ejecuta el algoritmo
ejecutarAlgoritmo();
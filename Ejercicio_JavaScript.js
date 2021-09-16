// Solución ejercicios de JavaScript
// Nombre: Julian Padilla Molina - Codigo: 201913677

// Punto 1: Implementar una funcion en JavaScript para encriptar y descencriptar.

/*
* La funcion recibe como parametros un mensaje (Representado como un arreglo de numeros), la funcion a ejecutar (encrypt / decrypt) y la clave secreta (la cual es un numero)
*/

const encrypt = (message, secretKey) => message.map((i) => i + secretKey);
const decrypt = (message, secretKey) => message.map((i) => i - secretKey);

const secret = (message, functionED, secretKey) => functionED(message, secretKey);

// Punto 2: Implementar una funcion para hallar el maximo comun divisor (mcd) de dos números a,b

/*
* La funcion mcd recibe dos numeros y halla el mcd
* a, si a y b son iguales, o el mcd de c y d, donde c es el menor entre a y b, y d es la diferencia entre el mayor y el menor
*/
const mcd = (a, b) => (a === b) ? a : mcd(Math.min(a, b), Math.max(a,b) - Math.min(a, b));

// Punto 3: Implementar una funcion de Fibonacci 

/*
* La funcion recibe un numero y se halla el n termino de la sucesión
* Funcion de fibanacci:  f(0)=0, f(1)=1 y f(n) = f(n-1) + f(n-2)
*/
const fibonacci = (n) => (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2);
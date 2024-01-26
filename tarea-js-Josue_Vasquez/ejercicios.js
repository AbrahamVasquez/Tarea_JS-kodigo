/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario */

function ageUser(age) {
    return age >= 18 ? 'Eres mayor de edad' : 'NO eres mayor de edad'
};

console.log(ageUser(17));

// EJERCICIO 2: Crear una función que determine la nota final de un alumno

const getFinalNote = (name, carnet, examen, tareas, asistencia, investigacion) => {
    // Hacer la suma del promedio basado en porcentajes
    let average = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    
    // Muestra el output final de los datos ingresados
    return `${name} con numero de carnet ${carnet} Tiene una nota final de ${average}`;

}

// Imprimo en un console log los datos del usuario input
console.log(getFinalNote('Josue Vasquez', '00005', 8.5, 7, 6, 10));

/* EJERCICIO 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. */

function calculateSalarie (name, salarie, category) {
    let aumento = 0; // Establece el valor inicial del aumento
    
    switch (category) { // Definir el caso segun categoria para el aumento
        case 'A':
            aumento = salarie * 0.15;
            break;
        case 'B':
            aumento = salarie * 0.3;
            break;
        case 'C':
            aumento = salarie * 0.1;
            break;
        case 'D':
            aumento = salarie * 0.2;
            break;
        default:
            'Algo salio mal, verifica tus datos ingresados'
            break;
    }

    const newSalarie = salarie + aumento; // Nueva variable que contendra los nuevos valores sumando el aumento con el anterior salario

    // Imprimo en consola el final luego de ingresar los datos cuando se llame la funcion
    console.log(`${name} Tiene un salario de ${salarie} y se encuentra en la categoria ${category} por lo cual obtendra un aumento de: ${aumento} y el equivalente final sera ${newSalarie}`)

    return newSalarie; // Retorno el valor final
}

calculateSalarie('Tony Stark', 1200, 'A');

/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */

const numeroMasAlto = (num1, num2) => num1 > num2 ? `${num1} es mas alto que ${num2}` : num2 > num1 ? `${num2} es mas alto que ${num1}` : 'Los numeros son iguales';

console.log(numeroMasAlto(8, 5));

/* EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario. */

const cars = document.getElementById('cars');
const btnCalculator = document.getElementById('btnCalculator');
const result = document.getElementById('result');

function calculateDiscount() {
    let selectedCar = cars.value; // Agrego el value para cada uno de los items
    let discount = 0; // Descuento lo inicio en cero antes de ejecutar el switch

    switch (selectedCar) {
        case 'FORD FIESTA':
            discount = 5;
            break;
        case 'FORD FOCUS':
            discount = 10;
            break;
        case 'FORD ESCAPE':
            discount = 20;
            break;
        default:
            break;
    }

    // Aca mando los resultados en forma de texto al main HTML
    result.textContent = `Descuento por el coche ${selectedCar}: sera de un ${discount}%`;
}

btnCalculator.addEventListener('click', calculateDiscount)

/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

function calculateTravel(origen, destination) {
    // Aseguro los inputs convirtiendolos a minusculas solo en caso
    origen = origen.toLowerCase();
    destination = destination.toLowerCase();

    let discount = 0; // Iniciador en cero antes de empezar la condicion

    if (origen === 'palma' && destination === 'la costa del sol') {
        descuento = 5;
    } else if ( destination === 'panchimalco') {
        discount = 10;
    } else if (destination === 'puerto el triunfo') {
        discount = 15;
    }
    
    return discount;
}

console.log(calculateTravel('ciudad de palma', 'panchimalco'));

/* EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

function checkNumbers() {
    // Aca asigno un valor inicial para cada tipo de numero/operacion
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let multipliedNumbers = 0;
    let pairedNumbers = 0;

    // Inicio el bucle agregando un prompt que obtendra el valor del usuario cada vez ingresado el numero acorder a 'i'
    for (let i = 0; i <= 10; i++) { 
        // let number = parseInt(prompt(`Ingresa el numero ${i + 1}`));
        
        if (number < 0) {
            negativeNumbers++;
        } else if (number > 0) {
            positiveNumbers++;
        }

        if (number % 15 === 0) {
            multipliedNumbers++;
        }

        if (number % 2 === 0) {
            pairedNumbers += number;
        }
    }

    console.log(`Total de valores negativos: ${negativeNumbers}`);
    console.log(`Total de valores positivos: ${positiveNumbers}`);
    console.log(`Total de múltiplos de 15: ${multipliedNumbers}`);
    console.log(`Valor acumulado de números pares: ${pairedNumbers}`);

}

checkNumbers();

/* EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        
         let resultado =  num * i;
         console.log(`${num} x ${i} = ${resultado}`);
        
    }
    // return;
}

multiplicationTable(5);

/* Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

function calculateTemperature(temp) {
    let temperature = (temp * 9/5 + 32); // Aca convertimos el mumero ingresado como Celcius a Fahrenheit
    if (temperature >= 14 && temperature <= 32 ) {
        return console.log('La Temperatura Esta Baja');
    }else if (temperature > 32 && temperature <= 68){
        return console.log('La Temperatura Es Adecuada');
    }else if (temperature > 68 && temperature <= 96) {
       return console.log('La Temperatura Esta Alta');
    }else {
        return console.log('Temperatura desconocida');
    }
}

calculateTemperature(30);

/* EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche. */

function kodigoStudents() {
    const morningAges = [25,15,22,17,20];
    const afternoonAges = [22,23,24,25,26];
    const nightAges = [18, 19, 20, 21, 22, 23, 30, 29, 31, 27, 28];

    // Aca saco el promedio segun edad
    function calculateAverage(ages) { const sum = ages.reduce((total, age) => total + age, 0);
        return sum / ages.length;
    }
    

    // Asigno el valor/resultado de promedios
    const morningAverage = calculateAverage(morningAges);
    const afternoonAverage = calculateAverage(afternoonAges);
    const nightAverage = calculateAverage(nightAges);

    console.log(`Promedio Turno Mañana: ${morningAverage}`);
    console.log(`Promedio Turno Tarde: ${afternoonAverage}`);
    console.log(`Promedio Turno Noche: ${nightAverage}`);

    let highestAverage = 'Mañana';

    if (afternoonAverage > morningAverage && morningAverage > nightAverage) {
        highestAverage ='Tarde';
    } else if (nightAverage > morningAverage && nightAverage > afternoonAverage) {
        highestAverage = 'Noche'
    }

    console.log(`El Turno con el promedio mayor de edades es: ${highestAverage}`);
}

kodigoStudents();
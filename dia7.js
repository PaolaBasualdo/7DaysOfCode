let num1;
let num2;
let operacion;
let control= true;


function suma(num1, num2){
    return num1 + num2;
    }

function resta(num1, num2){
    return num1 - num2;
    }

function multiplicacion(num1, num2){
    return num1 * num2;
    }

function division(num1, num2){
    return num1/num2;
    }

while(control){
    operacion = prompt('Que operacion desea ralizar?:\n-Suma\n-Resta\n-Multiplicacion\n-Division\n-Salir ');
    
    if (operacion === null) {
        alert("No ingresaste ninguna operación. Intenta de nuevo.");
        continue
    }

    operacion = operacion.toLocaleLowerCase()
 
    if (operacion === 'salir'){
        control= false;
        break
    }  


    if (operacion === 'suma' || operacion === 'resta' || operacion === 'multiplicacion' || operacion === 'division'){

        num1 = parseInt(prompt('Ingrese el primer valor: '));
        num2 = parseInt(prompt('Ingrese el segundo valor: '));
        
        if (isNaN(num1)||isNaN(num2)){  
            alert('Ingrese valores numericos validos: ')
            isNaN(num1) ? num1 = parseInt(prompt('Primer valor: ')):
            num2 = parseInt(prompt('Segundo valor: '))
        }
    
     
        switch (operacion){
            case 'suma':
                alert(`La suma de los valores ingresados es ${suma(num1, num2)}.`);
                break;
            case 'resta':
                alert(`La resta de los valores ingresados es ${resta(num1, num2)}.`);
                break;
            case 'multiplicacion':
                alert(`El producto de los valores ingresados es ${multiplicacion(num1, num2)}.`);
                break;
            case 'division':
                if (num2 !== 0){
                alert(`La division de los valores ingresados es ${division(num1, num2)}.`);
                }else {
                alert('Operación inválida: no es posible dividir por cero.')
                }
                break;
        }
    }else {
        alert('Ingrese una opcion validad')
    }

}

//SOLUCION PROPUESTA
/*function suma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function resta(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicacion(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

function division(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacion = "";

do {  //usando 'do...while', ya que la primera vez siempre vamos a entrar
    
    operacion = prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`);
    while (operacion != "suma" && operacion != "resta" && operacion != "multiplicación" && operacion != "división" && operacion != "salir") {  //mientras el texto leído sea diferente de "suma", "resta", "multiplicación", "división" y "salir", mostrar que no fue reconocido y preguntar nuevamente
        alert(`¡Operación no reconocida!`);
        operacion = prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`);
    }
    
    if (operacion === "salir") {  //si el texto leído es "salir", salir del loop y de la calculadora
        break;
    }
    
    valor1 = prompt(`Ingresa el primer valor:`);
    valor2 = prompt(`Ingresa el segundo valor:`);
    switch (operacion) {
        case 'suma':
            alert(`El resultado de la ${operacion} es ${suma(valor1, valor2)}`);
            break;
        case 'resta':
            alert(`El resultado de la ${operacion} es ${resta(valor1, valor2)}`);
            break;
        case 'multiplicación':
            alert(`El resultado de la ${operacion} es ${multiplicacion(valor1, valor2)}`);
            break;
        case 'división':
            alert(`El resultado de la ${operacion} es ${division(valor1, valor2)}`);
            break;
    }
} while (operacion === "suma" || operacion === "resta" || operacion === "multiplicación" || operacion === "división")
alert(`¡Hasta la próxima!`);*/
let areaSeleccionada;
let tecnologiaPrincipal; 
let opcionFullStack;
let mensajeResultado;  
let opcionTecnologiasExtra;
let nuevaTecnologia;
let listaTecnologias = [];

while (true) {
    areaSeleccionada = prompt('¿Qué te gustaría estudiar? Elige una opción:\n1- Front-End\n2- Back-End');
    if (areaSeleccionada === '1') {
        areaSeleccionada = 'Front-End';
        tecnologiaPrincipal = prompt('¿Te gustaría aprender React o Vue?: ');
        break;
    } else if (areaSeleccionada === '2') {
        areaSeleccionada = 'Back-End';
        tecnologiaPrincipal = prompt('¿Te gustaría aprender C# o Java?: ');
        break;
    } else {
        alert('Elige una de las dos opciones válidas');
    }
}

mensajeResultado = `Elegiste el camino del ${areaSeleccionada} y vas a aprender ${tecnologiaPrincipal}.`;

opcionFullStack = prompt(`¿Te gustaría convertirte en FullStack?\nElige una opción:\n1- Sí, quisiera ser un desarrollador FullStack\n2- No, solo especializarme en ${areaSeleccionada}`);
if (opcionFullStack === '1') {
    alert(`${mensajeResultado} Continuarás con tus estudios para convertirte en FullStack.`);
} else if (opcionFullStack === '2') {
    alert(`${mensajeResultado} Luego te especializarás en ${areaSeleccionada}.`);
}

while (true) {
    opcionTecnologiasExtra = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Responde con "ok" para continuar o "no" para finalizar.');
    if (opcionTecnologiasExtra.toLowerCase() === 'ok') {
        nuevaTecnologia = prompt('Indica qué nueva tecnología te gustaría aprender: ').toLowerCase();
        listaTecnologias.push(nuevaTecnologia);
        alert(`¡Genial elección! Aprender ${nuevaTecnologia} puede ayudarte mucho en tu carrera.`);
    } else if (opcionTecnologiasExtra.toLowerCase() === 'no') {
        break;
    } else {
        alert('Responde con "ok" o "no"');
    }
}

alert(`Elegiste el camino del ${areaSeleccionada}, vas a aprender ${tecnologiaPrincipal}. Además, te gustaría aprender: ${listaTecnologias.join(", ")}. ¡Sigue así y nunca dejes de aprender!`);*/

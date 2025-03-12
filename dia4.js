
let numeroSecreto = Math.floor(Math.random()*10+1);
let numeroUsuario;
let acierto = false;
console.log(acierto);
console.log(numeroSecreto)


for (let i = 1; i<=3; i ++){
    numeroUsuario = parseInt(prompt('Cual es el numero Secreto?: '))
    if (numeroSecreto === numeroUsuario){
        alert('Acertaste. Te felicito! ')
        acierto = true;//acierto solo se cambia cuando acierta el numero
        break
    }alert('Es incorrecto!')
console.log(acierto);
}
console.log(acierto)
    if (!acierto){//aqui solo es verdadero cuando acierto es falso y si es falso es porque no se acerto el numero secreto
    alert(`El numero secreto es ${numeroSecreto}`)}



//SOLUCION PROPUESTA: 
/*const numeroAdivinacion = 7;
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert("¡Felicidades, acertaste! El número era ${numeroAdivinacion}.");
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert("Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!");
}*/
/*const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert("¡Felicidades, acertaste! El número era ${numeroAdivinacion}.");
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert("Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!");
}*/
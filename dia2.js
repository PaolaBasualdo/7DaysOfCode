const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

alert(mensaje);

const opcion = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

while(true){ 
    if (opcion === "1"){
    alert(`¡Muy bien! Sigue estudiando y tendrás mucho éxito.` );
    break;
}else if (opcion === "2"){
    alert(`Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`)
    break;
}else {
    alert("Ingrese una opcion valida")   }}; 


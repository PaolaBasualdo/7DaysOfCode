/*Debe pedir al usuario responder 3 preguntas:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.

Al final, el sistema mostrará el mensaje:

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:


¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.


Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:


1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
alert(mensaje);
const opcion = propmt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
while(true){ 
    if (opcion === 1){
    alert(`¡Muy bien! Sigue estudiando y tendrás mucho éxito.` );
    break
}else if (opcion === 2){
    alert(`Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`)
    break
}else {
 alert("Ingrese una opcion valida")   }}; 

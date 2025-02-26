# 7DaysOfCode
# Dia 1
Problemas con los tipos de variables al comparar los valores de dos variables entre sí. 
En lenguajes de programación compilados, como Java y C#, este problema se detecta en tiempo de compilación, y tienes un aviso claro del error mientras desarrollas el código.
En JavaScript, estos errores pasan desapercibidos, ya que el código no pasa por un compilador. Es decir, los errores solo aparecen en tiempo de ejecución.
La parte más confusa para quienes están comenzando a aprender lógica con JavaScript es la operación de igualdad entre valores. Dependiendo de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc.

## Igualdad (==) e Igualdad Esticta (===)

 El operador !== significa "no estrictamente igual", lo que implica que la condición es verdadera si los valores son diferentes o si los tipos son diferentes.

Dicho de otra forma:
a !== b
es true si:

a y b tienen diferentes valores, o
a y b tienen diferentes tipos
Ahora, analicemos el caso del ejercicio:

numeroTreinta !== stringTreinta
Donde:

let numeroTreinta = 30;     // tipo number
let stringTreinta = '30';   // tipo string

📌 Paso 1: Comparar valores:
30 y '30' tienen el mismo valor en comparación no estricta (==).

📌 Paso 2: Comparar tipos:
30 es un number y '30' es un string → los tipos son diferentes.

📌 Paso 3: Evaluar !==
Como los tipos son diferentes, la condición numeroTreinta !== stringTreinta es true.

Conclusión:
✅ La condición numeroTreinta !== stringTreinta es verdadera, porque los tipos son distintos, aunque los valores sean iguales.

# Dia 2

Debe pedir al usuario responder 3 preguntas:

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

 

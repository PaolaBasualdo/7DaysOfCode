/*Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos de tu Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. Todos estos sitios utilizan listas para mostrar información de una manera simple y fácil de entender.

 

Además, puedes aprovechar las listas para hacer filtros, ordenaciones y otras funcionalidades muy útiles.

 

En este punto, ya debes haber notado que trabajar con estas colecciones es algo que necesitarás dominar, ¿verdad?

 

Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".

 

A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

 

Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

 

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

 

Si añades a tu lista:

banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

 

El programa debería imprimir, por ejemplo:

 

Lista de compras:

Frutas: banana, tomate, manzana, uva, aguacate

Lácteos: leche vegetal, leche de vaca, leche en polvo

Congelados: 

Dulces: chicle y gominola

 CONSEJO 

Existe un objeto dentro del lenguaje Javascript que se usa justamente para crear listas de elementos, llamado Array. ¡Úsalo y abusa de él!

*/
let frutas = [];
let vegetales = [];
let almacen = [];
let productosFrescos = [];
let higienePersonal = [];
let limpieza = [];
let producto;
let categoria;

while(true){
    let agregar = prompt('Desea agregar un producto a la Lista de Compras? Si - No : ').toLowerCase(); 
    if (agregar === 'no'){
        alert(`Lista de Compras:\n Frutas: ${frutas.join(', ')}\n Vegetales: ${vegetales.join(', ')}\n Almacen: ${almacen.join(', ')}\n Productos Frescos: ${productosFrescos.join(', ')}\n Higiene Personal: ${higienePersonal.join(', ')}\n Limpieza: ${limpieza.join(', ')} `)
        break
    }else if (agregar === 'si'){
        producto = prompt('Que producto desea agregar?: ').toLowerCase();
        categoria = prompt('En que categoria esta el producto?  1-Frutas\n 2-Vegetales\n 3-Almacen\n 4-Productos Frescos\n 5-Higiene Personal\n 6-Limpieza')
        switch(categoria){
            case ('1'): 
                frutas.push(producto);
                break;
            case ('2'): 
                vegetales.push(producto);
                break;
            case ('3'): 
                almacen.push(producto);
                break;
            case ('4'): 
                productosFrescos.push(producto);
                break;
            case ('5'): 
                higienePersonal.push(producto);
                break;
            case ('6'): 
                limpieza.push(producto);
                break;
            default:
                alert('Opción no válida');
                break;
        } 
    }else{
        alert('Elija una opcion valida')
    }
}

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
//SOLUCION PROPUESTA
/*let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    while (agregarMas != "sí" && agregarMas != "no") {  //mientras el texto leído sea diferente de "sí" y de "no", mostrar que no fue reconocido y preguntar nuevamente
	alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  //si el texto leído es "no", salir del while
        break;
    }
	
    comida = prompt("¿Qué comida deseas agregar?");
    categoria = prompt("¿En qué categoria encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'lacteos'){
        lacteos.push(comida);
    } else if (categoria === 'dulces'){
        dulces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Esa categoria no está predefinida.")
    }
}
alert("Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}");*/

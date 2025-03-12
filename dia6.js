while(true){
    let agregar = prompt('Desea agregar un producto a la Lista de Compras? Si - No - Eliminar: ').toLowerCase(); 
    if (agregar === 'no'){
        alert(`${listaDeCompras()}`)
        break
    }else if (agregar === 'si'){
        producto = prompt('Que producto desea agregar?: ').toLowerCase();
        categoria = prompt('En que categoria esta el producto?  1-Frutas\n 2-Vegetales\n 3-Almacen\n 4-Productos Frescos\n 5-Higiene Personal\n 6-Limpieza')
        switch(categoria){
            case '1': 
                frutas.push(producto);
                break;
            case '2': 
                vegetales.push(producto);
                break;
            case '3': 
                almacen.push(producto);
                break;
            case '4': 
                productosFrescos.push(producto);
                break;
            case '5': 
                higienePersonal.push(producto);
                break;
            case '6': 
                limpieza.push(producto);
                break;
            default:
                alert('Opción no válida');
                break;
        } 
    }else if (agregar === 'eliminar'){
        alert(`${listaDeCompras()}`)
        eliminado = prompt('Cual de ellos desea eliminar?: ').toLowerCase();
        let encontrado = false;
        listas.forEach((lista) =>{
                if(lista.includes(eliminado)){
                    let indice = lista.indexOf(eliminado);
                    lista.splice(indice, 1)
                    alert(`${eliminado} fue eliminado`)
                    encontrado = true
                }
               })
    if (!encontrado){
                alert('¡No fue posible encontrar el elemento en la lista!')
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
let eliminar = "";

let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí', 'no' o 'eliminar'.");
    }
	
    while (agregarMas != "sí" && agregarMas != "no" && agregarMas != "eliminar") {  //mientras el texto leído sea diferente de "sí", "no" y "eliminar", mostrar que no fue reconocido y preguntar nuevamente
	alert(`¡Operación no reconocida!`);
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  //si el texto leído es "no", salir del while
	break;
    }
	
    if(agregarMas === "sí"){
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
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
    } else if(agregarMas === "eliminar"){
	if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){  //si la lista está vacía (tratamiento de bug, en caso de que la persona escriba "eliminar" incluso cuando solo se muestren las opciones "sí" y "no")
		alert(`¡La lista está vacía!`);
	} else {  //si la lista no está vacía
		eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
		if(frutas.indexOf(eliminar) != -1){
			frutas.splice(frutas.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if(lacteos.indexOf(eliminar) != -1){
			lacteos.splice(lacteos.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (dulces.indexOf(eliminar) != -1){
			dulces.splice(dulces.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (congelados.indexOf(eliminar) != -1){
			congelados.splice(congelados.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else {
			alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);*/
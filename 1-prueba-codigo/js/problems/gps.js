/*
	¡El GPS se ha roto y tenemos que llegar a un sitio!

	Por suerte, tienes un mapa y tu algoritmo sigue intacto. Eso sí, tu mapa es
	un poco	extraño: todas las intersecciones están etiquetadas con números enteros
	diferentes y las  carreteras que las conectan están etiquetadas con el tiempo
	que se tarda en recorrerlas expresado en minutos.

	Te encuentras en la intersección etiquetada como "start" y tu destino es la
	interescción etiquetada como "finish".

	Dispondrás del número total de intersecciones y un array de carreteras, cada
	una de ellas con las propiedades: "from", "to" (las interesecciones están
	etiquetadas con números enteros menores que el número de intersecciones) y
	"drivingTime". Las carreteras sólo pueden ser usadas para ir desde "from" a
	"to". No hay carreteras de doble sentido.

	Completa la función para que devuelva un array de intersecciones de la ruta
	más rápida desde "start" hasta "finish" (ambas incluidas).

	Si hay vairas rutas iguales, coge cualquiera. Si no hay rutas, devuelve null.

	Ejemplo:

	var roads = [
	    {from: 0, to: 1, drivingTime: 5},
	    {from: 0, to: 2, drivingTime: 10},
	    {from: 1, to: 2, drivingTime: 10},
	    {from: 1, to: 3, drivingTime: 2},
	    {from: 2, to: 3, drivingTime: 2},
	    {from: 2, to: 4, drivingTime: 5},
	    {from: 3, to: 2, drivingTime: 2},
	    {from: 3, to: 4, drivingTime: 10}
	];
	navigate(5, roads, 0, 4);
	// devolvería [0, 1, 3, 2, 4]. Tiempo más rápido is 5 + 2 + 2 + 5 = 14 minutes

*/
const _get_near_path = (start, path, roads)=>{
	let time = 0
	let near;
	for(const road of roads){
		if(road.from == start && !path.includes(road.to)){
			if(time == 0 || time>road.drivingTime){
				near = road.to;
				time = road.drivingTime;
			}
		}
	}
	return {near, time};
}
export default function navigate(numberOfIntersections, roads, start, finish) {
	if(start == finish) return null;
	const path = [];
	const arr_time = [];
	let totalTime = 0;
	path.push(start);
	let response;
	for(let i=0;i<numberOfIntersections-1;i++){
		response = _get_near_path(start, path, roads);
		totalTime = totalTime + response.time;
		path.push(response.near);
		arr_time.push(response.time);
		start = response.near;
	}
	if(response.near != finish) return null;
	if(path.length != numberOfIntersections) return null;

	return `[${path}]. Tiempo más rápido is ${arr_time.join(' + ')} = ${totalTime} minutes`;
}
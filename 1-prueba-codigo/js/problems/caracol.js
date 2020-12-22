/*
		Dado un array nxn, devuelve los elementos ordenados de fuera hacia dentro
	en espiral en el sentido de las agujas del reloj.

	Ejemplo:
	array = [[1,2,3],
			 [4,5,6],
			 [7,8,9]]
	snail(array) #=> [1,2,3,6,9,8,7,4,5]

	Nota: El objetivo NO es ordenar los elementos de menor a mayor, sino recorrer
	la matriz en espiral.
	Nota: La matriz 0x0 se representa como [[]]
*/

export default function snail(array) {
	const snail = [];
	let max = array[0].length;
	let pos1 = 0;
	let pos2 = 0;
	let min = 0;
	const cardinal = max * max;
	max--;
	if (cardinal) {
		while (snail.length < cardinal) {
			snail.push(array[pos1][pos2]);
			if (pos2 == min && pos1 - pos2 == 1) {
				max = max - 1;
				min++;
			}
			if (pos1 == min && pos2 != max) {
				pos2++;
				continue;
			}
			if (pos2 == min && pos1 > 0) {
				pos1--;
				continue;
			}
			if (pos1 == max) {
				pos2--;
				continue;
			}
			if (pos2 == max) {
				pos1++;
				continue;
			}
		}
	}
	return snail;
}
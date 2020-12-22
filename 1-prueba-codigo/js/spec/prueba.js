import caracol from "../problems/caracol";
import GPS from "../problems/gps";

describe('prueba', function () {
	it('test framework setup correct', function () {
		expect(true).toBe(true);
	});

	describe('caracol', function () {
		const snails = [
			{ matrix: [[]], expected: [] },
			{ matrix: [[7]], expected: [7] },
			{ matrix: [['x', 'y'], ['z', 't']], expected: [ 'x', 'y', 't', 'z' ] },
			{ matrix: [[1,2,3],[4,5,6],[7,8,9]], expected: [1,2,3,6,9,8,7,4,5] },
			{ matrix: [['a','b','c','d'],['h','i','j','k'],['l','m','n','o'],['p','q','r','t']], expected: ['a','b','c','d','k','o','t','r','q','p','l','h','i','j','n','m'] },
		];

		for(const snail of snails){
			const dim = snail.matrix[0].length;
			it(`Matrix dim: ${dim}`, function () {
				const result = caracol(snail.matrix);
				expect(result).toEqual(snail.expected);
			});
		}
	});

	describe('GPS', function () {
		const roads = [
			{from: 0, to: 1, drivingTime: 5},
			{from: 0, to: 2, drivingTime: 10},
			{from: 1, to: 2, drivingTime: 10},
			{from: 1, to: 3, drivingTime: 2},
			{from: 2, to: 3, drivingTime: 2},
			{from: 2, to: 4, drivingTime: 5},
			{from: 3, to: 2, drivingTime: 2},
			{from: 3, to: 4, drivingTime: 10}
		];
		const journeys = [
			{route:{intersections:0, start:0, finish:0}, expected: null},
			{route:{intersections:2, start:0, finish:2}, expected: null},
			{route:{intersections:4, start:0, finish:2}, expected: '[0,1,3,2]. Tiempo más rápido is 5 + 2 + 2 = 9 minutes'},
			{route:{intersections:2, start:0, finish:1}, expected: '[0,1]. Tiempo más rápido is 5 = 5 minutes'},
			{route:{intersections:2, start:1, finish:3}, expected: '[1,3]. Tiempo más rápido is 2 = 2 minutes'},
			{route:{intersections:5, start:0, finish:4}, expected: '[0,1,3,2,4]. Tiempo más rápido is 5 + 2 + 2 + 5 = 14 minutes'}
		];
		for(const journey of journeys){
			it(`Route ${journey.route.start} to ${journey.route.finish} with ${journey.route.intersections} intersections`, function () {
				const result = GPS(journey.route.intersections, roads, journey.route.start, journey.route.finish);
				expect(result).toBe(journey.expected);
			});
		}
	});
});
 
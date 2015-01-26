/*global describe, it */
'use strict';

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
//144, 233, 377, 610, 987, 1597, 2584, 4181,
//6765, 10946, 17711, 28657, 46368, 75025,
//121393, 196418, 317811

(function () {
	describe('Return a boolean indicating if a particular number is part of a fibonacci sequence', function () {
		it('should count up to 21 returning a boolean to indicate if the number is in the fibonacci sequence', function () {
			expect(test3.fibonacciSequence(0)).toEqual(true);
			expect(test3.fibonacciSequence(1)).toEqual(true);
			expect(test3.fibonacciSequence(2)).toEqual(true);
			expect(test3.fibonacciSequence(3)).toEqual(true);
			expect(test3.fibonacciSequence(4)).toEqual(false);
			expect(test3.fibonacciSequence(5)).toEqual(true);
			expect(test3.fibonacciSequence(6)).toEqual(false);
			expect(test3.fibonacciSequence(7)).toEqual(false);
			expect(test3.fibonacciSequence(8)).toEqual(true);
			expect(test3.fibonacciSequence(9)).toEqual(false);
			expect(test3.fibonacciSequence(10)).toEqual(false);
			expect(test3.fibonacciSequence(11)).toEqual(false);
			expect(test3.fibonacciSequence(12)).toEqual(false);
			expect(test3.fibonacciSequence(13)).toEqual(true);
			expect(test3.fibonacciSequence(14)).toEqual(false);
			expect(test3.fibonacciSequence(15)).toEqual(false);
			expect(test3.fibonacciSequence(16)).toEqual(false);
			expect(test3.fibonacciSequence(17)).toEqual(false);
			expect(test3.fibonacciSequence(18)).toEqual(false);
			expect(test3.fibonacciSequence(19)).toEqual(false);
			expect(test3.fibonacciSequence(20)).toEqual(false);
			expect(test3.fibonacciSequence(21)).toEqual(true);
		});
	});
})();

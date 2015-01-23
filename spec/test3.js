/*global describe, it */
'use strict';

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
//144, 233, 377, 610, 987, 1597, 2584, 4181,
//6765, 10946, 17711, 28657, 46368, 75025,
//121393, 196418, 317811

(function () {
	describe('Return a boolean indicatin if a particular number is part of a fibonacci sequence', function () {
		it('should count up to 21 returning a boolean to indicate if the number is in the fibonacci sequence', function () {
			expect(fibonacciSequence(0)).toBe(true);
			expect(fibonacciSequence(1)).toBe(true);
			expect(fibonacciSequence(2)).toBe(true);
			expect(fibonacciSequence(3)).toBe(true);
			expect(fibonacciSequence(4)).toBe(false);
		});
	});
})();

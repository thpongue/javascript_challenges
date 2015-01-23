/*global describe, it */
'use strict';

(function () {
	describe('Return a boolean indicatin if a particular number is part of a fibonacci sequence', function () {
		it('should count up to 20 returning a boolean to indicate if the number is in the fibonacci sequence', function () {
			expect(fibonacciSequence(0)).toBe(true);
//			expect(fibonacciSequence(1)).toBe(true);
//			expect(fibonacciSequence(2)).toBe(false);
		});
	});
})();

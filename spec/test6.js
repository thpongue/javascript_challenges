
/*global describe, it */
'use strict';

(function () {
	describe('create a function for multiplying 2 numbers, then pass this into a currying function with its first argument. Return a new function which requires the second argument and return the value of the multiplying function', function () {
		it('should pass!', function () {
			function addEmUp(x,y)
			{
				return x+y;
			}
			console.log(test6);
			expect(test6.curry(addEmUp,5)(6)).toEqual(11);
		});
	});
})();

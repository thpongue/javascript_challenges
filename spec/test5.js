/*global describe, it */
'use strict';

(function () {
	describe('create a function that takes a function for adding then makes it callable with 2 invocations', function () {
		it('should pass!', function () {
			function addEmUp(x,y)
			{
				return x+y;
			}
			expect(test5.foo(addEmUp)(3)(7)).toEqual(10);
		});
	});
})();

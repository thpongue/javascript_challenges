/*global describe, it */
'use strict';

(function () {
	describe('Take an integer size and return an array of that size where each element in that array is a function that returns the index of that function in the array.', function () {
		describe('attempt 1', function () {
			it('should pass!', function () {
				expect(test1.foo(1000)[0]()).toEqual(0);
				expect(test1.foo(1000)[42]()).toEqual(42);
				expect(test1.foo(1000)[1000]()).toEqual(1000);
			});
		});
		describe('attempt 2', function () {
			it('should pass!', function () {
				expect(test1.bar(1000)[0]()).toEqual(0);
				expect(test1.bar(1000)[42]()).toEqual(42);
				expect(test1.bar(1000)[42]()).toEqual(42);
			});
		});
		describe('attempt 3', function () {
			it('should pass!', function () {
				expect(test1.baz(1000)[42]()).toEqual(42);
				expect(test1.baz(1000)[42]()).toEqual(42);
				expect(test1.baz(1000)[42]()).toEqual(42);
			});
		});
	});
})();

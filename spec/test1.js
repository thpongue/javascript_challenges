/*global describe, it */
'use strict';

(function () {
	describe('find three ways make this work', function () {
		describe('attempt 1', function () {
			it('should pass!', function () {
				expect(foo(1000)[42]()).toEqual(42);
			});
		});
		describe('attempt 2', function () {
			it('should pass!', function () {
				expect(bar(1000)[42]()).toEqual(42);
			});
		});
		describe('attempt 3', function () {
			it('should pass!', function () {
				expect(baz(1000)[42]()).toEqual(42);
			});
		});
	});
})();

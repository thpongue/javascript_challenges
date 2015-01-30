/*global describe, it */
'use strict';

(function () {
	describe('Create a bidirectional linked list with a fluent interface. Populate with arbitrary data (anything is fine) then reverse it. Try 2 different implementations', function () {
	
		describe('attempt 1', function () {
			it('should pass!', function () {
				expect(test4.linkedList.add("one").add("two").add("three").add("four").add("five").reverse()).toEqual(new LinkedList().add("five").add("four").add("three").add("two").add("one"));
			});
		});

	});
})();

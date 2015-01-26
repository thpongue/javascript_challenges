/*global describe, it */
'use strict';

(function () {
describe('Implement FizzBuzz - I\'ve always wanted to do this! - any number divisible by three or featuring a three is a fizz, ditto for 7 is a buzz. If both then fizzbuzz', function () {
	it('should count up to the first instance of fizzbuzz', function () {
			expect(test2.getValue(1)).toEqual('1');
			expect(test2.getValue(2)).toEqual('2');
			expect(test2.getValue(3)).toEqual('fizz');
			expect(test2.getValue(4)).toEqual('4');
			expect(test2.getValue(5)).toEqual('5');
			expect(test2.getValue(6)).toEqual('fizz');
			expect(test2.getValue(7)).toEqual('buzz');
			expect(test2.getValue(8)).toEqual('8');
			expect(test2.getValue(9)).toEqual('fizz');
			expect(test2.getValue(10)).toEqual('10');
			expect(test2.getValue(11)).toEqual('11');
			expect(test2.getValue(12)).toEqual('fizz');
			expect(test2.getValue(13)).toEqual('fizz');
			expect(test2.getValue(14)).toEqual('buzz');
			expect(test2.getValue(15)).toEqual('fizz');
			expect(test2.getValue(16)).toEqual('16');
			expect(test2.getValue(17)).toEqual('buzz');
			expect(test2.getValue(18)).toEqual('fizz');
			expect(test2.getValue(19)).toEqual('19');
			expect(test2.getValue(20)).toEqual('20');
			expect(test2.getValue(21)).toEqual('fizzbuzz');
		});
	});
})();

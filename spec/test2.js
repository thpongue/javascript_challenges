/*global describe, it */
'use strict';

(function () {
describe('Implement FizzBuzz - I\'ve always wanted to do this! - any number divisible by three or featuring a three is a fizz, ditto for 7 is a buzz. If both then fizzbuzz', function () {
	it('should count up to the first instance of fizzbuzz', function () {
			expect(fizzBuzz(1)).toEqual('1');
			expect(fizzBuzz(2)).toEqual('2');
			expect(fizzBuzz(3)).toEqual('fizz');
			expect(fizzBuzz(4)).toEqual('4');
			expect(fizzBuzz(5)).toEqual('5');
			expect(fizzBuzz(6)).toEqual('fizz');
			expect(fizzBuzz(7)).toEqual('buzz');
			expect(fizzBuzz(8)).toEqual('8');
			expect(fizzBuzz(9)).toEqual('fizz');
			expect(fizzBuzz(10)).toEqual('10');
			expect(fizzBuzz(11)).toEqual('11');
			expect(fizzBuzz(12)).toEqual('fizz');
			expect(fizzBuzz(13)).toEqual('fizz');
			expect(fizzBuzz(14)).toEqual('buzz');
			expect(fizzBuzz(15)).toEqual('fizz');
			expect(fizzBuzz(16)).toEqual('16');
			expect(fizzBuzz(17)).toEqual('buzz');
			expect(fizzBuzz(18)).toEqual('fizz');
			expect(fizzBuzz(19)).toEqual('19');
			expect(fizzBuzz(20)).toEqual('20');
			expect(fizzBuzz(21)).toEqual('fizzbuzz');
		});
	});
})();

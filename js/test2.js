var test2 = (new function() {
	return {
		
		getValue: function(val) {

			function isFizz() {
				return isDivisibleBy(3) || includesNumber(3);
			}

			function isBuzz() {
				return isDivisibleBy(7) || includesNumber(7);
			}

			function isDivisibleBy(divisibleBy) {
				return (val % divisibleBy === 0); 
			}

			function includesNumber(includesNumber) {
				return val.toString().indexOf(includesNumber)>-1; 
			}

			var ret = '';

			if (isFizz()) {
				ret = 'fizz';
			}

			if (isBuzz()) {
				ret += 'buzz';
			}

			if (!ret) {
				ret = val.toString();
			}

			return ret;
		}
	}
}());

var test3 = (new function() {
	function fibonacciRecursive(val,current,previous) {
		return val<previous ? false : val==previous ? true : fibonacciRecursive(val,current+previous,current);
	}
	return {
		fibonacciSequence: function(val) {
			return fibonacciRecursive(val,1,0);	
		}
	}
}());

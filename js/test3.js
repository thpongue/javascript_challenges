var test3 = (new function() {
	this.fibonacciSequence = function(val) {
		return fibonacciRecursive(val,1,0);	
	}

	function fibonacciRecursive(val,current,previous) {
		return val<previous ? false : val==previous ? true : fibonacciRecursive(val,current+previous,current);
	}
}());

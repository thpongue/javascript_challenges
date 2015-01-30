var test6 = (new function() {
	this.curry = function(func, arg1) {
		return function(arg2) {
			return func(arg1,arg2);
		}
	}
}());

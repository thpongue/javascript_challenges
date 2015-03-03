var test5 = (new function() {
	return {
		foo: function(func) {
			return function(x) {
				return function(y) {
					return func(x,y);
				}
			}
		}
	}
}());

var test1 = (new function() {
	return {
		foo: function(size) {
			var ret = [];
			for (var i=0; i<=size; i++)
			{
				ret.push(new function(val){
					var ret = val;
					return function(){
						return ret; 
					};
				}(i));
			}
			return ret;
		},

		bar: function(size) {
			var ret = [];
			for (var i=0; i<=size; i++) {
				ret.push(function(){
					return this["val"];
				}.bind({val:i}));
			}
			return ret;
		},

		baz: function(size) {
			var ret = [];
			for (var i=0; i<=size; i++) {
				ret.push(
						new Function("return function (){ return "+i+"}")()
						);	
			}
			return ret;
		}
	}
}());

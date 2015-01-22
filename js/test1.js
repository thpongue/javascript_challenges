function foo(size) {
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
}

function bar(size) {
	var ret = [];
	for (var i=0; i<=size; i++) {
		ret.push(function(){
			return this["val"];
		}.bind({val:i}));
	}
	return ret;
}

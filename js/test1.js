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

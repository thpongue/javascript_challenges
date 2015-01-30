var test4 = (new function() {
	function linkedList() {
		var val;
		this.reverse=function() {
			return this;
		}
		this.add=function(valParam) {
			if (!val)
			{
				val=valParam;
			}
			return this;
		}
	}
}());

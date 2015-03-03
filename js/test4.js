var test4 = (new function() {
	return {
		linkedList: function() {
			function ll() {
				var that = this;
				this.val=null;
				this.next=null;
				this.reverse = function(){
					return that;
				}
				this.add = function(val){
					var ret = new ll();
					ret.val=val;
					that.next=ret;
					return ret;
				}
			};
			return new ll();
		}
	}
}());

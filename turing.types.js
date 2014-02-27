turing.types = {
	number : function(object){
		return (object === +object) || (toString.call(object) === '[object Number]');
	}
}

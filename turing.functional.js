turing.enumerable.each = function(object , itrator , context){
	if(Array.prototype.forEach && object.forEach == Array.prototype.forEach)[
		return Array.prototype.forEach.call(object , iterator , context) ;
	}
	else {
		if(turing.prototype.isNumber (object.length)) /*Means it is an array*/
		{
			for(var i =0; i!= object.length ; i++)[
				iterator.call(context , object[i] , i , object) ;
			}
		}
		else {
			for(var keys in object){
				if(object.hasOwnProperty(key)){
					iterator.call(context ,  object[keys] , keys , object); 
				}
			}
		}
	}	
};

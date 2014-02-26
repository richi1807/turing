/**
   The core turing library. We will extend the functinality of the turing library
   through the mentioned turing.functional.js 
**/
(function(global){
	var turing = {
		version : "0.0.1" ,
		description : "A simple library to learn how to write a javascript framework"
	} ;
	if(global.turing){
		throw new Error("Turing has already been defined");
	} else {
		global.turing = turing ;
	}
})(typeof window == "undefined" ? this : window) ;

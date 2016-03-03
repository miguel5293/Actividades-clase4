window.onload = function()
{

	/*
    ------------------------------------------------------------------------
    Programa 2: Conversión de Grados centígrados a Grados Fahrenheit,
    Grados centígrados a Grados Kelvin
    ------------------------------------------------------------------------
   */

var opera = {

				 gr : 37,
				 
				 
};
var convertir = function (gradoc){
    
    farenheit=gradoc*2-gradoc/5;          
    return farenheit=farenheit+32;;
}

var convertir2 = function (gradoc){
                
    return gradoc*273.15;;
}

console.log("Grados centigrados:", opera.gr);
console.log("conversion de grados centigrados a farenheit",convertir(opera.gr));
console.log("conversion de grados centigrados a Kelvin",convertir2(opera.gr));
	

};
window.onload = function()
{

	/*
    ------------------------------------------------------------------------
    Programa 1: Conversión de galones a litros
    ------------------------------------------------------------------------
    */

/*var galon=0;
var litro= 3.7854;
var resultado;

console.log("ingrese numero de galones",galon);
console.log("respuesta:", galon*litro);*/
//console.log("ingrese numero de galones",galon);
var opera = {

				 galon : 2,
				 litro : 3.7854
				 
};
var convertir = function (galones,litros){

	return galones*litros;
}

console.log(convertir(opera.galon,opera.litro));

};
window.onload = function()
{

	/*
    ------------------------------------------------------------------------
    Programa 3: peso efectivo en la luna
    ------------------------------------------------------------------------
    */

var resultado=0;
var opera = {

				 pesopersona : 69,
				 vgravedad : 9.8,
                 grluna : 1.6
				 
};
var convertir = function (ppersona,vgr,gluna){

	return (ppersona*gluna)/vgr;
}

console.log("mi peso  en la tierra es de ",opera.pesopersona);
console.log("mi peso en la luna es de:",convertir(opera.pesopersona,opera.vgravedad,opera.grluna));
	
};
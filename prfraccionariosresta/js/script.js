window.onload = function()
{

	/*
    ------------------------------------------------------------------------
    Programa 4: fraccionarios
    ------------------------------------------------------------------------
    */



var fr1 = "1/5";
var fr2 = "2/5";
var ptuno = fr1.split("/");
var ptdos = fr2.split("/");

var denominador = ptuno [1] * ptdos[1];
var numerador = (ptuno [1] * ptdos[0]) - (ptuno [0] * ptdos[1]);
var resultado= numerador + "/" + denominador;

/*var simplificaFraccionario = function(val1)
   	{
   		var parteVal = val.split("/");
   		var numerador = Number(parteVal[0]);
   		var denominador = Number(parteVal[1]);
   		var maximoComunDivisor = function(a, b)
   		{
   			return b ? maximoComunDivisor(b, a%b) : a;
   		};
   		maximoComunDivisor = maximoComunDivisor(numerador,denominador);
        numerador /= maximoComunDivisor;
        denominador /= maximoComunDivisor;
        var respuesta = numerador + "/" + denominador;
        if(denominador === 1)
        {
            respuesta = numerador;
        }
   		return respuesta;
   	};

simplificaFraccionario(numerador);*/
console.log("el resultado de la resta de 1/5 + 2/5 es:", resultado);

};

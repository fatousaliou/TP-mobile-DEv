function Calculer() {
	var poids = document.getElementById('poids');
	var taille = document.getElementById('taille');

	var imc = (poids.value/(taille.value * taille.value));

	if (imc<=18.5)
	{
		alert("IMC="+Math.ceil(imc)+ " et vous etes en situation d'insuffisance pondérale(maigreur)");
	}
	else if (imc>18.5 && imc<=25)  
	{
		alert("IMC="+Math.ceil(imc)+ " et vous etes en situationde Corpulence normale" );
	}
	else if (imc>25 && imc<=30) 
	{
		alert("IMC="+Math.ceil(imc)+ " et vous etes en situation de surpoids");
	}
	else if (imc>30 && imc<=35) 
	{
		alert("IMC="+Math.ceil(imc)+ " et vous etes en situation d'obésité modérée");
	}
	else if (imc>35 && imc<=40)
	{

		alert("IMC="+Math.ceil(imc)+" et vous etes en situation d'obésité s'évére");
	}
	else {

		alert("IMC="+Math.ceil(imc)+" et vous etes en situation d'obésité morbide ou massive");
	}

}
	
var 	opt_1 = new Array ( "Seleccione","UNIDAD 8 - LOS HORNOS","UNIDAD 9 - LA PLATA","UNIDAD 10 - MELCHOR ROMERO","OTRO");
		opt_2 = new Array ( "Seleccione","UNIDAD 28 - MAGDALENA"," UNIDAD 35 - MAGDALENA","UNIDAD 36 -MAGDALENA ","OTRO");
		opt_3 = new Array ( "Seleccione","UNIDAD 1 - LISANDRO OLMOS","UNIDAD 22 - LISANDRO OLMOS","UNIDAD 25 - LISANDRO OLMOS","OTRO" );
		
function cambiarUnidad() {
	var complejo;
	complejo = document.getElementById("complejo").value;
	if (complejo == "") {
		complejoOpt = "0"
		}
		if (complejo == "La plata") {
			complejoOpt = "1"
		}
		if (complejo == "Magdalena") {
			complejoOpt = "2"
		}
		if (complejo == "Lisandro Olmos") {
			complejoOpt = "3"
		}	
	if (complejoOpt!=0){
		//iguala mis_opt al array opt_X siendo X una variable cambiante
		mis_opt=window['opt_' + complejoOpt]
		//calculo el numero de filtros. length: Guarda la cantidad de opciones del campo select. 
		//Cantidad de etiquetas <OPTION>, en este caso, la cantidad de etiquetas <option> de mis_opt ()
		num_opt=mis_opt.length;
		//marco el numero de opt en el select
		document.getElementById('unidad').length = num_opt;

		//para cada opt del array, lo posiciono en su select
		for (i=0; i<num_opt ; i++){
			document.getElementById('unidad').options[i].value=mis_opt[i];
			
			if (mis_opt[i] == "Seleccione"){
				document.getElementById('unidad').options[i].value= ""
				document.getElementById('unidad').options[i].text=mis_opt[i];
			}else{
				document.getElementById('unidad').options[i].value=mis_opt[i];
				document.getElementById('unidad').options[i].text=mis_opt[i];
			}
		}
	}else {
			//lenght=1, le deja solo una opcion disponible, en este caso unicamente "Seleccione", 
			// evitando opciones incorrectas, aunque con el required no deja hacerlo
			document.getElementById('unidad').length = 1;
			document.getElementById('unidad').options[0].value="";
			document.getElementById('unidad').options[0].text="Seleccione complejo";
		}
		//Posiciona el option de unidad en 0, en este caso, value="-"
			document.getElementById('unidad').options[0].selected = true;
	}
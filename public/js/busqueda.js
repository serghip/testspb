var opt_1 = new Array ("-","Enero","Febrero");
	opt_2 = new Array ("-","Lunes","Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo");
	opt_3 = new Array ("-","12 A.M.","01 A.M.","02 A.M.", "03 A.M.", "etc");
	opt_4 = new Array ("-","La plata","Magdalena","Lisandro olmos");
	opt_5 = new Array ("-",);
	opt_6 = new Array ("-","Dolosa","Accidente","Autolesion");
	opt_7 = new Array ("-",);
	opt_8 = new Array ("-","Agresor","Agredido","Agresor y agredido");
	opt_9 = new Array ("-","Agente","Interno","Otro");
	opt_10 = new Array ("-",);
	opt_11 = new Array ("-",);
	opt_12 = new Array ("-","Masculino","Femenino","Transgenero", "Otro");
	opt_13 = new Array ("-","18","19","20", "etc");


function cambiar(){
	// variable local distinta a la global
	var filtro;
	//toma valor de filtro
	filtro = document.getElementById('idfiltro').value;
	// opciones de inputs visibles o no
	if (document.getElementById('idfiltro').value == 1 ) {
		divmostrar = document.getElementById('idfecha');
		divmostrar.style.display= '';
		divmostrar = document.getElementById('idnombre');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idid');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idedad');
		divmostrar.style.display= 'none';
		divocultar = document.getElementById('idopcion');
		divocultar.style.display= 'none';
	}
	else if (document.getElementById('idfiltro').value  == 10 ) {
		divmostrar = document.getElementById('idfecha');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idnombre');
		divmostrar.style.display= '';
		divmostrar = document.getElementById('idid');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idedad');
		divmostrar.style.display= 'none';
		divocultar = document.getElementById('idopcion');
		divocultar.style.display= 'none';
	}
	else if (document.getElementById('idfiltro').value  == 11 ) {
		divmostrar = document.getElementById('idfecha');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idnombre');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idid');
		divmostrar.style.display= '';
		divmostrar = document.getElementById('idedad');
		divmostrar.style.display= 'none';
		divocultar = document.getElementById('idopcion');
		divocultar.style.display= 'none';
	}
	else if (document.getElementById('idfiltro').value  == 13 ) {
		divmostrar = document.getElementById('idfecha');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idnombre');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idid');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idedad');
		divmostrar.style.display= '';
		divocultar = document.getElementById('idopcion');
		divocultar.style.display= 'none';
	}
	else {
		divmostrar = document.getElementById('idfecha');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idnombre');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idid');
		divmostrar.style.display= 'none';
		divmostrar = document.getElementById('idedad');
		divmostrar.style.display= 'none';
		divocultar = document.getElementById('idopcion');
		divocultar.style.display= '';
	}
	
	//verifico si filtro1 tiene un valor definido
	if (filtro!=0){
		//iguala mis_opt al array opt_X siendo X una variable cambiante
		mis_opt=window['opt_' + filtro]
		//calculo el numero de filtros. length: Guarda la cantidad de opciones del campo select. Cantidad de etiquetas <OPTION>, 
		//en este caso, la cantidad de etiquetas <option> de mis_opt ()
		num_opt=mis_opt.length;
		//marco el numero de opt en el select
		document.getElementById('idopcion').length = num_opt;
		//para cada opt del array, lo posiciono en su select
		for (i=0; i<num_opt ; i++){
			document.getElementById('idopcion').options[i].value=mis_opt[i];
			document.getElementById('idopcion').options[i].text=mis_opt[i];
			}
	}else {
		// inicializa los valores en 0: lenght=1, evitando que aparezcan opciones de otro, una option con value y text = 0
			document.getElementById('idopcion').length = 1;
			document.getElementById('idopcion').options[0].value="";
			document.getElementById('idopcion').options[0].text="Seleccione";
			console.log(document.getElementById('idopcion').options[0].value)
		}
		//Posiciona el option de unidad en 0, en este caso, value="-"
			document.getElementById('idopcion').options[0].selected = true;
	}
	

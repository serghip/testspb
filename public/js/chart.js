//CALCULOS
//datos random
muerte2018 = 40;
    homicidio2018 = 15;
    suicidio2018 = 15;
    otras2018 = 10;
    aver2018 = 2;
    notrau2018 = 8;
    trau2018 = 30;
    campana2018 = 5;
    unidad12018 = 10;
    unidad222018 = 15;
    unidad92018 = 5;
    edad18a212018=7;
    edad22a342018=6;
    edad35a452018=8;
    edad35a452018=8;
    edad45a562018=4;
    edadmas672018=5;
    edadsindatos2018=2;
    año2018 = 40;

    muerte2019 = 60;
    homicidio2019 = 25;
    suicidio2019 = 25;
    otras2019 = 10;
    aver2019 = 3;
    notrau2019 = 7;
    trau2019 = 50;
    campana2019 = 10;
    unidad12019 = 15;
    unidad222019 = 30;
    unidad92019 = 5;
    edad18a212019=10;
    edad22a342019=13;
    edad35a452019=15;
    edad35a452019=10;
    edad45a562019=6;
    edadmas672019=4;
    edadsindatos2019=4;
    año2019 = 60;

    muerte2020 = 20;
    homicidio2020 = 5;
    suicidio2020 = 5;
    otras2020 = 10;
    aver2020 = 0;
    notrau2020 = 10;
    trau2020 = 10;
    campana2020 = 2;
    unidad12020 = 6;
    unidad222020 = 4;
    unidad92020 = 8;
    edad18a212020=3;
    edad22a342020=6;
    edad35a452020=4;
    edad35a452020=4;
    edad45a562020=1;
    edadmas672020=1;
    edadsindatos2020=1;
    año2020 = 20;

    muerte2021 = 40;
    homicidio2021 = 15;
    suicidio2021 = 15;
    otras2021 = 10;
    aver2021 = 2;
    notrau2021 = 8;
    trau2021 = 30;
    campana2021 = 5;
    unidad12021 = 10;
    unidad222021 = 15;
    unidad92021 = 5;
    edad18a212021=7;
    edad22a342021=6;
    edad35a452021=8;
    edad35a452021=8;
    edad45a562021=4;
    edadmas672021=5;
    edadsindatos2021=2;
    año2021 = 40;

//total
muertetotal= muerte2018+muerte2019+muerte2020+muerte2021;
homicidiototal= homicidio2018+homicidio2019+homicidio2020+homicidio2021;
suicidiototal= suicidio2018+suicidio2019+suicidio2020+suicidio2021;
otrastotal= otras2018+otras2019+otras2020+otras2021;
avertotal= aver2018+aver2019+aver2020+aver2021;
notrautotal=notrau2018+notrau2019+notrau2020+notrau2021;
trautotal=trau2018+trau2019+trau2020+trau2021;
campanatotal=campana2018+campana2019+campana2020+campana2021;
unidad1total=unidad12018+unidad12019+unidad12020+unidad12021;
unidad22total=unidad222018+unidad222019+unidad222020+unidad222021;
unidad9total=unidad92018+unidad92019+unidad92020+unidad92021;
edad18a21total=edad18a212018+edad18a212019+edad18a212020+edad18a212021;
edad22a34total=edad22a342018+edad22a342019+edad22a342020+edad22a342021;
edad35a45total=edad35a452018+edad35a452019+edad35a452020+edad35a452021;
edad45a56total=edad45a562018+edad45a562019+edad45a562020+edad45a562021;
edadmas67total=edadmas672018+edadmas672019+edadmas672020+edadmas672021;
edadsindatostotal=edadsindatos2018+edadsindatos2019+edadsindatos2020+edadsindatos2021;
año2018total=año2018+año2019+año2020+año2021;

//DATOS INICIALES
//GRAFICO PRIMERO
document.getElementById("muertenro").innerHTML = muertetotal;
document.getElementById("homicidionro").innerHTML = homicidiototal;
document.getElementById("suicidionro").innerHTML = suicidiototal;
document.getElementById("otranro").innerHTML = otrastotal;

//GRAFICO TERCERO
var ctx = document.getElementById('graficotercero').getContext('2d');
                    let width, height, gradient;
                    function getGradient(ctx, chartArea) {
                        const chartWidth = chartArea.right - chartArea.left;
                        const chartHeight = chartArea.bottom - chartArea.top;
                        if (gradient === null || width !== chartWidth || height !== chartHeight) {
                            // Create the gradient because this is either the first render
                            // or the size of the chart has changed
                            width = chartWidth;
                            height = chartHeight;
                            gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0.5, 'rgba(12, 150, 255)'); 
                            gradient.addColorStop(0, 'rgba(4,0,118)');  
                            gradient.addColorStop(1, 'rgba(131, 0, 0 )');
                        }

                        return gradient;
                    }
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['2018', '2019', '2020', '2021'],
                        datasets: [{
                                fillColor: gradient, // Put the gradient here as a fill color
                                strokeColor: "#ff6c23",
                                pointColor: "#fff",
                                pointStrokeColor: "#ff6c23",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "#ff6c23",
                                label: 'Evolucion de Muertes dentro del ambito del SPB',
                                data: [año2018, año2019, año2020, año2021],
                                borderWidth: 2,
                                borderColor: function (context) {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;

                                if (!chartArea) {
                                    // This case happens on initial chart load
                                    return null;
                                }
                                return getGradient(ctx, chartArea);
                                },
                            }]
                        }  ,
                    });
//GRAFICO CUARTO A
var ctx = document.getElementById("graficocuarto");
const labels = [
    'AVERIGUACION DE MUERTE',
    'NO TRAUMÁTICA',
    'TRAUMÁTICA',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Total acumulado por Tipos de Muertes',
      backgroundColor: [
          "rgb(163, 237, 241)", 
          "rgb(60, 198, 235)", 
          "rgb(3, 151, 191)"
        ],
      borderColor: 'rgb(81,209,246)',
      data: [avertotal, notrautotal, trautotal],
      borderWidth:1,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  const myChart4 = new Chart(
    document.getElementById('graficocuarto'),
    config
  );

//GRAFICO CUARTO B
document.getElementById("totalhomicidio").innerHTML = homicidiototal;
document.getElementById("totalsuicidio").innerHTML = suicidiototal;

//GRAFICO QUINTO
var ctx = document.getElementById('graficoquinto');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Alc. Campana', 'Unidad 1', 'Unidad 22', 'Unidad 9'],
                        datasets: [{
                            label: 'Acumulado por Establecimientos Penitenciarios',
                            data: [campanatotal, unidad1total, unidad22total, unidad9total],
                            backgroundColor: ["rgb(163, 237, 241)", "rgb(60, 198, 235)", "rgb(3, 151, 191)", "rgb(3, 114, 144)"],
                            borderWidth: 1,
                            }]
                        }  ,
                    });

//GRAFICO SEXTO
var ctx = document.getElementById('graficosexto');
            var myChart = new Chart(ctx, {
             type: 'bar',
             data: {
                labels: ['18 a 21 años', '22 a 34 años', '35 a 45 años', '45 a 56 años', 'mas de 67 años', 'S/D'],
                datasets: [{
                    label: 'Acumulado por genero y franja etaria',
                    data: [edad18a21total, edad22a34total, edad35a45total, edad45a56total, edadmas67total, edadsindatostotal],
                    backgroundColor: ["rgb(163, 237, 241)", "rgb(60, 198, 235)", "rgb(3, 151, 191)", "rgb(3, 114, 144)", "rgb(5, 86, 108)", "rgb(0, 60, 77 )"],
                    borderWidth: 1,
                    }]
                }  ,
            });

//comportamiento boton SELECCIONAR DESELECCIONAR
$(document).ready(function() {
  selected = true;
  
  $('#botonseleccionar').click(function() {
    if (selected) {
      $('#cajacheck input[type=checkbox]').prop("checked", false);
      $('#botonseleccionar').val('Seleccionar');
      console.log("deseleccionado todos")
      myChart4.data.datasets[0].data[0]="0";
      myChart4.data.datasets[0].data[1]="0";
      myChart4.data.datasets[0].data[2]="0";
      myChart4.update()
      selected2018 = false;
      selected2019 = false;
      selected2020 = false;
      selected2021 = false;
    } else {
      $('#cajacheck input[type=checkbox]').prop("checked", true);
      $('#botonseleccionar').val('Deseleccionar');
      console.log("seleccionado todos")
      myChart4.data.datasets[0].data[0]=avertotal;
      myChart4.data.datasets[0].data[1]=notrautotal;
      myChart4.data.datasets[0].data[2]=trautotal;
      myChart4.update()
      selected2018 = true;
      selected2019 = true;
      selected2020 = true;
      selected2021 = true;
    }
    selected = !selected;
  });

  $('#botonseleccionarB').click(function() {
    if (selected) {
      $('#cajacheckB input[type=checkbox]').prop("checked", true);
      $('#botonseleccionarB').val('Seleccionar');
      console.log("entra todos los tipos")
    } else {
      $('#cajacheckB input[type=checkbox]').prop("checked", false);
      $('#botonseleccionarB').val('Deseleccionar');
      console.log("sale todos los tipos")
    }
    selected = !selected;
  });
});

//Comportamientos CHECK AÑOS
$(document).ready(function() {
    
    $('#check2018').click(function() {
    if (selected2018) {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] - aver2018;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] - notrau2018;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] - trau2018;
        myChart4.update();
    }else {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] + aver2018;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] + notrau2018;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] + trau2018;
        myChart4.update();
    }
    selected2018 = !selected2018;
    if ( !selected2018){
        if (!selected2019 && !selected2020 && !selected2021){
            console.log("todos deseleccionados")
            $('#cajacheck input[type=checkbox]').prop("checked", false);
            $('#botonseleccionar').val('Seleccionar');
            selected = !selected;
        }
    if ( selected2018){
        if (selected2019 && selected2020 && selected2021){
            console.log("todos seleccionado")
            $('#cajacheck input[type=checkbox]').prop("checked", true);
            $('#botonseleccionar').val('Deseleccionar');
            selected = !selected;
        }
    }
    }
    })


$('#check2019').click(function() {
    if (selected2019) {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] - aver2019;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] - notrau2019;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] - trau2019;
        myChart4.update();
    }else {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] + aver2019;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] + notrau2019;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] + trau2019;
        myChart4.update();
    }
    selected2019 = !selected2019;
    if ( !selected2019){
        if (!selected2018 && !selected2020 && !selected2021){
            console.log("todos deseleccionados")
            $('#cajacheck input[type=checkbox]').prop("checked", false);
            $('#botonseleccionar').val('Seleccionar');
            selected = !selected;
        }
        if ( selected2019){
            if (selected2018 && selected2020 && selected2021){
                console.log("todos seleccionado")
                $('#cajacheck input[type=checkbox]').prop("checked", true);
                $('#botonseleccionar').val('Deseleccionar');
                selected = !selected;
            }
        }
    }
});
$('#check2020').click(function() {
    if (selected2020) {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] - aver2020;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] - notrau2020;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] - trau2020;
        myChart4.update();
    }else {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] + aver2020;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] + notrau2020;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] + trau2020;
        myChart4.update();
    }
    selected2020 = !selected2020;
    if ( !selected2020){
        if (!selected2018 && !selected2019 && !selected2021){
            console.log("todos deseleccionados")
            $('#cajacheck input[type=checkbox]').prop("checked", false);
            $('#botonseleccionar').val('Seleccionar');
            selected = !selected;
        }
        if ( selected2020){
            if (selected2018 && selected2019 && selected2021){
                console.log("todos seleccionado")
                $('#cajacheck input[type=checkbox]').prop("checked", true);
                $('#botonseleccionar').val('Deseleccionar');
                selected = !selected;
            }
        }
    }
})
$('#check2021').click(function() {
    if (selected2021) {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] - aver2021;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] - notrau2021;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] - trau2021;
        myChart4.update();
    }else {
        myChart4.data.datasets[0].data[0] = myChart4.data.datasets[0].data[0] + aver2021;
        myChart4.data.datasets[0].data[1] = myChart4.data.datasets[0].data[1] + notrau2021;
        myChart4.data.datasets[0].data[2] = myChart4.data.datasets[0].data[2] + trau2021;
        myChart4.update();
    }
    selected2021 = !selected2021;
    if ( !selected2021){
        if (!selected2018 && !selected2019 && !selected2020){
            console.log("todos deseleccionados")
            $('#cajacheck input[type=checkbox]').prop("checked", false);
            $('#botonseleccionar').val('Seleccionar');
            selected = !selected;
        }
        if ( selected2021){
            if (selected2018 && selected2019 && selected2020){
                console.log("todos seleccionado")
                $('#cajacheck input[type=checkbox]').prop("checked", true);
                $('#botonseleccionar').val('Deseleccionar');
                selected = !selected;
            }
        }
    }
})
});

//Comportamiento CHECK TIPOS    
$(document).ready(function() {
    selectedAveriguacion = true;
    selectedNoTraumatica = true;
    selectedTraumatica = true;
    $('#checkaveriguacion').click(function() {
    if (selectedAveriguacion) {
        console.log("entraAveriguacion")
    }else {
        console.log("sale")
    }
    selectedAveriguacion = !selectedAveriguacion;
})
$('#checknotraumatica').click(function() {
    if (selectedNoTraumatica) {
        console.log("entraNoTraumatica")
    }else {
        console.log("sale")
    }
    selectedNoTraumatica = !selectedNoTraumatica;
});
$('#checktraumatica').click(function() {
    if (selectedTraumatica) {
        console.log("entraTraumatica")
    }else {
        console.log("sale")
    }
    selectedTraumatica = !selectedTraumatica;
})
});
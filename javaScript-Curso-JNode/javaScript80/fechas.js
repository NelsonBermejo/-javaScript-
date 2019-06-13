//Manejo de fechas
var fecha = new Date();
var dia = fecha.getDay(); //dia de la semana
var diaMes = fecha.getDate();//dia del diaMes
var mes = fecha.getMonth();
var anio = fecha.getYear();

document.write("Hoy es el dia "+diaMes+
" del mes "+(mes+1)+" del año "+anio+" y es el dia "+
(dia+1)+"<br><br>");


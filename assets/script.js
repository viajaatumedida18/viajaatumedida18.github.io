var tasaToday = 248;
var pesos = 0;

$("#dia").html(tasaToday);

$("#userPesos").click(function(){
  pesos = $("#cambio").val();
  if($.isNumeric(pesos)){
    var total = pesos * tasaToday;
    $("#total").html("A la tasa de hoy son <strong>"+ total+ "</strong>" + " Bolívares");
  }
  else {
    $("#total").html("Ingrese un número para poder calcular y use '.' para los decimales.");
  }
});

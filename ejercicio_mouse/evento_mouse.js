document.getElementById("area_de_dibujo").addEventListener("mousedown", activa_desactiva);
var papel = document.getElementById("area_de_dibujo").getContext("2d");
var estado = "desactivado";

function dibujar_linea(color, x_inicial, y_inicial, x_final, y_final, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function activa_desactiva(){
  if (estado == "activado"){
    document.getElementById("area_de_dibujo").addEventListener("mousemove", dibujar_mouse);
    estado = "desactivado";
  }
  else if (estado == "desactivado"){
    document.getElementById("area_de_dibujo").removeEventListener("mousemove", dibujar_mouse);
    estado = "activado";
  }
}

function dibujar_mouse(evento){
  console.log(evento);
  var movimiento = 1;
  var colorcito = "red";
  var x = evento.layerX;
  var y = evento.laverY;

  dibujar_linea(colorcito, x, y, x + 1, y + 1, papel);

  // switch (evento.movementY){
  //   case mouse.UP:
  //     dibujar_linea(colorcito, x, y, x, y - movimiento, papel);
  //     y = y - movimiento;
  //   break;
  //
  //   case mouse.DOWN:
  //     dibujar_linea(colorcito, x, y, x, y + movimiento, papel);
  //     y = y + movimiento;
  //   break;
  // }
  //
  // switch (evento.movementX) {
  //   case mouse.LEFT:
  //     dibujar_linea(colorcito, x, y, x - movimiento, y, papel);
  //     x = x - movimiento;
  //   break;
  //
  //   case mouse.RIGHT:
  //   dibujar_linea(colorcito, x, y, x + movimiento, y, papel);
  //   x = x + movimiento;
  //   break;
  // }
}

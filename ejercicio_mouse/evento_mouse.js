var mouse = {
  UP: -1,
  DOWN: 1,
  LEFT: -1,
  RIGHT: 1
}

document.getElementById("area_de_dibujo").addEventListener("mousemove", dibujar_mouse);
document.getElementById("area_de_dibujo").addEventListener("mouseup", dibujar_mouse);
document.getElementById("area_de_dibujo").addEventListener("mousedown", dibujar_mouse);
var papel =  document.getElementById("area_de_dibujo").getContext("2d");
var x = 150;
var y = 150;

dibujar_linea("red", x-1, y-1, x+1, y+1, papel);

function dibujar_linea(color, x_inicial, y_inicial, x_final, y_final, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujar_mouse(evento){
  console.log(evento);
  var movimiento = 1;
  var colorcito = "red";

  switch (evento.movementY){
    case mouse.UP:
      dibujar_linea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;

    case mouse.DOWN:
      dibujar_linea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
  }

  switch (evento.movementX) {
    case mouse.LEFT:
      dibujar_linea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;

    case mouse.RIGHT:
    dibujar_linea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
  }
}

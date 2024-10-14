/*function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let i = 0; i < 10; i++) {
    circle(i * 40, height / 2, 20);
  }
}*/

let numCircles = 10; // Número de círculos por fila y columna
let circleSize; // Tamaño de los círculos

// Configuración inicial
function setup() {
  createCanvas(windowWidth, windowHeight);
  circleSize = width / numCircles; // Tamaño de los círculos basado en el ancho
  noStroke();
}

// Dibujar los círculos titilantes en un patrón de cuadrícula
function draw() {
  background(0); // Fondo negro

  // Usamos dos bucles for anidados para crear filas y columnas
  for (let i = 0; i < numCircles; i++) {
    for (let j = 0; j < numCircles; j++) {
      // Calcular la posición de cada círculo
      let x = i * circleSize + circleSize / 2;
      let y = j * circleSize + circleSize / 2;

      // Cambiar el color de forma intermitente usando la función sin() y frameCount
      let colorChange = map(
        sin(frameCount * 0.1 + (i + j) * 0.5),
        -1,
        1,
        0,
        255
      );
      fill(colorChange, 100, 255 - colorChange);

      // Dibujar el círculo
      ellipse(x, y, circleSize * 0.8, circleSize * 0.8); // Círculos más pequeños que el tamaño de la cuadrícula
    }
  }
}

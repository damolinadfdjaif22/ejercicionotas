// Crear valores para los exámenes
let nota1 = 13;
let nota2 = 11;
let trabajoFinal = 20;

// Calcular el promedio ponderado final
let promedio = (nota1 * 0.3) + (nota2 * 0.3) + (trabajoFinal * 0.4);

// Mostrar las notas y el resultado final
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Trabajo Final:", trabajoFinal);
console.log("Promedio final:", promedio.toFixed(2));

// Verificar el estado del estudiante
if (promedio >= 14) {
  console.log("Aprobado directamente");
} else if (promedio >= 10) {
  console.log("Debe ir a recuperación");
} else {
  console.log("No aprueba la materia");
}

function jugadaComputadora() {
  const elementos = ["Piedra", "Papel", "Tijera"];
  const elemento = things[Math.floor(Math.random() * elementos.length)];
  console.log(elemento);
  return elemento;
}

function jugadaJugador() {
  let elementoJugador;
  let eleccionJugador = parseInt(
    prompt("Ingrese un valor: 1 : Piedra 2: Papel 3: Tijera")
  );
  if (eleccionJugador == 1) {
    elementoJugador = "Piedra";
  } else if (eleccionJugador == 2) {
    elementoJugador = "Papel";
  } else if (eleccionJugador == 3) {
    elementoJugador = "Tijera";
  } else {
    alert("Eleccion no valida");
    elementoJugador = "Tijera";
  }
  document.getElementById("jugadorEleccion").innerText = elementoJugador;
}

function jugarRonda(jugadorSeleccion, computadoraSeleccion) {
  let puntajeJugador = 0;
  let puntajeComputadora = 0;
  // condicional para evaluar si el jugador o la compu gana la jugada
  if (jugadorSeleccion == computadoraSeleccion) {
    console.log(
      `Empate --> Jugador: ${puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  } else if (jugadorSeleccion == "Piedra" && computadoraSeleccion == "Papel") {
    console.log(
      `Papel le gana a Piedra--> Computadora: ${++puntajeComputadora} Jugador ${puntajeJugador}`
    );
  } else if (jugadorSeleccion == "Piedra" && computadoraSeleccion == "Tijera") {
    console.log(
      `Piedra le gana a Tijera--> Jugador ${++puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  } else if (jugadorSeleccion == "Papel" && computadoraSeleccion == "Piedra") {
    console.log(
      `Papel le gana a Piedra-> Jugador ${++puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  } else if (jugadorSeleccion == "Papel" && computadoraSeleccion == "Tijera") {
    console.log(
      `Tijera le gana a Papel--> Computadora: ${++puntajeComputadora} Jugador ${puntajeJugador}`
    );
  } else if (jugadorSeleccion == "Tijera" && computadoraSeleccion == "Piedra") {
    console.log(
      `Piedra le gana a Tijera--> Computadora: ${++puntajeComputadora} Jugador ${puntajeJugador}`
    );
  } else if (jugadorSeleccion == "Tijera" && computadoraSeleccion == "Papel") {
    console.log(
      `Tijera le gana a Papel-> Jugador ${++puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  }
  return [puntajeJugador, puntajeComputadora];
}

function game() {
  let jugadorTotal = 0;
  let computadoraTotal = 0;
  let resultado = jugarRonda(jugadaJugador(), jugadaComputadora());
  if (resultado[0] == 1) {
    jugadorTotal += 1;
  } else if (resultado[1] == 1) {
    computadoraTotal += 1;
  }

  console.log(
    `Resultado juego:\nPuntaje jugador: ${jugadorTotal}\nPuntaje computadora: ${computadoraTotal}`
  );
}

juego();

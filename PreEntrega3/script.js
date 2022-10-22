const mostrarEleccionJugador = document.getElementById("jugadorEleccion");
const mostrarEleccionComputadora = document.getElementById("computadoraEleccion");
const mostrarPuntajeJugador = document.getElementById("jugadorPuntaje");
const mostrarPuntajeComputadora = document.getElementById("computadoraPuntaje");
const mostrarResultadoJuego = document.getElementById("juegoResultado");
const mostrarFigus = document.getElementById("paqueteFigus");
const botones = document.querySelectorAll(".botones");

let eleccionJugador;
let jugadorTotal = 0;
let jugada = [];
let computadoraTotal = 0;
let equipo = [];
let pilaFigus = [];
let figusStorage = JSON.parse(localStorage.getItem("pilaFigus"))

const FigusPorSobre = 5;
const arquero = "arquero";
const defensor = "defensor";
const mediocampista = "mediocampista";
const delantero = "delantero";

// JUEGO PIEDRA PAPEL O TIJERA
function jugadaComputadora() {
  const elementos = ["Piedra", "Papel", "Tijera"];
  const eleccionComputadora =
    elementos[Math.floor(Math.random() * elementos.length)];
    mostrarEleccionComputadora.textContent = `Computadora Eligió:`;
  mostrarEleccionComputadora.textContent += ` ${eleccionComputadora}`;
  console.log(`Computadora eligió: ${eleccionComputadora}`);
  return eleccionComputadora;
}

botones.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    eleccionJugador = e.target.id;
    mostrarFigus.textContent = ``;
    mostrarEleccionJugador.textContent = `Jugador Eligió:`
    mostrarEleccionJugador.textContent += ` ${eleccionJugador}`;
    jugada = jugarRonda(eleccionJugador, jugadaComputadora());
    jugadorTotal += jugada[0];
    mostrarPuntajeJugador.textContent = `PUNTAJE:`
    mostrarPuntajeJugador.textContent += ` ${jugadorTotal}`;    
    computadoraTotal += jugada[1];
    mostrarPuntajeComputadora.textContent = `PUNTAJE:`
    mostrarPuntajeComputadora.textContent += ` ${computadoraTotal}`;
    if (jugadorTotal >= 3) {
        mostrarResultadoJuego.textContent = "GANASTE!!!"
        pilaFiguritas();
        continuarJuego = !chequeoEquipoCompleto();
        if (!continuarJuego) {
          alert("COMPLETASTE EL ALBUM...FELICITACIONES !!!");
        }
        
      jugadorTotal = 0;
      computadoraTotal = 0;
    } else if( computadoraTotal >= 3) {
        mostrarResultadoJuego.textContent = "PERDISTE :("
      jugadorTotal = 0;
      computadoraTotal = 0;
    } else {
        mostrarResultadoJuego.textContent = "";
    }
  })
);

function jugarRonda(jugadorSeleccion, computadoraSeleccion) {
  let puntajeJugador = 0;
  let puntajeComputadora = 0;
  // condicional para evaluar si el jugador o la compu gana la jugada
  if (jugadorSeleccion === computadoraSeleccion) {
    console.log(
      `Empate --> Jugador: ${puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  } else if (
    jugadorSeleccion === "Piedra" &&
    computadoraSeleccion === "Papel"
  ) {
    console.log(
      `Papel le gana a Piedra--> Computadora: ${++puntajeComputadora} Jugador ${puntajeJugador}`
    );
  } else if (
    jugadorSeleccion === "Papel" &&
    computadoraSeleccion === "Tijera"
  ) {
    console.log(
      `Tijera le gana a Papel--> Computadora: ${++puntajeComputadora} Jugador ${puntajeJugador}`
    );
  } else if (
    jugadorSeleccion === "Tijera" &&
    computadoraSeleccion === "Piedra"
  ) {
    console.log(
      `Piedra le gana a Tijera--> Computadora: ${++puntajeComputadora} Jugador ${puntajeJugador}`
    );
  } else if (
    jugadorSeleccion === "Piedra" &&
    computadoraSeleccion === "Tijera"
  ) {
    console.log(
      `Piedra le gana a Tijera--> Jugador ${++puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  } else if (
    jugadorSeleccion === "Papel" &&
    computadoraSeleccion === "Piedra"
  ) {
    console.log(
      `Papel le gana a Piedra-> Jugador ${++puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  } else if (
    jugadorSeleccion === "Tijera" &&
    computadoraSeleccion === "Papel"
  ) {
    console.log(
      `Tijera le gana a Papel-> Jugador ${++puntajeJugador} Computadora: ${puntajeComputadora}`
    );
  }
  return [puntajeJugador, puntajeComputadora];
}

function ganoHumano(puntajeTotalHumano) {
  let ganador;
  let paqueteFiguritas;
  let ganadorHumano = puntajeTotalHumano === 3;
  const estiloConsoleLogGanador =
    "font-weight: bold; font-size: 14px; color: red;";
  if (ganadorHumano) {
    ganador = "Humano";
    paqueteFiguritas = `\nGANASTE ${FigusPorSobre} FIGURITAS PARA LLENAR EL ÁLBUM`;
  } else {
    ganador = "Computadora";
    paqueteFiguritas = "";
  }
  console.log(
    `%cFIN DE LA PARTIDA : Ganador ${ganador} ${paqueteFiguritas}`,
    estiloConsoleLogGanador
  );
  return ganadorHumano;
}

function juego() {
    pilaFigus = [];

  const estiloConsoleLogPuntaje =
    "font-weight: bold; font-size: 12px; color: blue;";
    let continuarJuego = true;
  while (continuarJuego) {
    let playerResult = 0;
    let compuResult = 0;
   // let resultado = jugarRonda(eleccionJugador, jugadaComputadora());
    if (jugada[0] === 1) {
      playerResult = 1;
    } else if (jugada[1] === 1) {
      compuResult = 1;
    }
    console.log(
      `Game result:\nPlayer score: ${playerResult}\nComputer score: ${compuResult}`
    );

      continuarJuego = !chequeoEquipoCompleto();
      if (!continuarJuego) {
        alert("COMPLETASTE EL ALBUM...FELICITACIONES !!!");
      }
    return [playerResult, compuResult];
  }
}

// CREACION DE JUGADORES , SOBRE FIGURITAS Y PILA DE FIGURITAS

// defino función constructora para agregar jugadores
function Jugador(id, nombre, edad, numero, posicion) {
  this.id = id;
  this.nombre = nombre;
  this.edad = edad;
  this.numero = numero;
  this.posicion = posicion;
}

let arquero1 = new Jugador(1, "F.Armani", 36, 1, arquero);
let arquero2 = new Jugador(2, "E.Centurión", 25, null, arquero);
let defensor1 = new Jugador(3, "J.Maidana", 37, 4, defensor);
let defensor2 = new Jugador(4, "R.Rojas", 26, 2, defensor);
let defensor3 = new Jugador(5, "M.Herrera", 24, 15, defensor);
let defensor4 = new Jugador(6, "P.Diaz", 28, 17, defensor);
let defensor5 = new Jugador(7, "H.Martinez", 24, null, defensor);
let mediocampista1 = new Jugador(8, "B.Zuculini", 29, 5, mediocampista);
let mediocampista2 = new Jugador(9, "J.Quintero", 29, 10, mediocampista);
let mediocampista3 = new Jugador(10, "N. De la Cruz", 25, 11, mediocampista);
let mediocampista4 = new Jugador(11, "E.Barco", 23, null, mediocampista);
let delantero1 = new Jugador(12, "M.Suarez", 34, 7, delantero);
let delantero2 = new Jugador(13, "M.Borja", 29, 9, delantero);
let delantero3 = new Jugador(14, "P.Solari", 21, 14, delantero);
let delantero4 = new Jugador(15, "L.Beltrán", 21, null, delantero);

// agrego los jugadores al Array
equipo.push(
  arquero1,
  arquero2,
  defensor1,
  defensor2,
  defensor3,
  defensor4,
  defensor5,
  mediocampista1,
  mediocampista2,
  mediocampista3,
  mediocampista4,
  delantero1,
  delantero2,
  delantero3,
  delantero4
);

// métodos de Array
let equipoFiltrado = equipo.filter((dorsal) => dorsal.numero != null);
let equipoMapeado = equipoFiltrado.map(
  (numeroNombre) => `${numeroNombre.numero} - ${numeroNombre.nombre}`
);

function generarSobre(equipo) {
  let cantFiguritas = 0;
  let figusSobre = [];
  while (cantFiguritas < FigusPorSobre) {
    let figurita = equipo[Math.floor(Math.random() * equipoMapeado.length)];
    figusSobre.push(figurita);
    cantFiguritas += 1;
  }
  let sobreSinComas = figusSobre.join(`\n`);
  mostrarFigus.setAttribute('style', 'white-space: pre;');
  mostrarFigus.textContent = `Te tocaron estas figuritas:\r\n${sobreSinComas.replace(/,/g, '\n')}`;
  return figusSobre;
}

function pilaFiguritas() {
  const estiloPila = "font-weight: bold; font-size: 12px; color: green;";
  pilaFigus = pilaFigus.concat(generarSobre(equipoMapeado));
  console.log(
    `%cTENES ESTAS FIGURITAS EN TU PILA: ${pilaFigus.join(", ")}`,
    estiloPila
  );
  localStorage.setItem("pilaFigus",JSON.stringify(pilaFigus + figusStorage));
}

function chequeoEquipoCompleto() {
  const estiloChequeo = "font-weight: bold; font-size: 12px; color: brown;";
  const chequeo = equipoMapeado.filter((x) => !pilaFigus.includes(x));
  if (chequeo.length !== 0) {
    console.log(
      `%cTE FALTAN ESTAS FIGURITAS PARA COMPLETAR EL ALBUM: ${chequeo.join(
        ", "
      )}`,
      estiloChequeo
    );
  }
  return chequeo.length === 0;
}

function reiniciarJuego() {
  localStorage.removeItem("pilaFigus");
}

juego();



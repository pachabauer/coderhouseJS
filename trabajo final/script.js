const mostrarEleccionJugador = document.getElementById("jugadorEleccion");
const mostrarEleccionComputadora = document.getElementById(
  "computadoraEleccion"
);
const mostrarPuntajeJugador = document.getElementById("jugadorPuntaje");
const mostrarPuntajeComputadora = document.getElementById("computadoraPuntaje");
const mostrarResultadoJuego = document.getElementById("juegoResultado");
const mostrarFigus = document.getElementById("paqueteFigus");
const botones = document.querySelectorAll(".botones");
window.reiniciarJuego = reiniciarJuego;
window.yapa = yapa;

let eleccionJugador;
let jugadorTotal = 0;
let jugada = [];
let computadoraTotal = 0;
let equipo = [];
let pilaFigus = [];
let figusStorage = JSON.parse(localStorage.getItem("pilaFigus"));

const FigusPorSobre = 5;
const arquero = "arquero";
const defensor = "defensor";
const mediocampista = "mediocampista";
const delantero = "delantero";
let chequeo;

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
    let continuarJuego = !chequeoEquipoCompleto();
    if (!continuarJuego) {
      Swal.fire("JUEGO COMPLETADO!", "REINICIA PARA CONTINUAR", "success");
    } else {
      eleccionJugador = e.target.id;
      mostrarFigus.textContent = ``;
      mostrarEleccionJugador.textContent = `Jugador Eligió:`;
      mostrarEleccionJugador.textContent += ` ${eleccionJugador}`;
      jugada = jugarRonda(eleccionJugador, jugadaComputadora());
      jugadorTotal += jugada[0];
      mostrarPuntajeJugador.textContent = `PUNTAJE:`;
      mostrarPuntajeJugador.textContent += ` ${jugadorTotal}`;
      computadoraTotal += jugada[1];
      mostrarPuntajeComputadora.textContent = `PUNTAJE:`;
      mostrarPuntajeComputadora.textContent += ` ${computadoraTotal}`;
      if (jugadorTotal >= 3) {
        Swal.fire({
          title: "GANASTE !!!",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        pilaFiguritas();
        jugadorTotal = 0;
        computadoraTotal = 0;
      } else if (computadoraTotal >= 3) {
        Swal.fire({
          title: "PERDISTE - la próxima es tuya!!!",
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        jugadorTotal = 0;
        computadoraTotal = 0;
      }
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
  let continuarJuego = true;
  while (continuarJuego) {
    let playerResult = 0;
    let compuResult = 0;
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
      Swal.fire("EXCELENTE!", "COMPLETASTE EL ALBUM !!!", "success");
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

let equipoFiltrado = equipo.filter((dorsal) => dorsal.numero !== null);
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
  mostrarFigus.setAttribute("style", "white-space: pre;");
  mostrarFigus.textContent = `TE TOCARON ESTAS FIGURITAS:\r\n${sobreSinComas.replace(
    /,/g,
    "\n"
  )}`;
  return figusSobre;
}

function pilaFiguritas() {
  pilaFigus = pilaFigus.concat(generarSobre(equipoMapeado));
  localStorage.setItem("pilaFigus", JSON.stringify(pilaFigus + figusStorage));
}

function chequeoEquipoCompleto() {
  if (figusStorage) {
    chequeo = equipoMapeado.filter((x) => !figusStorage.includes(x));
    return chequeo.length === 0;
  }
}

function reiniciarJuego() {
  Swal.fire({
    title: "Estás seguro?",
    text: "Vas a perder todas las figus que juntaste!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "SI!",
    cancelButtonText: "NO!",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("pilaFigus");
      Swal.fire(
        "Reiniciaste!",
        "Que disfrutes de la nueva partida.",
        "success"
      );
      setTimeout(window.location.reload.bind(window.location), 2000);
    }
  });
}

function yapa() {
  let continuarJuego = !chequeoEquipoCompleto();
  console.log(pilaFigus);
  if (figusStorage && chequeo.length !== 0) {
    let yapa = chequeo[Math.floor(Math.random() * chequeo.length)];
    localStorage.setItem(
      "pilaFigus",
      JSON.stringify(pilaFigus + figusStorage + yapa)
    );
    Swal.fire({
      title: "El lado oscuro de la fuerza te regala 1 figu!!",
      text: `Te tocó: ${yapa}`,
      imageUrl: "imagenes/darthVader.jpg",
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    setTimeout(() => {
      window.location.reload('Album/index.html') } , 2000)
  } else if (!continuarJuego) {
    Swal.fire("JUEGO COMPLETADO!", "REINICIA PARA CONTINUAR", "success");
  } else {
    Swal.fire(
      "Debes ganar una partida antes de probar el lado oscuro, padawan"
    );
  }
}

juego();

let obj;
let mostrarJugadores = document.getElementById("jugadores");
let arqueros = document.getElementById("arquero");
let defensores = document.getElementById("defensor");
let mediocampistas = document.getElementById("mediocampista");
let delanteros = document.getElementById("delantero");
let pilaFigusStorage = JSON.parse(localStorage.getItem("pilaFigus"));

function agregarJugador(jugador) {
  let nombre = jugador.nombre;
  let sinNumero = Math.floor(
    Math.random() * 100
  ); /* genero un número aleatorio para los jugadores que 
                                    no tienen número en la API  */
  let numero = jugador.numero ?? sinNumero;
  let posicion = jugador.posicion;
  let comparacion = `${numero} - ${nombre}`;
  console.log(comparacion);
  let contenedorJugadores = document.createElement("div");
  contenedorJugadores.classList.add(posicion);
  if (pilaFigusStorage){
  if (pilaFigusStorage.length !== 0){
    if (pilaFigusStorage.includes(comparacion)) {
        contenedorJugadores.classList.add(`obtenidos`);
  }
}
  }

  let mostrarJugadorNombre = document.createElement("h2");
  let mostrarJugadorNumero = document.createElement("h2");

  mostrarJugadorNombre.innerText = nombre;
  mostrarJugadorNumero.innerText = numero;

  if (posicion == "arquero") {
    arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
    arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);
  }
  if (posicion == "defensor") {
    defensores
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNombre);
    defensores
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNumero);
  }
  if (posicion == "mediocampista") {
    mediocampistas
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNombre);
    mediocampistas
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNumero);
  }
  if (posicion == "delantero") {
    delanteros
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNombre);
    delanteros
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNumero);
  }

  mostrarJugadores.appendChild(arqueros);
  mostrarJugadores.appendChild(defensores);
  mostrarJugadores.appendChild(mediocampistas);
  mostrarJugadores.appendChild(delanteros);
}

async function mostrarEquipo() {
  equipoFiltrado.forEach((player) => {
    agregarJugador(player);
  });
}

mostrarEquipo();

function limpiarEquipo() {
  mostrarJugadores.innerHTML = "";
  arqueros.innerHTML = "";
  defensores.innerHTML = "";
  mediocampistas.innerHTML = "";
  delanteros.innerHTML = "";
}

function cambiarColorFondo() {
  let estilo = getComputedStyle(document.body);
  document.body.style.background = estilo.getPropertyValue; //seleccionar todos los botones, tomar con un addeventlistener su color de fondo y usarlo
}

function actualizarEquipo(id) {
  limpiarEquipo();
  mostrarEquipo(id);
}

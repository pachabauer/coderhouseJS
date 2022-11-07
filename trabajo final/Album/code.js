const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "55af192985msh99f1a08ffa2d0aap1a97edjsn01946fb8f19c",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

let obj;
let nombresJugadores = [];


/* Creo un array con todos los id de jugadores que no tienen foto. 
    Esto lo hice a mano, uno x uno porque no encontré la forma de acceder al 
    head de la API y traer la metadata de la imagen , para así filtrarlas 
    directamente */
const jugadoresSinFoto = [
  309873, 312311, 306800, 363316, 266388, 317020, 237819, 363363, 391726,
  295997, 237123, 288482, 363108, 290049, 363110, 363109, 311784, 149560,
  376728, 363111, 81216, 311018, 362658, 65738, 76712, 354136, 308176, 65624,
  307038, 354135, 76856, 354354, 191859, 310022, 307044, 65937, 323474, 354357,
  76740, 321646, 316918, 311286, 309999, 383789, 362716, 362717, 385252, 311287,
  143640, 351485, 362718, 266250, 70720, 377174, 385726, 363112, 353990, 376729,
  353992, 316823, 389578, 363113, 374543, 353994, 317413, 340972, 316822,
  354840, 125762, 372203, 147842, 65986, 337605, 307036, 180973, 237088, 311067,
  378855, 266856, 363318, 353689, 353017, 311821, 306181, 294907, 59863, 197814,
  306174, 266656, 289470, 374150, 289473, 356938, 289474, 289477, 356943,
  375680, 289481, 356940, 346271, 356942, 344891, 356944, 106340, 356945,
  317934, 352959, 352871, 363708, 309737, 352869, 278170, 16610, 306934, 265984,
  356532, 237263, 363795, 363796, 306936, 311816, 321653, 363797, 311540,
  354031, 321455, 321657, 363799, 306940, 321658, 199724, 354955, 353989,
  363800, 363801, 363802, 363803, 362868, 311428, 365206, 376911, 374533,
  365203, 362870, 357338, 59563, 352072, 311432, 59421, 280723, 352336, 352334,
  358951, 313652, 323781, 323786, 345203, 323780, 286970, 324721, 322327,
  392104, 200150, 301781, 307873, 197550, 297646, 307870, 197549, 125205, 65957,
  307040, 307545, 354226, 214031, 354227, 170799, 65877, 384668, 65883, 119680,
  311444, 354228, 311317, 390741, 390742, 343902, 312995, 310774, 343898,
  312994, 362702, 344165, 343905, 39623, 350936, 363130, 271083, 59545, 349325,
  363705, 363706, 237692, 297893, 363707, 266302, 197065, 197528, 306063,
  265267, 59537, 310750, 354062, 315243, 310757, 70543, 191864, 70686, 311802,
  195107, 363100, 363140, 311809, 289424, 362726, 362728, 322605, 362727,
  289427, 289433, 289432, 362729, 289430, 362732, 362735, 311781, 367660,
  355795, 95459, 367661, 319570, 281354, 372022, 281352, 367662, 364829, 306210,
  372083, 362884, 362886, 349001, 362885, 366780, 266019, 352369, 358139,
  372084, 322068, 311158, 352372, 362872, 311291, 362873, 362874, 311293,
  311294, 311295, 352296, 362878, 362879, 362880, 362882, 362881, 318927,
  362883, 321835, 353997, 313653, 321836, 349797, 363394, 311356, 363396,
  311361, 355305, 311362, 194903, 363397, 311363, 363399, 382917, 194905,
  322324, 363400, 323788
];

const idEquipos = [
  121,1148,2807,15702,
  134,1179,2808,3711,
  2356,438,794,450,
  125,1153,1142,1138,
  451,131,1127,3700,
  435,2315,2553,154,
  2348,1176,448,1182,
  127,2994,2546,456
];

var equipoRandom = idEquipos[Math.floor(Math.random()*idEquipos.length)];

/* tabla equipos por ID OBTENIDOS DE LA API // id players sin foto
GRUPO A
121 palmeiras // {309873, 312311, 306800, 363316, 266388, 317020, 237819}
1148 emelec // {363363, 391726, 295997, 237123}
2807 deportivo tachira // {288482, 363108, 290049, 363110, 363109, 311784, 149560, 376728, 363111, 81216, 311018}
15702 independiente petrolero // {362658, 65738, 76712, 354136, 308176, 65624, 307038, 354135, 76856, 354354, 191859, 310022, 307044, 65937, 323474, 354357, 76740}

GRUPO B 
134 athletico paranaense // {321646, 316918, 311286, 309999, 383789, 362716, 362717, 385252, 311287, 143640, 351485, 362718, 266250, }
1179 libertad // {70720, 377174, 385726}
2808 caracas fc // {363112, 353990, 376729, 353992, 316823, 389578, 363113, 374543, 353994, 317413, 340972, 316822, 354840}
3711 the strongest // {125762, 372203, 147842, 65986, 337605, 307036, 180973}

GRUPO C
2356 nacional // {} estan todos !!!
438 velez // {237088, 311067, 378855, }
794 bragantino // {266856, 363318, 353689, 353017, 311821, 306181, 294907, 59863, 197814, 306174, 266656}
450 estudiantes // {289470, 374150, 289473, 356938, 289474, 289477, 356943, 375680, 289481, 356940, 346271, 356942, 344891, 356944, 106340, 356945} 

GRUPO D 
117 atletico mineiro --> no funciona reemplazo
125 A. mineiro {317934, 352959, 352871, 363708, 309737, 352869}
1153 I. del valle {278170, 16610, 306934, 265984, 356532, 237263, 363795, 363796, 306936, 311816, 321653, 363797, 311540, 354031, 321455, 321657, 363799, 306940, 321658, 199724, 354955, 353989, 363800, 363801, 363802, 363803 } 
1142 D. tolima {362868, 311428, 365206, 376911, 374533, 365203, 362870}
1138 america (cali en reemplazo de mineiro ya que America MG es el 125) {357338, 59563, 352072, 311432, 59421, 280723, 352336, 352334, 358951}

GRUPO E 
451 boca //  {313652, 323781, 323786, 345203, 323780, 286970, 324721}
131 corinthians {322327, 392104}
1127 deportivo cali {200150, 301781, 307873, 197550, 297646, 307870, 197549}
3700 always ready {125205, 65957, 307040, 307545, 354226, 214031, 354227, 170799, 65877, 384668, 65883, 119680, 311444, 354228}

GRUPO F
435 river // {311317, 390741, 390742}
2315 colo colo // {343902, 312995, 310774, 343898, 312994, 362702, 344165, 343905}
2553 alianza lima // {39623, 350936, 363130}
154 fortaleza // {271083, 59545, 349325, 363705, 363706, 237692, 297893, 363707, 266302, 197065, 197528, 306063, 265267, 59537}

GRUPO G
2348 peñarol // {310750, 354062, 315243, 310757}
1176 cerro porteño // {70543, 191864, 70686, 311802, 195107, 363100, 363140, 311809}
448 colon // {289424, 362726, 362728, 322605, 362727, 289427, 289433, 289432, 362729, 289430, 362732, 362735}
1182 olimpia // {311781, 367660, 355795, 95459, 367661, 319570, 281354, 372022, 281352, 367662, 364829}

GRUPO H
127 flamengo // {306210, 372083, 362884, 362886, 349001, 362885, 366780, 266019, 352369, 358139, 372084, 322068, 311158, 352372}
2994 U. catolica // {362872, 311291, 362873, 362874, 311293, 311294, 311295, 352296, 362878, 362879, 362880, 362882, 362881, 318927, 362883}
2546 sporting cristal // {321835, 353997, 313653, 321836, 349797}
456 talleres // {363394, 311356, 363396, 311361, 355305, 311362, 194903, 363397, 311363, 363399, 382917, 194905, 322324, 363400}
*/

let equipoDatos = document.getElementById("equipoDatos");
let mostrarJugadores = document.getElementById("jugadores");
let arqueros = document.getElementById("arquero");
let defensores = document.getElementById("defensor");
let mediocampistas = document.getElementById("mediocampista");
let delanteros = document.getElementById("delantero");
let pilaFigusStorage = JSON.parse(localStorage.getItem("pilaFigus"));

function agregarNombreEquipo(nombre,logo){
  let nombreEquipo = document.createElement("div");
  let logoEquipo = document.createElement("img");
  nombreEquipo.classList.add("nombreEquipo");
  nombreEquipo.innerText = nombre;
  logoEquipo.classList.add("logoEquipo");
  logoEquipo.src = logo;
  equipoDatos.append(nombreEquipo,logoEquipo)
}

function agregarJugador(jugador, club) {
  let nombre = jugador.name;
  let foto = jugador.photo;
  let sinNumero = Math.floor(
    Math.random() * 100
  ); /* genero un número aleatorio para los jugadores que 
                                    no tienen número en la API  */
  let numero = jugador.number ?? sinNumero;
  let nombreClub = club;
  let position = jugador.position;
  let comparacion = `${numero} - ${nombre} - ${nombreClub}`;
  console.log(comparacion);
  nombresJugadores.push(comparacion)
  localStorage.setItem("equipo", JSON.stringify(nombresJugadores));

  let contenedorJugadores = document.createElement("div");
  contenedorJugadores.classList.add(position);
  if (pilaFigusStorage) {
    if (pilaFigusStorage.length !== 0) {
      if (pilaFigusStorage.includes(comparacion)) {
        contenedorJugadores.classList.add(`obtenidos`);
      }
    }
  }
  let mostrarJugadorNombre = document.createElement("h2");
  let mostrarJugadorNumero = document.createElement("h2");
  let mostrarJugadorFoto = document.createElement("img");
  mostrarJugadorFoto.src = foto;
  mostrarJugadorNombre.innerText = nombre;
  mostrarJugadorNumero.innerText = numero;

  if (position == "Goalkeeper") {
    arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
    arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
    arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);
  }
  if (position == "Defender") {
    defensores.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
    defensores
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNombre);
    defensores
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNumero);
  }
  if (position == "Midfielder") {
    mediocampistas
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorFoto);
    mediocampistas
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNombre);
    mediocampistas
      .appendChild(contenedorJugadores)
      .appendChild(mostrarJugadorNumero);
  }
  if (position == "Attacker") {
    delanteros.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
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

async function mostrarEquipo(teamId) {
  const resp = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`,
    options
  );
  const data = await resp.json();
  console.log(data.response[0]);
  const club = data.response[0].team;
  agregarNombreEquipo(club.name,  club.logo)
  data.response[0].players.forEach((player) => {
    if (!jugadoresSinFoto.includes(player.id)) {
      agregarJugador(player, club.name);
    }
  });
}

mostrarEquipo(equipoRandom);

function limpiarEquipo() {
  equipoDatos.innerHTML = "";
  mostrarJugadores.innerHTML = "";
  arqueros.innerHTML = "";
  defensores.innerHTML = "";
  mediocampistas.innerHTML = "";
  delanteros.innerHTML = "";
}

function actualizarEquipo(id) {
  limpiarEquipo();
  mostrarEquipo(id);
}

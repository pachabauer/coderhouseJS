const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55af192985msh99f1a08ffa2d0aap1a97edjsn01946fb8f19c',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

let obj;
let mostrarJugadores = document.getElementById("jugadores");
let arqueros = document.getElementById("arquero");
let defensores = document.getElementById("defensor");
let mediocampistas = document.getElementById("mediocampista");
let delanteros = document.getElementById("delantero");

/* tabla equipos por ID 
435 river
448 colon
451 boca
438 velez
456 talleres
450 estudiantes
*/

function agregarJugador (element) {
    let nombre = element.name; 
        let foto = element.photo;
        let sinNumero = Math.floor(Math.random() * 100); /* genero un número aleatorio para los jugadores que 
                                    no tienen número en la API  */    
        let numero = element.number ?? sinNumero;
        let position = element.position;
        let contenedorJugadores = document.createElement("div");
        contenedorJugadores.classList.add(position);
        let mostrarJugadorNombre = document.createElement("h2");
        let mostrarJugadorNumero = document.createElement("h2");
        let mostrarJugadorFoto = document.createElement("img");

        mostrarJugadorFoto.src = foto; 
        mostrarJugadorNombre.innerText = nombre;
        mostrarJugadorNumero.innerText = numero;

        if(position == "Goalkeeper") {
            arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
            arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);     
           };
        if(position == "Defender") { 
            defensores.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
            defensores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            defensores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);   
        };
        if(position == "Midfielder") { 
            mediocampistas.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
            mediocampistas.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            mediocampistas.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);   
        };
        if(position == "Attacker") { 
            delanteros.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
            delanteros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            delanteros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);   
        };

        mostrarJugadores.appendChild(arqueros);
        mostrarJugadores.appendChild(defensores);
        mostrarJugadores.appendChild(mediocampistas);
        mostrarJugadores.appendChild(delanteros);

}

async function mostrarEquipo (teamId) {
    const resp = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`,
                 options);
    const data = await resp.json();
    data.response[0].players.forEach(player => agregarJugador(player))
}

mostrarEquipo('450'); 

function limpiarEquipo() {
    mostrarJugadores.innerHTML = '';
    arqueros.innerHTML = '';
    defensores.innerHTML = '';
    mediocampistas.innerHTML = '';
    delanteros.innerHTML = '';
};

function actualizarEquipo(id) {
    limpiarEquipo();
    mostrarEquipo(id);}
/*
definir set con todos los id de jugador sin foto
filter sobre players antes de forEach que tome todos los que no esten en set
fin!

en vez de paginacion, asociar button (o a tag) con id recorriendo array de equipos : id 
*/



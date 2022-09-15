const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55af192985msh99f1a08ffa2d0aap1a97edjsn01946fb8f19c',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

let obj;
let mostrarJugadores = document.getElementById("jugadores");
/* let arqueros = document.getElementById("arquero");
let defensores = document.getElementById("defensor");
let mediocampistas = document.getElementById("mediocampista");
let delanteros = document.getElementById("delantero"); */

fetch('https://api-football-v1.p.rapidapi.com/v3/players/squads?team=435', options)
	.then(response => response.json())
    .then(data => obj = data)
	.then(response => console.log(response))
    .then(() =>  obj.response[0].players.forEach(element => {
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

        mostrarJugadores.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
        mostrarJugadores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
        mostrarJugadores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);


        })
        )
	.catch(err => console.error(err));



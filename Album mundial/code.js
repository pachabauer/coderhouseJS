const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55af192985msh99f1a08ffa2d0aap1a97edjsn01946fb8f19c',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

let obj;
let mostrarJugadores = document.getElementById("jugadores");

fetch('https://api-football-v1.p.rapidapi.com/v3/players/squads?team=456', options)
	.then(response => response.json())
    .then(data => obj = data)
	.then(response => console.log(response))
    .then(() =>  obj.response[0].players.forEach(element => {
        let nombre = element.name; 
        let foto = element.photo;   
        console.log(nombre,foto)

        let contenedorJugadores = document.createElement("div")
        let mostrarJugadorNombre = document.createElement("h2");
        let mostrarJugadorFoto = document.createElement("img");
        mostrarJugadorFoto.src = foto; 
        mostrarJugadorNombre.innerHTML = nombre;

        mostrarJugadores.appendChild(contenedorJugadores).appendChild(mostrarJugadorFoto);
        mostrarJugadores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);

        })
        )
	.catch(err => console.error(err));



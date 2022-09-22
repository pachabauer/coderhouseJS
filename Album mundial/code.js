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


fetch('https://api-football-v1.p.rapidapi.com/v3/players/squads?team=450', options)
	.then(response => response.json())
    .then(data => obj = data)
	.then(response => console.log(response))
    .then(() =>  obj.response[0].players.forEach(async element => {

       


        let nombre = element.name; 

        let foto = element.photo;
       

      /*    let blob = await fetch(foto).then((r) => r.blob());
         const file = new File([blob], "cover.png", {
            type: "image/png",
          });
          
          console.log(file); */

        
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

        })
        )
	.catch(err => console.error(err));

/* 
let imagenes = document.querySelectorAll(".arquero");
let imgSrc;
imagenes.forEach((img) => {
    img.addEventListener('click', (e) => { 
        imgSrc = e.target.src;
        imgModal(imgSrc);
        
    });
});

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".jugadores").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "X";
    closeBtn.setAttribute("class", "closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};

let height = screen.height
let width = screen.width

console.log(`${height} y ${width}`) */


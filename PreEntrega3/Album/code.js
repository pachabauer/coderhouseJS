// poner todo dentro de una funcion en el mismo script ?

let obj;
let mostrarJugadores = document.getElementById("jugadores");
let arqueros = document.getElementById("arquero");
let defensores = document.getElementById("defensor");
let mediocampistas = document.getElementById("mediocampista");
let delanteros = document.getElementById("delantero");
function agregarJugador (jugador) {
        let nombre = jugador.nombre; 
        let sinNumero = Math.floor(Math.random() * 100); /* genero un número aleatorio para los jugadores que 
                                    no tienen número en la API  */    
        let numero = jugador.numero ?? sinNumero;
        let posicion = jugador.posicion;
        let comparacion = `${nombre} - ${numero}`
        console.log(comparacion)
        console.log(window.pilaFigus)
        let contenedorJugadores = document.createElement("div");
        if (!pilaFigus.includes(comparacion)) {
            contenedorJugadores.classList.add(posicion);
        } else { 
            contenedorJugadores.classList.add(`si`);

        }
        
        let mostrarJugadorNombre = document.createElement("h2");
        let mostrarJugadorNumero = document.createElement("h2");

        mostrarJugadorNombre.innerText = nombre;
        mostrarJugadorNumero.innerText = numero;

        if(posicion == "arquero") {
            arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            arqueros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);     
           };
        if(posicion == "defensor") { 
            defensores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            defensores.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);   
        };
        if(posicion == "mediocampista") { 
            mediocampistas.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            mediocampistas.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);   
        };
        if(posicion == "delantero") { 
            delanteros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNombre);
            delanteros.appendChild(contenedorJugadores).appendChild(mostrarJugadorNumero);   
        };

        mostrarJugadores.appendChild(arqueros);
        mostrarJugadores.appendChild(defensores);
        mostrarJugadores.appendChild(mediocampistas);
        mostrarJugadores.appendChild(delanteros);

}

async function mostrarEquipo () {
    const data = equipo;
    console.log(data);
    data.forEach(player => {
        console.log(player)
            agregarJugador(player);
    }
    );
}

mostrarEquipo(); 

function limpiarEquipo() {
    mostrarJugadores.innerHTML = '';
    arqueros.innerHTML = '';
    defensores.innerHTML = '';
    mediocampistas.innerHTML = '';
    delanteros.innerHTML = '';
};

function cambiarColorFondo() {
    let estilo = getComputedStyle(document.body)
    document.body.style.background = estilo.getPropertyValue; //seleccionar todos los botones, tomar con un addeventlistener su color de fondo y usarlo
 }

function actualizarEquipo(id) {
    limpiarEquipo();
    mostrarEquipo(id);} // agregar que cuando actualice , haga el método cambiarColor tmb 
/*

en vez de paginacion, asociar button (o a tag) con id recorriendo array de equipos : id 
*/



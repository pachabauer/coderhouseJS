let equipo = [];
let sobreFiguritas = [];
let pilaFigus = [];
const arquero = "Arquero";
const defensor = "Defensor";
const mediocampista = "Mediocampista";
const delantero = "Delantero";

// defino función constructora para agregar jugadores
function Jugador(id,nombre,edad,numero,posicion) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.numero = numero;
    this.posicion = posicion;
}

let arquero1 = new Jugador(1,"F.Armani",36,1,arquero);
let arquero2 = new Jugador(2,"E.Centurión",25,null,arquero);
let defensor1 = new Jugador(3,"J.Maidana",37,4,defensor);
let defensor2 = new Jugador(4,"R.Rojas",26,2,defensor);
let defensor3 = new Jugador(5,"M.Herrera",24,15,defensor);
let defensor4 = new Jugador(6,"P.Diaz",28,17,defensor);
let defensor5 = new Jugador(7,"H.Martinez",24,null,defensor);
let mediocampista1 = new Jugador(8,"B.Zuculini",29,5,mediocampista);
let mediocampista2 = new Jugador(9,"J.Quintero",29,10,mediocampista);
let mediocampista3 = new Jugador(10,"N. De la Cruz",25,11,mediocampista);
let mediocampista4 = new Jugador(11,"E.Barco",23,null,mediocampista);
let delantero1 = new Jugador(12,"M.Suarez",34,7,delantero);
let delantero2 = new Jugador(13,"M.Borja",29,9,delantero);
let delantero3 = new Jugador(14,"P.Solari",21,14,delantero);
let delantero4 = new Jugador(15,"L.Beltrán",21,null,delantero);

// agrego los jugadores al Array
equipo.push(arquero1,arquero2,
    defensor1,defensor2,defensor3,defensor4,defensor5,
    mediocampista1,mediocampista2,mediocampista3,mediocampista4,
    delantero1,delantero2,delantero3);


/*Arreglo*/
let LAIKA_movies = [
{
    name: "Coraline",
    genero: "Fantasia",
    ano: 2009,
    description: "Una niña que descubre una puerta secreta hacia una versión idealizada pero siniestra de su hogar."
},
{
    name: "ParaNorman",
    genero: "Terror",
    ano: 2012,
    description: "Un niño capaz de hablar con los muertos que debe salvar a su pueblo de una maldición de zombis."
},
{
    name: "Los Boxtrolls",
    genero: "Aventura",
    ano: 2014,
    description: "Un niño huerfano criado por una comunidad de simpaticos recolectores de basura subterraneos."
},
{
    name: "KUBO",
    genero: "Aventura",
    ano: 2016,
    description: "Una aventura epica en el Japon feudal donde un niño con un poder musical debe proteger a su familia."
},
{
    name: "Mr. Link",
    genero: "Comedia",
    ano: 2019,
    description: "Una comedia de viajes sobre un investigador que busca demostrar la existencia de Pie Grande."
},
];


/*Practica 06/10/2026*/
console.log(LAIKA_movies);


function Crear() {
    let nuevo = [
        {
            name: "Wildwood",
            genero: "Fantasia",
            ano: 2026,
            description: "Una aventura mágica en un bosque encantado lleno de criaturas extraordinarias y misterios por descubrir."
        }
    ];

    LAIKA_movies.push(...nuevo);
    console.log("La nueva pelicula se ha agregado con exito!");
}

function Leer(name) {
    let genero_fantasia = LAIKA_movies.filter((Pelicula) => Pelicula.genero === "Fantasia");
    console.log(genero_fantasia);
}

function Actualizar() {
    let ListaActualizada = LAIKA_movies.map(Pelicula => {
        return Pelicula.name === "Wildwood" ?
        {...Pelicula, description: "Wildwood es la proxima y mas ambiciosa pelicula de LAIKA y se estrenara en cotubre del 2026."}
        : Pelicula;
    });
    console.log(ListaActualizada);
}

function Borrar() {
    let borrar_fantasia = LAIKA_movies.filter((Pelicula) => Pelicula.genero !== "Fantasia");
    console.log(borrar_fantasia);
}



/*Practica 01/09/2026*/
/*forEach
let existe = false;

LAIKA_movies.forEach(peli => {
    if(peli.name === nuevo.name){
        existe = true;
    }
});

if(!existe){
    LAIKA_movies.push(...nuevo);
}

console.log(LAIKA_movies);
*/

/*Filter
let genero_fantasia = LAIKA_movies.filter((Pelicula) => Pelicula.genero === "Fantasia");
    console.log(genero_fantasia);
*/    
    
/*Find
let genero_Aventura = LAIKA_movies.find((Pelicula) => Pelicula.genero === "Aventura");
    console.log(genero_Aventura);
*/



/*Practica 29/09/2026

console.log(LAIKA_movies[0].name);
console.log(LAIKA_movies[1].genero);
console.log(LAIKA_movies[2].description);

console.log("LAIKA tiene un total de " + LAIKA_movies.length + " peliculas en su filmografia.");
*/
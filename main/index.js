// CREACION Y SELECCION DE ESTRUCTURA HTML

const main$$ = document.querySelector('main');
const divPadre$$ = document.createElement('div');
divPadre$$.className = "divPadre";
main$$.appendChild(divPadre$$);
const input$$ = document.querySelector('input');




// FUNCION DEL FETCH
const get = async (url) => {
    try {
        const res = await fetch(url);
        const resJson = await res.json();
        return resJson;
    } catch (error) {
        console.log(error);
    }
}

//FUNCION QUE LLAMA A LOS POKEMONS Y LOS METE EN UN ARRAY 

let todosPokemons = [];
// console.log(todosPokemons);

const llamarPokemons = async () => {
    for (let i = 1; i < 152; i++) {
        let pokemonIndividual = await get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        todosPokemons.push(pokemonIndividual); 
    }
}

// FUNCION QUE PINTA TODOS LOS POKEMOS Y SUS CARACTERISTICAS

const pintar = async (todosPokemons) => {
    const divLimpio$$ = document.querySelector(".divPadre");
    divLimpio$$.innerHTML = "";
    for (const pokemon of todosPokemons) {
        const divHijos$$ = document.createElement(`div`);
        divHijos$$.className = "divHijo";
        divPadre$$.appendChild(divHijos$$);

        // ESTE BUCLE ME TRAE TODOS LOS TIPOS DE CADA POKEMON
        let tipos = [];
        for (const item of pokemon.types) {
            // console.log(pokemon.types);
            tipos.push(item.type.name);
        }

        divHijos$$.innerHTML = `
        <div class= "divHijo__top">
            <div class= "divHijo__top--img">
                <img src="${pokemon.sprites.versions["generation-i"]["red-blue"].front_gray}" alt="${pokemon.name}">
            </div>
            <div class= "divHijo__top--id">
                <h2>No.${pokemon.id}</h2>
            </div>
        </div>
        <div class= "divHijo__bot">
            <ol>
                <li class= "divHijo__bot--nombre">${pokemon.name.toUpperCase()}</li>
                <li class= "divHijo__bot--tipo">${tipos.join("/").toUpperCase()}</li>
                <li class= "divHijo__bot--ht">HT ${pokemon.height}0cm</li>
                <li class= "divHijo__bot--wt">WT ${pokemon.weight}lb</li>
            </ol>
    </div>`;
        
    }
}

// FILTRAR POR NOMBRE
const filtrar = () => {
    console.log(input$$.value);
    const pokemonfilter = todosPokemons.filter(
        (pokemon) => 
            pokemon.name.toLowerCase().includes(input$$.value.toLocaleLowerCase())
    );
    pintar(pokemonfilter);
};


// FUNCION QUE INICIA EN ORDEN TODAS LAS DEMAS FUNCIONES
const init = async () => {

    await llamarPokemons();

    await pintar(todosPokemons);

}
init();


input$$.addEventListener("input", filtrar);







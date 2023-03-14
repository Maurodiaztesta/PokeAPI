// TO-DO LIST
const divList$$ = document.querySelector('.divlist');
const botonAñadir$$ = document.querySelector(".divlist__formulario--button");
const inputLista$$ = document.querySelector(".divlist__formulario--input");
const ulLista$$ = document.querySelector(".divlist__resultadosUl");



const pintarLi = () => {
    const botonEliminar$$ = document.createElement("button");

    const liLista$$ = document.createElement("li");
    liLista$$.className = ("divlist__resultadosUl--li");
    botonEliminar$$.className = ("divlist__resultadosUl--boton");
    botonEliminar$$.textContent = ("X")

    liLista$$.textContent = (inputLista$$.value);

    botonEliminar$$.addEventListener("click", borrarDeLista);

    ulLista$$.appendChild(liLista$$);
    liLista$$.appendChild(botonEliminar$$);


    frase();
}



const borrarDeLista = (e) => {
    e.target.parentNode.remove();
    frase();
}

botonAñadir$$.addEventListener("click", pintarLi);


const frase = () => {
    const p$$ = document.querySelector('.divlist__vacio--p');
    if (ulLista$$.childElementCount === 0) {
        p$$.textContent ='All tasks are completed!';
    } else {
        p$$.textContent = '';
    }
}

frase();



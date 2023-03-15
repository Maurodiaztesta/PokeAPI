const urlCardBack = "./styles/utilities/Imagenes/cardback.png";

const card1 = "./styles/utilities/Imagenes/cartas/1.png";
const card2 = "./styles/utilities/Imagenes/cartas/2.png";
const card3 = "./styles/utilities/Imagenes/cartas/3.png";
const card4 = "./styles/utilities/Imagenes/cartas/4.png";
const card5 = "./styles/utilities/Imagenes/cartas/5.png";
const card6 = "./styles/utilities/Imagenes/cartas/6.png";
const card7 = "./styles/utilities/Imagenes/cartas/7.png";
const card8 = "./styles/utilities/Imagenes/cartas/8.png";
const card9 = "./styles/utilities/Imagenes/cartas/9.png";
const card10 = "./styles/utilities/Imagenes/cartas/10.png";
const card11 = "./styles/utilities/Imagenes/cartas/11.png";
const card12 = "./styles/utilities/Imagenes/cartas/12.png";
const card13 = "./styles/utilities/Imagenes/cartas/13.png";


const arrayCartas = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13];



let divPadre$$ = document.querySelector('.divPadre');
divPadre$$.className= 'flip--card';


let carta = () => {
    if (divPadre$$.childElementCount === 0) {
        let divCard$$ = document.createElement('div');
        divCard$$.className = "flip--card--inner";
        divPadre$$.appendChild(divCard$$);

        let imgCard$$ = document.createElement('img');
        imgCard$$.className = "flip-vertical-right";
        imgCard$$.setAttribute("src", arrayCartas[Math.floor(Math.random() * arrayCartas.length)]);
        divCard$$.appendChild(imgCard$$);

        // let imgCardBack$$ = document.createElement('img');
        // imgCardBack$$.className = "flip--card--inner--back";
        // imgCardBack$$.setAttribute("src", urlCardBack);
        // divCard$$.appendChild(imgCardBack$$);

        
    } 
    

};

let borrar = () => {
    if (divPadre$$.childElementCount === 1) {
        divPadre$$.innerHTML = "";
    }

};



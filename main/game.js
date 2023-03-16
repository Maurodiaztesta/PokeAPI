// CREAR VARIABLES CON TAMAÑO DE IMAGEN

const width = 230;
const height = 230;

// FUNCION PARA NUMERO RANDOM
let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
}

// FUNCION OBTENER DISTANCIA DE PUNTO A CLICK
let getDistance = (event, target) => {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// COLOCACION DE PUNTO EN EL MAPA
let targetMap = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

// FUNCION PISTAS
let getClue = (distance) => {
    if (distance < 30) {
        return "It's Burning!"
    } else if (distance < 40) {
        return "Really Hot!";
    } else if (distance < 50) {
        return "Hot!"
    } else if (distance < 70) {
        return "Warm"
    } else if (distance < 110) {
        return "Cold"
    } else if (distance < 200) {
        return "Very Cold"
    } else {
        return "Frozen";
    }
}

// EVENTO DE LA IMAGEN

const divPadre$$ = document.querySelector('.divPadreJuego');
const ruta$$ = document.querySelector('.divPadreJuego__img--ruta');
const texto$$ = document.querySelector('.divPadreJuego__texto--p')
let clicks = 0;

ruta$$.addEventListener("click", function () {
    let distanceClick = getDistance(event, targetMap);
    let distanceClue = getClue(distanceClick);
    texto$$.textContent = distanceClue;
    clicks++;
    if (distanceClick < 10) {
        alert(`You found the Pokemon in ${clicks} clicks!`);
        location.reload();
    }
})


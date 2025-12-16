//RENDU SIMULATEUR DE COMBAT JS//

//Présentation des Personnages//

let firstfighter = {  //premier personnage//
    name: "Tic",
    health: 150,
    attack: 30,
    precision: 0.7,
};
console.log(firstfighter);


let secondfighter = {  //second personnage//
    name: "Tac",
    health: 250,
    attack: 45,
    precision: 0.3,
};
console.log(secondfighter);


function attack() {  //foncition d'attaque//
    if (Math.random() < attack) {
        return attack;
    }
    return 0;
}
console.log(attack);

function precision() {  //fonction de précision//
    if (Math.random() < precision)  {
        return precision;
    }
}
while (firstfighter.health > 0 && secondfighter.health > 0) {  //boucle de combat
    health--
}
console.log(healthStatus)

let nome = "Tonhão" ; //nome e nivel de xp
let nivel = 6000 ;

if (nivel < 1000) {
    console.log("Ferro");
} else if (nivel >= 1001 && nivel <= 2000) {
    console.log("Bronze");
} else if (nivel >= 2001 && nivel <= 5000) {
    console.log("Prata");
} else if (nivel >= 5001 && nivel <= 7000) {
    console.log("Ouro");
} else if (nivel >= 7001 && nivel <= 8000) {
    console.log("Platina");
} else if (nivel >= 8001 && nivel <= 9000) {
    console.log("Ascendente");
} else if (nivel >= 9001 && nivel <= 10000) {
    console.log("Imortal");
} else if (nivel >= 10001) {
    console.log("Radiante");
}

console.log("O Herói de nome " + nome + "está no nível de " + nivel);
const userNumber = Math.floor((Math.random() * 6) +1);
console.log(userNumber)

const iaNumber = Math.floor((Math.random() * 6) +1);
console.log(iaNumber)

const btnRoll = document.getElementById("btn")


btnRoll.addEventListener("click", function(){
    //print valori generati
    document.getElementById("my-number").innerHTML = userNumber;
    document.getElementById("ia-number").innerHTML = iaNumber; 
    if ( userNumber > iaNumber){
        document.getElementById("outcome").innerHTML = "COMPLIMENTI HAI VINTO!!!!"
    } else if ( userNumber == iaNumber) {
        document.getElementById("outcome").innerHTML = "PAREGGIO, RIPROVIAMO!!"
    } else {
        document.getElementById("outcome").innerHTML = "MI DISPIACE HAI PERSO, SARA' PER LA PROSSIMA VOLTA!!"
    }
})



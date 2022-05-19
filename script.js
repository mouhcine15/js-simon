// dichiaro variabili
let arrRandom = [];
let numRandom;
let numeri = document.getElementById("numeri");
let verifica;
let punteggio = document.getElementById("punteggio");
let arrUtente = [];

// ciclo per creare 5 numri casuali
for (let i = 0; i < 5; i++) {
    
    numRandom = (Math.floor(Math.random() * 10)  +1);
    arrRandom.push(numRandom);
    
};
console.log(arrRandom);

numeri.innerHTML = arrRandom;



// timer per far scomparire i numeri
const divEl = document.getElementById("timer");
let seconds = 5;

const counting = setInterval(
    function () {
        divEl.innerHTML = seconds;
        if (seconds === 0) {
            numeri.style.display = 'none';
            clearInterval(counting);
            timer.style.display = 'none';
            const divAttesa = document.getElementById("timer2")
            let attesa = 30;
            const counting2 = setInterval(
            function () {
                divAttesa.innerHTML = attesa;
                if (attesa === 0) {
                    numeri.style.display = 'none';
                    timer2.style.display = 'none';
                    clearInterval(counting2);
                    for (let i = 0; i < 10; i++) {
                        verifica = parseInt(prompt("indovina i numeri"));
                        let presenza = arrRandom.includes(verifica);
                        console.log(presenza);
                        if (presenza == true) {
                            console.log("questo numero è giusto " + verifica);
                        } else {
                            console.log("questo numero è sbagliato " + verifica);
                        }
                    }

                } else {
                    attesa--;
                }

        }
        , 1000);
            } else {
                seconds--;
            }
    }
, 1000);


    







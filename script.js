// generare 5 numeri casuali
// stampare i numeri
// far partire un timer di 30 secondi
// far inserire i numeri all'utente

let arrRandom = [];
let numRandom;
let numeri = document.getElementById("numeri");

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
                    clearInterval(counting2);
                    

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


    







console.log('I am js and I am working')

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

STEPS

// 1. Generare numero random utetente da 1 a 6
// 2. Generare numero random per computer da 1 a 6
// 3. Confrontare i punteggi
// 3a - Se il numero utente è piu alto, dire che ha vinto l'utente
// 3b - Se il numero del computer, dire che ha vinto il computer
// 3c - ALTRIMENTI: dire che c'è un pareggio.

// */


const btn = document.getElementById('btn');

btn.addEventListener("click", function() {

    const userNumber = /* Genera numero casuale */ Math.floor(Math.random() * 6 + 1);
    // x 6 per portare il valore da 0 a 5,99 e + 1 per arrivare a 6
    const pcNumber = /* Genera numero number */ Math.floor(Math.random() * 6 + 1);


    const user = document.getElementById('user-score');
    const pc = document.getElementById('pc-score');


    if (userNumber > pcNumber) {
            console.log('Utente vince con numero:', userNumber);
            console.log('Computer perde con numero:', pcNumber);
            document.getElementById('hidden-one').style.display = 'block';
            document.getElementById('hidden-two').style.display = 'block';
            document.getElementById('hidden-three').style.display = 'none';
            document.getElementById('hidden-four').style.display = 'none';
            document.getElementById('hidden-tie').style.display = 'none';
        
        
    } else if(userNumber < pcNumber) {
            console.log('Utente perde con numero:', userNumber);
            console.log('Computer vince con numero:', pcNumber);
            document.getElementById('hidden-one').style.display = 'none';
            document.getElementById('hidden-two').style.display = 'none';
            document.getElementById('hidden-three').style.display = 'block';
            document.getElementById('hidden-four').style.display = 'block';
            document.getElementById('hidden-tie').style.display = 'none';
            
        
    } else {
            console.log('Utente pareggia con numero:', userNumber);
            console.log('Computer pareggia con numero:', pcNumber);
            document.getElementById('hidden-one').style.display = 'none';
            document.getElementById('hidden-two').style.display = 'none';
            document.getElementById('hidden-three').style.display = 'none';
            document.getElementById('hidden-four').style.display = 'none';
            document.getElementById('hidden-tie').style.display = 'block';        
    }

    user.innerHTML = userNumber;
    pc.innerHTML = pcNumber;

})



    






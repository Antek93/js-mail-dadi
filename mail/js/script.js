console.log('I am js and I am correctly linked')

const userEmail = prompt('Inserisci la tua email');
console.log('user email:', userEmail, typeof userEmail);

const members = [
    'antonio@savino.com',                       //posizione = 0
    'angelo@savino.com',                        //posizione = 1
    'ornella@savino.com',                       //posizione = 2
    'simona@savino.com',                        //posizione = 3
    'raffaele@savino.com',                      //posizione = 4
]

let mailAntonio = members [0]
console.log('mail di antonio:', members[0])
let mailAngelo = members [1]
console.log('mail di angelo:', members[1])
let mailOrnella = members [2]
console.log('mail di ornella', members[2])
let mailSimona = members [3]
console.log('mail di simona', members [3])
let mailRaffaele = members [4]
console.log('mail di raffaele', members [4])


let canAccess = false; //partiamo dal presupposto nessuno a prescindere può entrare

for(let i = 0; i < members.length; i++) {

    console.log('members[i]', members[i], typeof members[i])

    if(members[i] == userEmail) {
        canAccess = true //Tuttavia, qualora la mail inserita nel prompt è uguale ad una delle mail nella lista, cambio il valore della variabile con TRUE

    }


} 

// ADESSO IMPOSTO CHE IN CASO DI TRUE PUOI ACCEDERE

if(canAccess == true) {
    alert('Puoi entrare');

// ALTRIMENTI NON PUOI ACCEDERE 

} else {
    alert('Non puoi entrare')
}
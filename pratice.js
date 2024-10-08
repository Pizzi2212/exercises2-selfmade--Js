// Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console.

let nome = 'marco'

nome = 'luca'
console.log(nome)

// Scrivi un programma che prenda un numero e stampi sulla console se è positivo, negativo o zero.

let n1 = 10

if (n1 > 0) {
  console.log('positivo')
} else if (n1 < 0) {
  console.log('negativo')
} else {
  console.log('il numero è 0')
}

// Scrivi un programma che prenda un numero e stampi sulla console se è pari o dispari.

let n2 = 23

if (n2 % 2 === 0) {
  console.log('il numero è positivo')
} else {
  console.log('il numero è negativo')
}

// Scrivi un programma che prenda il punteggio di uno studente in input e stampi sulla console il suo livello (A, B, C, D). A parte da 90 punti, B ne richiede minimo 80 e C 70 punti.

let vote = 73

if (vote >= 90) {
  console.log('Il livello è A')
} else if (vote >= 80) {
  console.log('il livello è B')
} else if (vote >= 70) {
  console.log('il livello è C')
} else {
  console.log('il livello è D')
}

// Scrivi un programma che prenda l'età di una persona e stampi sulla console se può guidare.

let age = 17

if (age > 18) {
  console.log('può guidare')
}
{
  console.log('non può guidare')
}

// Scrivi un programma che prenda un numero da 1 a 7 e stampi sulla console il giorno della settimana corrispondente. Considera il caso in cui il numero possa essere errato.

let dayNumber = 9
let weekdDay

if (dayNumber === 1) {
  weekdDay = 'Lunedi'
} else if (dayNumber === 2) {
  weekdDay = 'Martedi'
} else if (dayNumber === 3) {
  weekdDay = 'Mercoledi'
} else if (dayNumber === 4) {
  weekdDay = 'Giovedi'
} else if (dayNumber === 5) {
  weekdDay = 'Venerdi'
} else if (dayNumber === 6) {
  weekdDay = 'Sabato'
} else if (dayNumber === 7) {
  weekdDay = 'Domenica'
} else {
  weekdDay = 'questo giorno non esiste'
}

console.log(weekdDay)

// Crea un oggetto "libro" con proprietà come "titolo", "autore" e un oggetto annidato "editore" con le proprietà "nome" e "anno"

const book = {
  title: 'HarryPotter',
  author: 'JKRowling',
  editor: {
    name: 'mondadori',
    year: '2000',
  },
}

console.log(book)

// Scrivi un programma che prenda l'età e una variabile booleana che indica se la persona ha una patente, quindi stampi sulla console se la persona è maggiorenne e ha una patente

let age2 = 18
let driveCertificate = true

if (age2 >= 18 && driveCertificate === true){
     console.log("è maggiorenne ed ha la patente")
}
else {
    console.log ("non è sia maggiorenne che con la patente")
}


// Crea un oggetto "persona" con le proprietà "nome" e "età".

const persona = {
    nome : "mario",
    etò : 22,
}

// Accedi alle proprietà "nome" e "età" dell'oggetto "persona" e stampale in console.

console.log("il nome è ," , persona.nome)
console.log ("l'età è ,", persona.etò , "anni")

// Modifica la proprietà "eta" dell'oggetto "persona" e stampa l'oggetto aggiornato in console.

persona.etò = 33

console.log ("la nuoava etò è , ",persona.etò , "anni")

// Aggiungi una nuova proprietà "sesso" all'oggetto "persona" e stampa l'oggetto aggiornato in console.

persona.sesso = "maschio"

console.log ("la persona è ,", persona)

// Rimuovi la proprietà "eta" dall'oggetto "persona" e stampa l'oggetto aggiornato in console.

delete persona.etò 

console.log("ora la persona è ,", persona)

// Verifica se l'oggetto "persona" ha la proprietà "sesso" e stampa un messaggio appropriato in console.

if ("sesso" in persona ){
    console.log("esiste la proprietò sesso")
}
else {
    console.log("non esistela proprietà sesso")
}

// Crea una copia dell'oggetto "persona" in un nuovo oggetto "personaCopia" e stampa entrambi gli oggetti in console.

const personaCopia = persona

console.log(personaCopia)
console.log(persona)
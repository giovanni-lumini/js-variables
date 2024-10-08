const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'Città'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
/* const cityIndex = 0;
console.log(cityIndex); */ // Output: 4
const cityIndex = city.indexOf("York")
console.log(cityIndex);

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
/* const citySubstring = '';
console.log(citySubstring); */ // Output: "York"
const citySubstring = city.substring(4);
console.log(citySubstring); 

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
/* const cityReplaced = '';
console.log(cityReplaced); */ // Output:  "New Delhi"
const cityReplaced = city.replace("York","Delhi");
console.log(cityReplaced);

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
/* const cityNameConcat = '';
console.log(cityNameConcat); */ // Output: "New York City"
const cityNameConcat = `${city} City`;
console.log(cityNameConcat);

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
/* const upperCaseHello = '';
console.log(upperCaseHello); */ // Output: "HELLO"
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello);
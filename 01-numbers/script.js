const numOne = 8; // NON MODIFICARE QUESTA RIGA
const numTwo = 16; // NON MODIFICARE QUESTA RIGA
const numThree = 32; // NON MODIFICARE QUESTA RIGA

// Sostituisci NaN di seguito utilizzando
// gli operatori numerici di Javascript

// 1. Imposta questa variabile come somma di numOne e numTwo
/* const numOnePlusNumTwo = NaN;
console.log(numOnePlusNumTwo); */ // Output: 24
const numOnePlusNumTwo = numOne+numTwo
console.log(numOnePlusNumTwo);

// 2. Imposta questa variabile come prodotto di numThree e numTwo
/* const numThreeTimesNumTwo = NaN;
console.log(numThreeTimesNumTwo); */ // Output: 512
const numThreeTimesNumTwo = numThree*numTwo;
console.log(numThreeTimesNumTwo);

// 3. Imposta questa variabile come divisione di numThree per numOne
/* const numThreeDividedByNumOne = NaN;
console.log(numThreeDividedByNumOne); */ // Output: 4
const numThreeDividedByNumOne = numThree/numOne;
console.log(numThreeDividedByNumOne);

// 4. Imposta questa variabile come differenza tra numThree e numOne
/* const numThreeMinusNumOne = NaN;
console.log(numThreeMinusNumOne); */ // Output: 4 /* è sbagliato 4, fa 24 */
const numThreeMinusNumOne = numThree-numOne;
console.log(numThreeMinusNumOne);

// 5. Imposta questa variabile come somma di numOne, numTwo e numThree
/* const sum = NaN;
console.log(sum); */ // Output: 56
const sum = numOne+numTwo+numThree;
console.log(sum);

// 6. Imposta questa variabile come somma di numOne, numTwo, numThree diviso numOne
/* const numBytes = NaN;
console.log(numBytes); */ // Output: 7
const numBytes = (numOne+numTwo+numThree)/numOne;
console.log(numBytes);
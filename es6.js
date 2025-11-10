const numbers = [1, 2, 3];
let newNumber = 4;
const addNumber = (numList, num) => [...numList, num];
const updatedNumbers = addNumber(numbers, newNumber);
console.log(`Original numbers: ${numbers}`);
console.log(`After adding ${newNumber}, the new list is: ${updatedNumbers}`);
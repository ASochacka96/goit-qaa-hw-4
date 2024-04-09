//Tablica liczb podwojonych

const doubleNumbers = (numbers) => {
    return numbers.map(number => number * 2);
  };
  
  // Przykładowe użycie funkcji
  const numbers = [2, 5, 10, 12];
  const doubledNumbers = doubleNumbers(numbers);
  
  console.log("Original array:", numbers);
  console.log("Double array:", doubledNumbers);







//Tablica obiektów reprezentujących studentów

const onlyNames = (students) => {
    return students.map(student => student.name);
};

//Przykładowe użycie funkcji
const students = [
    {name: "June", subject: "Biology", score: 90},
    {name: "Peter", subject: "Math", score: 96},
    {name: "John", subject: "Art", score: 88},
    {name: "Catherine", subject: "History", score: 89},
];
const names = onlyNames(students);

console.log("Original array: ", students);
console.log("An array containing only names: ", names); 
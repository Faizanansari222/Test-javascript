//Question 01

// let fruits = ['Mango', 'Orange', 'Banana', 'apple', 'Staberry']

// for (let i = 0; i<fruits.length;i++){

//     console.log(fruits[i]);
// }

//Question 02

// let items = ['cake','apple pie','cookies','chips','patties']
// let userInput = prompt('Search')

// for(let i=0; i<=items.length;i++){
// if
// (userInput.toLowerCase() === items[i]){

//     console.log('Available');
//     break;
// }else if( userInput.toLowerCase()=== ''){
// console.log('Enter Something');

// }else if(userInput.toLowerCase() !== items[i]){
//     console.log('sorry not available')

// }
// }

//I Question 03

// let arr = [12,45,3,22,34,50]
// let userInput = +prompt('Enter Number')

// for(i = 0; i<=arr.length; i++){

//     if (userInput === arr[i]){
//         console.log( arr[i] );

//     }else if (userInput === ''){

//         console.log('enter a Number');
//     }
// }

//Question 04

// let n = 5;
// let m = 5;

// let string = "";

// for (let i = 0; i < n; i++) {

//   for (let j = 0; j < m; j++) {

//     if (i === 5) {
//       string += "*";
//     } else {
//       if (j === 5) {
//         string += "*";
//       } else {
//         string += "";
//       }
//     }
//   }

//   //   string += "\n";
// }
// console.log(string);

//Question 05

// let firstNumber = +prompt("Enter First Number");
// let operator = prompt("Operator");
// let secondNumber = +prompt("Enter Second Number");

// if (operator === "-") {
//   console.log(firstNumber - secondNumber);
// } else if (operator === "+") {
//   console.log(firstNumber + secondNumber);
// } else if (operator === "*") {
//   console.log(firstNumber * secondNumber);
// } else if (operator === "/") {
//     console.log(firstNumber / secondNumber);
// }

//Question 06

// let userInput = prompt('enter any string');

// function palindromeValue (userInput){
//     console.log(userInput.split('').reverse().join(''));
//     if(userInput.split('').reverse().join('') === userInput){
//         console.log('this is palindrome');
//     }else{
//         console.log('chalo shaba katto');
//     }

// }
// palindromeValue(userInput)

//Question 07

//  function celsiusToFahrenheit() {
//     let celsius = +prompt('Enter Celsius Temperature')
//     let b = (celsius * 9 / 5) + 32
//     console.log(`${celsius}°C is ${b}°F`);
// }

// celsiusToFahrenheit()

// function FahrenheitToCelsius() {
//     let Fahrenheit = +prompt('Enter Fahrenheit Temperature')
//     let b = (Fahrenheit * 9 / 5) + 32
//     console.log(`${Fahrenheit}°F is ${b}°C`);
// }

// FahrenheitToCelsius()

//Queston 08





//  const books = [
//      { title: "book1", author: "author1", price: 20 },
//      { title: "book2", author: "author2", price: 30 },
//      { title: "book3", author: "author3", price: 25 },
//      { title: "book4", author: "author4", price: 15 },
//    ];
  
//    function filterBooks(bookArray, maxPrice) {
//      const affordableBooks = [];
  
//      for (const book of bookArray) {
//        if (book.price <= maxPrice) {
//          affordableBooks.push(book);
//        }
//      }
  
//      return affordableBooks;
//    }
  
//    const maxPrice = +prompt('Enter Price');
//    const affordableBooks = filterBooks(books, maxPrice);
  
//    if (affordableBooks.length > 0) {
//      console.log(`Books with prices less than or equal to ${maxPrice}:`);
//      console.log(affordableBooks);
//    } else {
//      console.log(`No books found with prices less than or equal to ${maxPrice}`);
//    }

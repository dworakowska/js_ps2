// //ARRAY: [1,6,23,8,4,8,3,7]
// // 1. Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
    
// function returnSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         sum += element;
//     }
//     return sum;
// }
    
// let liczby = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(returnSum(liczby));

// // 2. Create a function that returns sum of first and last elements of given array.

// function sumFirstLast(array) {
//     return array[0] + array[array.length-1];
// }


// let liczby = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(sumFirstLast(liczby));

// // 3. Create a function that takes a number and return factorial of that number.

// function factorial(number) {
//     let result = 1;
//     let i = 1;
//     while (i <= number) {
//         result = result * i;
//         i++;
//     }
//     return result;
// }


// console.log(factorial(7));

// // 4. Create a function that returns given array in reverse order. // no build in functions  


// function reverse(array) {
//     let reversed = [];
//     for (let i = array.length-1; i >= 0; i--) {
//         let element = array[i];
//         reversed.push(element);
//     }
//     return reversed;
// }

// let liczby = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(reverse(liczby));



// // 5. Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// function newArray(array) {
//     let result = [];
//             for (let i = 0; i < array.length; i+=2) {
//                 result.push(liczby[i] + liczby[i + 1]);
//             }
//             return result;
// }
// let liczby = [1, 3, 4, 1, 0, 3];
// console.log(newArray(liczby));

// // 6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// function newArray(array) {
//         let result = [];
//                 for (let i = 0; i < array.length; i+=2) {
//                     if (i+1 < array.length) {
//                         result.push(liczby[i] + liczby[i + 1]);
//                     } else {
//                         result.push(liczby[i] * 2);
//                     } 
//                 }
//                 return result;
//     }

//     let liczby = [1, 3, 4, 1, 0];
//     console.log(newArray(liczby));


    
// // 7. Create a function the return one random element from given array. // use random function 

// function getRandom(array) {
//     let random = Math.random(); // random zwraca pomiedzy 0...1
//     let number = random * 1000;
//     let index = parseInt(number) % array.length; // random index z przedzialu 0..<numbers.length>

//     return array[index]; // zwracamy element z losowego indexu
//   }


// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(getRandom(numbers));
    

// // 8. Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

// function returnLowest(array, n) {
//     let minimum = array[0];
//     while (n) {
//         let element = getRandom(array);
//         if (element < minimum) {
//             minimum = element;
//         }
//         n--;
//     }
//     return minimum;
// }

// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// let n = 100;

// console.log(returnLowest(numbers, n));
    
    
// // 9. Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 

// function randomRemoves(array) {
//     let elements = [];
//     while (array.length > 0) {
//         let element = getRandom(array);
//         elements.push(element);
//         console.log(element);
//         let index = array.indexOf(element);
//         array.splice(index, 1);
//     }
//     return elements;
// }

// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(randomRemoves(numbers));

// // 10. Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// // [1,6,23,8,4,8,3,7];

// function randomAddSubstract(array) {
//     let result = 0;

//     for (let i = 0; i < array.length; i+=2) {
//         let a = array[i];
//         let b;
//         if (array[i+1] === undefined) {
//             b = 0;
//         } else {
//             b = array[i+1];
//         }
         
//         let random = Math.random();
//         let number = random * 10;
//         let reszta = parseInt(number) % 2;

//         if (reszta === 0) {
//             result += a+b;
//         } else {
//             result += a-b; 
//         }
//     }
//     return result;
// }

// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(randomAddSubstract(numbers));

// // 11. Create a function that will return the current day name in Polish. 

// function getWeekdayName(date) {
//     let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
//     return days[date.getDay()];
// }

// let today = new Date();
// console.log(getWeekdayName(today));


// // 12. Create a function that tells us how many days till Friday 

// function daysTillFriday(date) {
//     let result = 5 - date.getDay();
//     if (result >= 0) {
//         return result;
//     } else {
//         return (7 - date.getDay()) + 5;
//     }
// }

// console.log(daysTillFriday(new Date()));

// // 13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

// function arithmeticOperations(a, b) {
//     let dodawanie = a + b;
//     let odejmowanie = a - b;
//     let mnozenie = a * b;
//     let dzielenie = a / b;
//     return {
//         dodawanie, odejmowanie, mnozenie, dzielenie
//     }
// }

//     console.log(arithmeticOperations(2, 3));
    
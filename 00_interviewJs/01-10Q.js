//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

let str="Write a function findLongestWord that takes a string"
let arr=str.split(" ");
arr=arr.sort((a,b)=>b.length-a.length);
let ans=arr[0]
// console.log(ans);

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.



//*-------------------------------------------
//*  Programming Question: Hash Tag Generator
//*-------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

let string="let Pplay ball"
let array=string.toLowerCase().split(" ")


//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.


//*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.
let countChar=(str,char)=>{
    let count=0;
    for (let index = 0; index < str.length; index++) {
       if(str[index]===char) count++;
    }
    return count;
}
let sol=countChar("Occurrences","r");
console.log(sol);

//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".



//*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.


  // Example usage:
  // console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
  
  //todo Requirements:
  //? The function should take an array of numbers as input.
  //? It should return a new array with the numbers sorted in ascending order.
  //? The original array should remain unchanged.
  //? You are not allowed to use the built-in sort() method.
  
  // Note
  //// Without a comparator function, the sort method sorts the array elements as strings by default, which might not always yield the correct numeric sorting, especially for numbers with more than one digit
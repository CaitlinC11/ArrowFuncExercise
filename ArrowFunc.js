const double = arr => arr.map(val => val * 2); //ES2015 one-liner version of: 
// function double(arr) {
    // return arr.map(function(val) {
    //   return val * 2;
    // });
//   }

 const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0); // ES2015 with arrow functions from the following code:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }
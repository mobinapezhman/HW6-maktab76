// Create a function that takes in an array and returns an array of the accumulating
// sum.



function accumulating(array) {
    let Sum = 0;
    return array.map(sum => Sum += sum)
}
console.log(accumulating([]));
console.log(accumulating([1, 2, 3, 4]));
//   console.log(accumulating([1,5,7]));
//   console.log(accumulating([1, 0, 1, 0, 1]));
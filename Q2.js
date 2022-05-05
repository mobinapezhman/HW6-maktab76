// Given an array of five values, calculate the average star rating, rounded to
// two decimal places. The array contains user votes per star, so the first element
// [0] contains the number of 1-star ratings and the last element [4], the
// number of 5-star ratings.
// Return the average score in [brackets], followed by a space and asterisks' * to represent
// the star rating, rounded to the nearest whole star.



function Rating(array) {
    let sumOfArray = array.reduce((sum, value) => {
        return sum + value
    }, 0);


    let sumOfProduct = array.map((element, index) => {
        index = ++index;
        return element * index;
    });

    let resultOfProduct = sumOfProduct.reduce((acc, ele) => {
        return acc + ele
    }, 0);

    let division = resultOfProduct / sumOfArray;
    let roundedNum = Math.round(division);
    let roundedWith2Num = Array(division.toFixed(2));
    let a = JSON.stringify(roundedWith2Num)
    return a + "".padStart(roundedNum, "*");

}
console.log(Rating([55, 67, 98, 115, 61]));
// console.log(Rating([0, 2, 0, 1, 23]));
// console.log(Rating([16, 17, 23, 40, 45]));
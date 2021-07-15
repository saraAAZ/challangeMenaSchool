/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]  => [6,[[30,10],5]9]
 
 */
// let reverseArray = [];
function reverseNestedArray(array) {
    //TODO
    //this for loop to enter the elemetn in the array with if ftatment in
    // next line to ckeck if this element is an array   
    for(let i = 0 ; i < array.length ; i++){
        if (typeof array[i] ==="object"){
            array[i]= reverseNestedArray(array[i]);
            // if this element in the array is an array we use the recursive function
            // to enter the the array in the main array  
        }
    }
    //here we check if the length of the array doesnt equal zero so we have element in the array 
    //so we user a bulit-in metof called reverse() used to reverse the order of elements in the array 
    if (array.length != 0 ) {
        return array.reverse();
    }
}  
let array = [9,[5,[10,30]],6];
// reverseNestedArray(array);
console.log(reverseNestedArray(array));
module.exports = reverseNestedArray;
/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */

function reverseNestedArray(array) {
    //TODO
    let reverseArray = [];
    for(let i = array.length-1 ; i >= 0 ; i--){
        if (array.length != 0 ){
            reverseArray.push(array[i]) ;
        }
    }   
    console.log(reverseArray); 
}


module.exports = reverseNestedArray;
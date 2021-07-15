/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true
contains(array,-1)=> return false 
*/

function arrayContaine(array, num){
    if (array.length == 0)
    {
      console.log(1);
      console.log(array);
        return false;
        
    }else if (typeof array[array.length-1] ==="object"){
       console.log(2);
       console.log(array);
        array[array.length-1] = arrayContaine(array[array.length-1],num);
        
    }else{
        if(array.includes(num) && array.length!=0){
          console.log(3);
           console.log(array);
            return true;
        }else{
       
            return false;
        }
    }
}
array=[1,2 ,3,[5], [9]];
console.log(arrayContaine(array, 9));   
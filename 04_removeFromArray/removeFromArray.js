
let value = 3

let arr = [1, 2, 3, 4, 5, 3]
const removeFromArray=function(arr,value){
  let newArray = arr.filter(item => item !== value);
  return newArray;
}

console.log(removeFromArray(arr,3))
// Do not edit below this line
module.exports = removeFromArray;

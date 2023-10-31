const repeatString = function(string,n) {
    let newString = "";
    if (n>-1){
    while (n > 0) {
      newString += string;
      n--;
    }
    return newString;
  }
             else{
             return 'ERROR'
             }};
             
             
             
             
             
             module.exports = repeatString;
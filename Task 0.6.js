
function getMaxNum() {
      let max = -Infinity;

      for (let i = 0; i < arguments.length; i++) {
         if (arguments[i] > max) {
                 max = arguments[i];
         }
     }  
         return  max;
}
    console.log(getMaxNum(4, 8, 69, 21))


function getMaxNum(input) {
      let max = -Infinity;

      for (let i=0; i < arguments.length; i++) {
         if (arguments[i] > max) {
                 max = arguments[i];
         } return  max;
    }
}
    console.log(getMaxNum(5, 8, 10, 21))

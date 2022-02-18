//area of triangle

function areaOfTriangle(side1, side2, side3) {
   
   const s = (side1 + side2 + side3) / 2;
   return Math.sqrt( s* (s - side1) * (s - side2) * (s - side3));   
}

console.log(areaOfTriangle(9, 15, 22));

//area of triangle
function areaOfTriangle(a, b, c) {}
   let s = (a + b + c) / 2;
   return Math.sqrt( s* (s - a) * (s - b) * (s - c));

console.log(areaOfTriangle(a, b ,c));

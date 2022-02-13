function celToFahr(celsius) {
    let celTemp = celsius;
    let celToFahr = celTemp * 9 / 5 +32;
      return celToFahr;
}
console.log(celToFahr());

function fahrToCel(fahrenheit){
    let cel = fahrenheit * 5 / 9 - 32;
    return cel;
}
console.log(fahrToCel());


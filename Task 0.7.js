function celToFahr(celsius) {
    const celTemp = celsius;
    const celToFahr = (celTemp / 5) * 9 + 32;
      return celToFahr;
}
console.log(celToFahr(50));

function fahrToCel(fahrenheit){
    const cel = ((fahrenheit - 32) * 5) / 9;
    return cel;
}
console.log(fahrToCel(89));


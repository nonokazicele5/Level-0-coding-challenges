function convertToTime(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + "hrs " + "," + minutes + " mins";
}

console.log(convertToTime(620))
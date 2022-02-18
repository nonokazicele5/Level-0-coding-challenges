function convertToTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + "hrs " + "," + minutes + " mins";
}

console.log(convertToTime(18092))
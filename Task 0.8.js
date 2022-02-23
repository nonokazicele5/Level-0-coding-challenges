function convertToTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    
    if (hours || minutes === 1)    {
    return hours + "hr" + "," + minutes+ " min";
 } else {
    return hours + "hrs" + "," + minutes + "mins";
 }
}
console.log(convertToTime(62))
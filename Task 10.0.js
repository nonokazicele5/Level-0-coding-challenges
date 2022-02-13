let y = "pineapples";
let z= "piper";

const commonCharacters = function (string1 ,string2) {
 let duplicateCharacter = "";
    for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
    if (string2.indexOf(string1[i]) !== -1) {
       duplicateCharacter += string1[i];
    }
  }
}
return [...duplicateCharacter];
};

console.log(commonCharacters(x, y));
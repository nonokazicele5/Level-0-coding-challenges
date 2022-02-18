function printVowels(str) {
      const vowels = new Set();

    for ( let i = 0; i < str.length; i++)   {
         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
              
            vowels.add(str[i]);
    }
}
       for (let item of vowels)  {
           console.log(item);
       }             
    }
    
       printVowels("Peter Adams picked a pack of prickled peppers")
              

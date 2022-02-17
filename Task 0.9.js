function printVowels (input) {
   let output = [];

   for (i=0; i < input.length; i++) {
       switch (input[i])  {
           case 'a':
               output.push(input[i]);
               break;
           case 'e':
               output.push(input[i]);
               break;
          case 'i':
              output.push(input[i]);
              case 'o':
                output.push(input[i]);
                break;
            case 'u':
                output.push(input[i]);
                break;
           case 'A':
               output.push(input[i]);
           case 'E':
                output.push(input[i]);
                break;
            case 'I':
                output.push(input[i]);
                break;
           case 'O':
               output.push(input[i]);
               case 'U':
                output.push(input[i]);
                break;
            
           }
     }
     return "Vowels: " + output.toString();
 }
          
         console.log( printVowels( "Peter Piper picked a pack of peppers"))


// chat answer 
function isPangram(sentence) {
    // Convert the sentence to lowercase to make the comparison case-insensitive
    const lowercaseSentence = sentence.toLowerCase();
  
    // Define the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    // Iterate through each letter in the alphabet
    for (let letter of alphabet) {
        // Check if the letter is present in the sentence
        if (lowercaseSentence.indexOf(letter) === -1) {
            // If any letter is missing, it's not a pangram
            return false;
        }
    }
  
    // If all letters are present, it's a pangram
    return true;
  }
  
  // Example usage
  const exampleSentence = "The quick brown fox jumps over the lazy dog";
  console.log(isPangram(exampleSentence)); // Output: true


  // My answer  
function isPangram(sentence){

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseSentence = sentence.toLowerCase()
  
    let sizeOfAlphabet = 0
  
    const uniqueSentence = new Set(lowercaseSentence)
  
    for(let l of uniqueSentence){
       if(alphabet.includes(l)){
         sizeOfAlphabet ++
       }
      }
      if(sizeOfAlphabet === 26){
        return true
      } else {
        return false
      }
    } 
  
  console.log(isPangram(" quick brown fox jumps over lazy dog"))
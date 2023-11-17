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
  

// Anagram

function isAnagram(word1, word2){
  
    const sortedWord1 = word1.split('').sort().join()
    const sortedWord2 = word2.split('').sort().join()
  
    console.log(sortedWord1)
    console.log(sortedWord2)
  
  
    if(sortedWord1 === sortedWord2){
      return true
    } else {
      return false
    }
  }
  
  console.log(isAnagram('rate', 'tare'))
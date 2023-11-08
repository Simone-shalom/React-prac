function longestWord(wordss){
    const words= wordss.split(' ')
    let longestWord = ''
  
    for(let word of words){
      if(word.length > longestWord.length){
        longestWord = word
      }
    }
  
    return longestWord
  }
  
  console.log(longestWord('I love coding in javascript, no im joking lol'))
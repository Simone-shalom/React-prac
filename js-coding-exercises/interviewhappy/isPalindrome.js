
function isPalindrome (str){
    const reversedString = str.split('').reverse('').join('')
    
    if(str === reversedString){
      return true
    } else {
      return false
    }
  }
  
  console.log(isPalindrome('racecar'))
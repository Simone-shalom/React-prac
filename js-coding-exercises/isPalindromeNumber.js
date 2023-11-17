
function isPalindrome(number){
    const reversedNumber = number.toString().split('').reverse().join("")
    return number.toString() === reversedNumber
  }
  
  console.log(isPalindrome(112211))
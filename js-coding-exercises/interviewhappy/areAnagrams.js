
function areAnagrams(str1, str2){
  
    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')
  
    if(sortedStr1 === sortedStr2){
      return true
    } else {
      return false
    }
  }
  
  console.log(areAnagrams('listen', 'silent'))
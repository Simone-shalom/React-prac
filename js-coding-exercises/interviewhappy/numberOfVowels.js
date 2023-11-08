
function numberOfVowels(str){

    const vowels = ['a', 'e', 'i', 'o', 'u']
  
    let count = 0
  
    for(let el of str){
      if(vowels.includes(el)){
        count ++
      }
    }
    return count
  }
  
  console.log(numberOfVowels('aaasawanaa'))
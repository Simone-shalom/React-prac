console.log(findVowels('addagregwo'))


//if 
function findVowels(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let count = 0

  for (let w of word){
    if(vowels.includes(w)){
      count ++
    }
  }

  return count

}

// reduce
function findVowels(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

  return word.split('').reduce((acc, current) => vowels.includes(current) ? acc+1 : acc, 0)

}
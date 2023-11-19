
// Return number of unique elements in array

function removeDuplicates(array){

    const uniqueArray = [...new Set(array)]
  
    const numberOfUniqeElements = uniqueArray.length
  
    return numberOfUniqeElements
  }
  
  console.log(removeDuplicates([2,2,3,5,1,1,1,5]))
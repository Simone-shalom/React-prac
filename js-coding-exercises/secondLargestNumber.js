
// second largest number


function secondLargest(array){

    const sortedArray = array.sort((arr1,arr2) => arr1 < arr2 ? -1 : 1).reverse()
    const secondLargestNumber = sortedArray[1]
    
    return secondLargestNumber
  }
  
  console.log(secondLargest([12,4,42,51,2,6]))

// rotate array by K

function rotateArray(array, k){

    const length = array.length
  
   const kElements = array.splice(length-k, k)
  
    array.unshift(kElements)
  
    return array.flat()
  }
  
  console.log(rotateArray([1,23,4,5,6],3))
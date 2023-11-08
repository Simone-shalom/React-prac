
function largestNumber(arr){
    let largest = arr[0]
  
    for(let ar of arr){
      if(ar > largest){
        largest = ar
      }
    }
    return largest
  }
  
  console.log(largestNumber([1, 2, 100,5 ,6, 12, 20]))
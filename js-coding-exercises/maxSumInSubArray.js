
// Return maxSum of subarray in Array

function maxSubArray(array){

    let maxSum = array[0]
  
    for(let i =0; i< array.length; i++){
      let currentSum = 0
      for(let j = i; j<array.length; j ++){
         currentSum = currentSum +array[j]
        if(currentSum > maxSum){
          maxSum = currentSum
        }
      }
    }
  return maxSum 
  }
  
  console.log(maxSubArray([-2,2,-3,-5,1,1,1,5]))
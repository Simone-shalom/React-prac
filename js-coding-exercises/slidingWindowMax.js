// sliding window max

function slidingMax(array,k ){

    const result = []
  
    for(let i =0; i<=array.length-k;i++ ){
      let max = array[i]
      for(let j =1; j < k; j++){
        if(array[i + j] > max){
          max = array[i+ j]
        }
      }
      result.push(max)
    }
  
    return result
  }
  
  console.log(slidingMax([1,2,5,6,-2,5], 3))
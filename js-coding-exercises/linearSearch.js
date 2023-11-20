

// Linear search 
function search(array, target){

    for(let i = 0; i<= array.length; i++){
      if(array[i] === target){
        return i
      }
    }
    return -1
   }
   
   console.log(search([1,5,2,6,8],2))


   
//global Search


function searchG(array, target){

    const result = []
  
    for(let i = 0; i<= array.length; i++){
      if(array[i] === target){
        result.push(i)
      }
    }
    if(result ===0 ){
      return -1
    } else {
      return result
    }
   }
   
   console.log(searchG([1,5,2,6,8,6,3,6],6))

   //search with find method

function searchF(array, target){

    const result = array.find((arr) => arr=== target)
  
    return array.indexOf(result)
  }
  
  console.log(searchF([1,4,5,6,7],6))
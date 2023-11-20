

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
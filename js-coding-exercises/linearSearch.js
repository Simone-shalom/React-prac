

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
// Infinite curring

function add(a){
    return function(b){
      if(b) return add(a+ b)
      return a
    }
  }
  
  console.log(add(2)(4)(32)(2)())
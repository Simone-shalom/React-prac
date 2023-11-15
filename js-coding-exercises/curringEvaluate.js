
function curringEvaluate(name){
    return function(x){
      return function(y){
        if(name === 'sum'){
          return x + y
        } else if(name === 'multiply') {
          return x * y  
        } else if(name === 'divide') {
          return x / y  
        } else if(name === 'substract') {
          return x - y  
        } 
      }
    }
  }
  
  const result = curringEvaluate('multiply')(5)(2)
  
  console.log(result)

function scopeExample(a){

    return function(b){
      return function(c){
        return a+b+c
      }
    }
    
  }
  
  console.log(scopeExample(4)(2)('x'))
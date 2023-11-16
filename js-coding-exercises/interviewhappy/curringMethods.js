
function addFive(a){
    return a + 5
  }
  
  function substractTwo(a){
    return a - 2
  }
  
  function multiplyFour(a){
    return a * 4
  }
  
  function doCalc(method){
    return function(a){
      if(method === addFive){
        return a + 5
      } else if(method === substractTwo){
        return a - 2
      } else if (method===multiplyFour) {
        return a * 4
      }
    }
  }
  
  console.log(doCalc(addFive)(10))
  
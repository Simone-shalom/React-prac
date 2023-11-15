
function closureFn(){
    const count  =2
  
    function displayCount(num){
      console.log(count + num)
    }
  
    return displayCount
  }
  
  closureFn()(3)
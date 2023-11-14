function closureFn(){

    const count = 'count 22'
    
      function displayCount (){
        console.log(count)
      }
    
      return displayCount
    
    }
    
    const myFn = closureFn()
    
    myFn()
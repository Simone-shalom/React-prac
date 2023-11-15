
function callback(cb){
    cb()
  }
  
  function doSth(){
    console.log('IM a callback')
  }
  
  callback(doSth)
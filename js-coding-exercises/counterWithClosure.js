
function counter(){
    const count = 1
  
    function addNum(num){
      return count +num
    }
    function minusNum(num){
      return count - num
    }
    return {addNum, minusNum}
  }
  
  const c = counter()
  console.log(c.addNum(2))
  console.log(c.minusNum(2))
  
  
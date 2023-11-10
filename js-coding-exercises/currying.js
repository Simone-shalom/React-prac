
const multiply = (a, b) => {
    return a*b
  }
  const myresult = multiply(3,4)
  
  console.log(myresult)
  
  const curriedMultiply =(a)=> {
    return function(b){
      return a*b
    }
  }
  
  const myCurriedResult = curriedMultiply(3)(4)
  console.log(myCurriedResult)
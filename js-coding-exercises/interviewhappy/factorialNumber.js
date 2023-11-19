
function factorial(number){

    if(number === 0){
     return 1 
    }
  
    let factorialValue = 1
  
   for(let i = 1; i<= number; i++){
     factorialValue *= i
   }
  
   return factorialValue
  }
  
  console.log(factorial(1))

  // recursion approach 
  
function factorial(n){

  if(n ===0){
    return 1
  } else {
    return n * factorial(n-1)
  }
}
console.log(factorial(5))
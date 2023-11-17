function fiboSeq(number){

    if(number >= 1){
      return fiboSeq(number-1) + fiboSeq(number -2)
    } else {
      return 1
    }
  }
  
  console.log(fiboSeq(10))

// fibo seq 
// 1,1,2,3,5,8,13
// number = (number-1) + (number-2)

function fibboSeq(number){

  if(number > 1){
    return fibboSeq(number-1) + fibboSeq(number-2)
  } else {
    return 1
  }
}

console.log(fibboSeq(5))
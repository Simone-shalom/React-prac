function fiboSeq(number){

    if(number >= 1){
      return fiboSeq(number-1) + fiboSeq(number -2)
    } else {
      return 1
    }
  }
  
  console.log(fiboSeq(10))
//This code 

const calc ={
    total:0,
    add(a){
      this.total += a
      return this
    }
  }
  
  
  const result = calc.add(10)
  console.log(result.total)
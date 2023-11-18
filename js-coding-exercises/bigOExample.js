
function funnyNumber(array){
    for(let i =0; i<array.length; i++){
      if(i===3){
        return array[i]
      }
    }
  }
  
  const funnyNumber2 =(array)=> {
    return array[3]
  }
  
  console.time('funnyNumber')
  console.log(funnyNumber([1,2,34,5]))
  console.timeEnd('funnyNumber')
  
  
  console.time('funnyNumber2')
  console.log(funnyNumber2([1,2,34,5]))
  console.timeEnd('funnyNumber2')
  
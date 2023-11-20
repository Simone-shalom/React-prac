// hamming distance

function hammingDistance(x, y ){

    if(x.length !== y.length){
      console.log('Strings must be same length')
      return
    }
  
    const hammedX = new Set(x.split(''))
    const hammedY = y.split('')
  
    const hammedYSet = [...new Set(hammedY)]
  
    let same = 0
  
    for (let l of hammedX){
      if(hammedYSet.includes(l)){
        same ++
      }
    }
  
   const distance = y.length - same
  
    return distance
  }
  console.log(hammingDistance('subscribe','described'))


  // hammmed simple
function hammingDistance2(x, y){
    if(x.length !== y.length){
      console.log('Strings must be same length')
      return
    }
  
    let distance = 0
  
    for(let i=0; i<x.length; i++){
      if(x[i] !==y[i]){
        distance ++
      }
    }
    return distance
  }
  
  
  console.log(hammingDistance2('subscribe', 'sutecribe'))
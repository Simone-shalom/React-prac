

function displayData(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const works = true
        if(works){
          resolve("promisee works")
        } else {
          reject("promise do not work")
        }
      },2000)
    })
  }
  
  
  function displayData2(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const works = true
        if(works){
          resolve(" 2promisee works")
        } else {
          reject("2promise do not work")
        }
      },2000)
    })
  }
  
  
  function displayData3(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const works = false
        if(works){
          resolve(" 3promisee works")
        } else {
          reject("3promise do not work")
        }
      },2000)
    })
  }
  
  // displayData().then((response) => console.log(response)).catch((error) => console.error(error))
  Promise.allSettled([displayData(), displayData2(), displayData3()])
  .then((response) => console.log(response)).catch((error) => console.log(error))
  
  Promise.race([displayData(), displayData2(), displayData3()])
  .then((result) => console.log(result))


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
  
  displayData().then((response) => console.log(response)).catch((error) => console.error(error))
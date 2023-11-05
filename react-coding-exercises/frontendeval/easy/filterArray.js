function filter(array, callback){
    const filteredArray = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            filteredArray.push(array[i])
        }
    }
    return filteredArray
}

// Filter example
const filteredArray = filter(myArray, (x) => x % 2 === 0);
console.log("Filtered Array:", filteredArray);

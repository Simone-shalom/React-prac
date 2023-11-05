function forEach(array,callback) {
   for(let i = 0; i< array.length; i++){
        callback(array[i], i);
   }
}

// forEach example
console.log("ForEach:");
forEach(myArray, (x, i) => {
  console.log(`Element ${x} is at index ${i}`);
});
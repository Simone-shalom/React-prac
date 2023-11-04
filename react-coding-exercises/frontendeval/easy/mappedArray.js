function map(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
  }
  
  // Example usage
  const myArray = [1, 2, 3, 4, 5];
  const mappedArray = map(myArray, (x) => x * 2);
  console.log(mappedArray);
  // [2, 4, 6, 8, 10];
  
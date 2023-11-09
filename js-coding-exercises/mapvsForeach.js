

const array = [1,2,3,4,5]

const copiedArray = []

// For each example
 array.forEach((arr) => {
  copiedArray.push(arr * 2)
})

// Map example

const mappeResult = array.map((arr) => {
  return arr + 'a'
})

console.log(array)
console.log(copiedArray)
console.log(mappeResult)



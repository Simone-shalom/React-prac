//// filter

const array = [1, 2 ,3 ,4, 5]

const notWantedItem = 1

const filteredArray = array.filter((arr) => arr !==notWantedItem )

console.log(filteredArray)


// reduce 

const array2  = [1, 2, 3, 4, 5]

const total = array2.reduce((acc, current) => {
  return acc + current
},0)

console.log(total)
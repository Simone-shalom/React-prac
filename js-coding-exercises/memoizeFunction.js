//caching/memoize function
import memoizeOne from 'memoize-one';


const clumsySquare =(num1, num2) => {
  for (let i =1; i<= 10000000; i++)
  return num1 * num2
}


const memoizedSquare = memoizeOne(clumsySquare)

console.time('first')
console.log(memoizedSquare(32, 332))
console.timeEnd('first')

console.time('second')
console.log(memoizedSquare(32, 332))
console.timeEnd('second')

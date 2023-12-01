// currying
function currying(number) {
    return function (number2) {
      return number + number2;
    };
  }
  
  console.log(currying(2)(4));

//infinite currying
  function infiniteCurrying(number) {
    return function (number2) {
      if (number2) {
        return infiniteCurrying(number + number2);
      }
      return number;
    };
  }
  
  console.log(infiniteCurrying(2)(4)(2)());

  //closure 
  function closureFn() {
    const count = 2;
  
    function displayCount(num) {
      console.log(count + num);
    }
  
    return displayCount;
  }
  
  closureFn()(3);

//map filter foreach  
const array = [1, 5, 1, 7];

const doubledArray = [];

array.forEach((arr) => {
  doubledArray.push(arr * 2);
});

const mappedArray = array.map((arr) => arr * 3);

const filteredArray = array.filter((arr) => arr > 2);

console.log(array);
console.log(doubledArray);
console.log(mappedArray);
console.log(filteredArray);

  


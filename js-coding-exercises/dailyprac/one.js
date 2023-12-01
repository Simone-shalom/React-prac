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

  

// convert time
function convertTime(timein12h){

  const [time, timeSplit] = timein12h.split(' ')
  const [hours, minutes] = time.split(':')

  if(timeSplit === 'PM'){
    const hoursInt = parseInt(hours, 10) 

    const convertedHour = hoursInt  +12

    const convertedTime = `${convertedHour}:${minutes}`

    return convertedTime
  } else {
    return time
  }

}

console.log(convertTime('04:03 PM'))

//chekc if number is palindrome
function isPalindrome(number){
  const reversedNumber = number.toString().split('').reverse().join("")
  return number.toString() === reversedNumber
}

console.log(isPalindrome(112211))

//promises with resolve reject 
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

//fibSeq
function fibboSeq(number){

  if(number === 0){
    return 0
  } else if(number > 2){
    return fibboSeq(number-1) + fibboSeq(number-2)
  } else {
    return 1
  }
}

console.log(fibboSeq(5))
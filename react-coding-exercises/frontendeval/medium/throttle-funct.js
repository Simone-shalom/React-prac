function throttle(callback, interval){

    if(typeof callback !== 'function'){
        throw new Error('Callback must be a function')
    }
    if(typeof interval !== 'number' || interval < 0){
        throw new Error('Interval must be a positive number')
    }

    let canRun = true

    return function(){
        if(canRun){
            callback()
            canRun = false
            setTimeout(() => {
                canRun= true
            }, interval)
        }
    }
}

// Example usage
const myCallback = () => console.log("Hello");
const myThrottledCallback = throttle(myCallback, 1000);

// Call the function multiple times in quick succession
myThrottledCallback(); // Will run immediately
myThrottledCallback(); // Will not run immediately
myThrottledCallback(); // Will not run immediately

// After 1000ms, the function can be called again
setTimeout(myThrottledCallback, 1000);
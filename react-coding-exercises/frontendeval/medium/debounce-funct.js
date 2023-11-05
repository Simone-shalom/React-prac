
function debounce (callback, interval){

    if(typeof callback !== 'function'){
        throw new Error('Callback must be a function')
    }
    if(typeof interval !== 'number' || interval < 0){
        throw new Error('Interval must be a positive number')
    }

    let timeout

    return function(){
        if(timeout){
            clearTimeout(timeout)
        }

       timeout = setTimeout(() => {
            callback()
            timeout = null
       }, interval)
    }
}

const myCallback = () => console.log("Hello");
const myDebouncedCallback = debounce(myCallback, 1000);

// call function immediately (after 0ms)
myDebouncedCallback();

// call function after 100ms
setTimeout(myDebouncedCallback, 100);

// call function after 500ms
setTimeout(myDebouncedCallback, 500);

// call function after 2000ms
setTimeout(myDebouncedCallback, 2000);

// call function after 4000ms
setTimeout(myDebouncedCallback, 4000);
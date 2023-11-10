function closureFunct(){
    const name = 'closure functionality';

    // inside funct has access to name var from parent function
    function displayName(){
        console.log(name);
    }

    return displayName
}

const myFunct = closureFunct()

myFunct()
//1
console.log(foo)
foo= 1 
//foo is not defined


//2
console.log(foo)
var foo= 1 
//undefined

//3
foo =3 
console.log(foo)
var foo= 1 
//just 3 

//function hoisting works everytime
foo()
function foo() {
    console.log('Hosting')
}

//let and const are hoisting in temporary dead zone,
// wihtout declaration which occurs in errors



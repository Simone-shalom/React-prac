//callback use
const array = [1,2,3,4,5]

const modifyArray = (arr, callback) => {
    arr.push(6)
    callback()
}

modifyArray(array, () => {
    console.log(array)
})
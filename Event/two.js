// setTimeout(function() {
//     console.log("Siddharth")
// }, 2000)
const sayName = function() {
    console.log('siddharth')
}
const changetext = function() {

    document.querySelector("h1").innerHTML = "best of js"
}

setTimeout(sayName, 2000) // always give the referance
const changeMe = setTimeout(changetext, 4000)
document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeMe)
    console.log("Stopped")
})
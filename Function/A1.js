// function SaymyName() {
//     console.log("S")
//     console.log("i")
//     console.log("d")
//     console.log("h")
//     console.log("u")
// }
// SaymyName()

// function addNumber(num1, num2) {
//     // console.log(num1 + num2)
//     let result = num1 + num2
//     return result
// }

// const result = addNumber(3, 4)
// console.log(result)

function loginusername(username) {
    if (!username) {
        console.log("please enter your username")
    } else {
        return `${username} just logged in `
    }
}

console.log(loginusername("sidhu"))
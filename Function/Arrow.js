// const user = {
//     username: "Siddharth",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`)
//     }
// }
// user.welcomeMessage()
// console.log(this)

// const chai = function() {
//     let username = "Sidhu"
//     console.log(this.username)

// }
// chai()

// const chai = () => {
//     let username = "Sidhu"
//     console.log(this.username)
// }
// chai()

// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)
const addtwo = (num1, num2) => ({ username: "Sidhu" })
console.log(addtwo(3, 4))
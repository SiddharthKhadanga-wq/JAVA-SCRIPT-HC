// //  for of loop  these array specified group


// const arr = [1, 2, 3, 4, 5, 6, 7]

// for (const i of arr) {
//     // console.log(i)
// }

// const greeting = "Hello World"

// for (const greet of greeting) {
//     // console.log(`Each char is ${greet}`)
// }





// //map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', 'united state of america')


// console.log(map)

// for (const [key, value] of map) {
//     console.log(map)
// }



//  for in loop for objects

// const myobject = {
//     js: 'Javascript',
//     cpp: ' c++',
//     rc: 'ruby',
//     swift: "Swift by apple"
// }

// for (const key in myobject) {
//     console.log(key)
//     console.log(myobject[key])
// }

//  for each loop 

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val) {
//     console.log(val)
// })

// coding.forEach((item) => {
//     // console.log(item)
// })

// const coding = [{
//     languagename: "java",
//     languagecommand: "java"
// }, {
//     languagename: "javascript",
//     languagecommand: "js"
// }, {
//     languagename: "python",
//     languagecommand: "py"
// }, {
//     languagename: "c",
//     languagecommand: "c"
// }]

// coding.forEach((item) => {
//     console.log(item.languagecommand)
// })



//  FILTER LOOP (this return us value)


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums)


// MAP

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = nums.map((num) => num + 10)
// console.log(newnums)

// CHAIN 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = nums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNums)
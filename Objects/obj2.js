// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sidhu"
tinderUser.isLoggedIn = false
    // console.log(tinderUser)
const regularname = {
        fullname: {
            userfullname: {
                firstname: "Siddharth",
                lastname: "Khadanga"
            }
        }
    }
    // console.log(regularname)
    // console.log(regularname.fullname)
    // console.log(regularname.fullname.userfullname)
    // console.log(regularname.fullname.userfullname.firstname)
    // console.log(regularname.fullname.userfullname.lastname)

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D" }
const obj4 = { 5: "E", 5: "F" }
    // const obj3 = { obj1, obj2 }
    // const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2 }
    // console.log(obj3)
const user = [{
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
const promiseone = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is compelete')
    }, 1000)
    resolve()
})
promiseone.then(function() {
    console.log("Promise consumed ")
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})

const promisethree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            userName: "chai",
            email: "chai@example.com"
        })
    }, 1000)
})

promisethree.then(function(user) {
    console.log(user)
})


const promisefour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // let error = true
        let error = false
        if (!error) {
            resolve({ username: "sidhu", password: "123" })
        } else {
            reject('Error : something went wrong')
        }
    }, 1000)
})
promisefour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => {
    console.log("promise is either resolved or rejected")
})

const promisefive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Change to false to resolve the promise
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject('Error: something went wrong');
        }
    }, 1000);
});

async function consumepromisefive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

consumepromisefive();
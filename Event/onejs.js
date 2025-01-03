// document.getElementById("owl").onclick = function() {
//     alert("own clicked")
// }

// by using EventLIstner
// document.getElementById("owl").addEventListener('click', function(e) {
//     alert("owl clicked again")
// },false)
// what does we need to study (type, timestamp , defualtPrevented,
//  target , toElement, sorce Element
// clientx , clienty, screenx, screen y
// altkey, ctelkey, shift key ,  key code

// bubble
// document.getElementById("images").addEventListener('click', function(e) {
//     console.log("click inside ul")
// }, false)
// document.getElementById("owl").addEventListener('click', function(e) {
//     console.log("owl clicked again")
// }, false)

//  capturing

// document.getElementById("images").addEventListener('click', function(e) {
//     console.log("click inside ul")
// }, true)
// document.getElementById("owl").addEventListener('click', function(e) {
//     console.log("owl clicked again")
// }, true)

// document.getElementById("google").addEventListener('click', function(e) {
//     e.preventDefault()
//     console.log("clicked google")
// }, false)
// document.getElementById('images').addEventListener('click', function(e) {
//     console.log(e.target.parentNode)
//     let removeit = e.target.parentNode
//     removeit.remove()

// })

document.getElementById('images').addEventListener('click', function(e) {
    console.log(e.target.parentNode)
    if (e.target.tagName == 'IMG') {
        console.log(e.target.id)
        let removeit = e.target.parentNode
        removeit.remove()

    }

})
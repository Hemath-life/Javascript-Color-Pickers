/* -----------------------------------------notes---------------------------------------------
1.  Global object it has lot of property.
    - getComputedStyle to get actual color value provide by id.in rgb

*/

var red = document.querySelector(".red")
var cyan = document.querySelector(".cyan")
var blue = document.querySelector(".blue")
var magenta = document.querySelector(".magenta")
var yellow = document.querySelector(".yellow")


var body = document.querySelector("body")
var bodyColor = window.getComputedStyle(body).backgroundColor


yellow.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "yellow"
})
yellow.addEventListener("mouseleave", () => {
    body.style.backgroundColor = bodyColor
})


red.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "red"
})
red.addEventListener("mouseleave", () => {
    body.style.backgroundColor = bodyColor
})


cyan.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "cyan"
})
cyan.addEventListener("mouseleave", () => {
    body.style.backgroundColor = bodyColor
})


blue.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "blue"
})
blue.addEventListener("mouseleave", () => {
    body.style.backgroundColor = bodyColor
})


magenta.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "magenta"
})
magenta.addEventListener("mouseleave", () => {
    body.style.backgroundColor = bodyColor
})

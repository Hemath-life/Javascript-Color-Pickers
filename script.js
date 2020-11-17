/* -----------------------------------------notes---------------------------------------------
1.  Global object it has lot of property.
    - getComputedStyle to get actual color value provide by id.in rgb

*/

var red = document.querySelector(".red")
var cyan = document.querySelector(".cyan")
var blue = document.querySelector(".blue")
var magenta = document.querySelector(".magenta")
var yellow = document.querySelector(".yellow")


var center = document.querySelector(".center")

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).background;
}

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(blue, getBGColor(blue));
magicColorChanger(magenta, getBGColor(magenta));
magicColorChanger(pink, getBGColor(yellow));
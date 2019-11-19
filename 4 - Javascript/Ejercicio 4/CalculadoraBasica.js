class Calculadora {

    constructor() {
        this.memory = 0;
    }
var memory = 0

//saves into memory the number of the display
//if memory != 0, adds one to the memory value
function saveMemPlus() {
    if (memory == 0) {
        memory = eval(document.getElementById("result").value)
    } else {
        memory = eval(memory + 1)
    }
}

//performs the operation memory-1
function saveMemMinus() {
    if (memory != 0) {
        memory = eval(memory - 1)
    }
}

//displays the memory value
function showMemory() {
    if (memory != 0) {
        dis(memory)
    }
}

//display value, concatenating to the value of display 
function dis(val) {
    document.getElementById("result").value += val
}

//evaluates the expression and returns result 
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//clears the display 
function clr() {
    document.getElementById("result").value = ""
}

//display value, erasing any value of dislay 
function newDisplay(val) {
    document.getElementById("result").value = val
}

function sin() {
    let x = Math.sin(document.getElementById("result").value)
    newDisplay(x)
}

function cos() {
    let x = Math.cos(document.getElementById("result").value)
    newDisplay(x)
}

function tan() {
    let x = Math.tan(document.getElementById("result").value)
    newDisplay(x)
}

function xp2() {
    let disp = document.getElementById("result").value
    let x = eval(disp) * eval(disp)
    newDisplay(x)
}

function xpy() {
    let disp = document.getElementById("result").value
    let x = eval(disp) * eval(disp)
    newDisplay(x)
}
}

var calculadora = new Calculadora();
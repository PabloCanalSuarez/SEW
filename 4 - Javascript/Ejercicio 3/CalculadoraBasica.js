var memory = 0

//saves into memory the number of the display
//if memory != 0, adds one to the memory value
function saveMemPlus()
{
    if(memory == 0){
        memory = eval(document.getElementById("result").value)
    } else {
        memory = eval(memory + 1)
    }
}

//performs the operation memory-1
function saveMemMinus()
{
    if(memory != 0){
        memory = eval(memory - 1)
    }
}

//displays the memory value
function showMemory()
{
    if(memory != 0){
        dis(memory)
    } 
}

//display value 
function dis(val) 
{ 
    document.getElementById("result").value+=val
} 

//evaluates the expression and returns result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

//clears the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 
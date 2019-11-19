class Calculadora {

    constructor(){
        this.memory = 0;
    }

    //saves into memory the number of the display
    //if memory != 0, adds one to the memory value
    saveMemPlus()
    {
        this.memory += eval(document.getElementById("result").value)
    }
    
    //performs the operation memory-1
    saveMemMinus()
    {
        this.memory -= eval(document.getElementById("result").value)
    }
    
    //displays the memory value
    showMemory()
    {
        if(this.memory != 0){
            this.dis(this.memory)
        } 
    }
    
    //display value 
    dis(val) 
    { 
        document.getElementById("result").value+=val
    } 
    
    //evaluates the expression and returns result 
    solve() 
    { 
        let x = document.getElementById("result").value 
        let y = eval(x) 
        document.getElementById("result").value = y 
    } 
    
    //clears the display 
    clr() 
    { 
        document.getElementById("result").value = "";
    } 
}

var calculadora = new Calculadora();
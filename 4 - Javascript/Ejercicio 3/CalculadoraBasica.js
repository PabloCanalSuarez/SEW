class Calculadora {

    constructor(){
        this.memory = 0;
    }

    //saves into memory the number of the display
    //if memory != 0, adds one to the memory value
    saveMemPlus()
    {
        try{
            this.memory += eval(document.getElementById("result").value)
        } catch(e){
            alert(e.message)
            this.clr()
        }
    }
    
    //performs the operation memory-1
    saveMemMinus()
    {
        try{
            this.memory -= eval(document.getElementById("result").value)
        } catch(e){
            alert(e.message)
            this.clr()
        }
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
        try{
            let y = eval(x) 
            document.getElementById("result").value = y 
        } catch(e){
            alert(e.message)
            this.clr()
        }
    } 
    
    //clears the display 
    clr() 
    { 
        document.getElementById("result").value = "";
    } 
}

var calculadora = new Calculadora();
class CalculadoraRPN {

    constructor(){
        this.memory = 0;
        this.stack = [];
        // this.disableOperandButtons(true);
        // this.disableOperandButtonsCientif(true);
    }
    
    //display value 
    dis(val) 
    { 
        switch(val){
            case "+":
                this.stack.push(this.stack.pop() + this.stack.pop());
                break;
            case "-":
                break;
            case "/":
                break;
            case "*":
                break;
            default:
                document.getElementById("result").value += val;
                break;
        }
        this.evaluateStackLength();
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
     
    clr() 
    { 
        document.getElementById("result").value = "";
    }

    clrStack() 
    { 
        document.getElementById("stack").value = "";
    }
    
    writeStack(val)
    {
        document.getElementById("stack").value += (val + "  ");
    }

    enter()
    {
        let x = document.getElementById("result").value;
        this.stack.push(x);
        this.writeStack(x);
        this.clr();
        this.evaluateStackLength();
    }

    evaluateStackLength()
    {
        var length = this.stack.length;
        if(length > 0) {
            this.disableOperandButtonsCientif(false);
        } else {
            this.disableOperandButtonsCientif(true);
        }

        if(length > 1) {
            this.disableOperandButtons(false);
        } else {
            this.disableOperandButtons(true);
        }
    }

    disableOperandButtons(bool)
    {
        var btns = document.getElementsByClassName("op");
        var i;
        for(i = 0; i < btns.length; i++){
            btns[i].disabled = bool;
        }
    }

    disableOperandButtonsCientif(bool)
    {
        var btns = document.getElementsByClassName("opC");
        var i;
        for(i = 0; i < btns.length; i++){
            btns[i].disabled = bool;
        }
    }
}

var calculadora = new CalculadoraRPN();
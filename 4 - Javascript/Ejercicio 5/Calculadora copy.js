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
        let x;
        switch(val){
            case "+":
                x = this.stack.pop() + this.stack.pop();
                this.stack.push(x);
                this.clrStackLastTwo();
                this.writeStack(x);
                break;
            case "-":
                x = this.stack.pop() - this.stack.pop();
                this.stack.push(x);
                this.clrStackLastTwo();
                this.writeStack(x);
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

    clrStackLastTwo() 
    { 
        let x = document.getElementById("stack").value;
        this.clr();
        let data = x.split("  ");
        let newData;
        for(let i = 0; i < data.length - 2; i++){
            newData[i] = data[i];
        }
        newData.forEach(element => {
           document.getElementById("stack").value += element;
        });
    }
    
    writeStack(val)
    {
        console.log(val)
        document.getElementById("stack").value += (val + "  ");
    }

    enter()
    {
        let x = eval(document.getElementById("result").value);
        if(x !== undefined){
            this.stack.push(x);
            this.writeStack(x);
            this.clr();
            this.evaluateStackLength();
        }
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
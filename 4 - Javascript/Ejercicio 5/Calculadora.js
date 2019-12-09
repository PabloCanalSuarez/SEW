class CalculadoraRPN {

    constructor(){
        this.memory = 0;
        this.stack = [];
    }
    
    //display value 
    dis(val) 
    { 
        let x;
        switch(val){
            case "+":
                x = this.stack.pop() + this.stack.pop();
                this.clrStackLastTwo();
                this.writeStack(x);
                this.evaluateStackLength();
                break;
            case "-":
                x = this.stack.pop() - this.stack.pop();
                this.clrStackLastTwo();
                this.writeStack(x);
                this.evaluateStackLength();
                break;
            case "/":
                x = this.stack.pop() / this.stack.pop();
                this.clrStackLastTwo();
                this.writeStack(x);
                this.evaluateStackLength();
                break;
            case "*":
                x = this.stack.pop() * this.stack.pop();
                this.clrStackLastTwo();
                this.writeStack(x);
                this.evaluateStackLength();
                break;
            default:
                document.getElementById("result").value += val;
                break;
        }
        this.stack.push(x);
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
        this.clrStack();
        const data = x.split("  ");
        let newData = [];
        
        for(let i = 0; i < data.length - 3; i++){
            newData[i] = data[i];
        }

        newData.forEach(e => {
           this.writeStack(e)
        });
    }

    clrStackLastOne() 
    { 
        let x = document.getElementById("stack").value;
        this.clrStack();
        const data = x.split("  ");
        let newData = [];
        
        for(let i = 0; i < data.length - 2; i++){
            newData[i] = data[i];
        }

        newData.forEach(e => {
           this.writeStack(e)
        });
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

    sin(){
        let x = this.stack.pop();
        let res = Math.sin(x).toString().substr(0,5);
        console.log(res)
        this.clrStackLastOne();
        this.writeStack(eval(res));
    }

    cos(){
        let x = this.stack.pop();
        let res = Math.cos(x).toString().substr(0,5);
        console.log(res)
        this.clrStackLastOne();
        this.writeStack(eval(res));
    }

    tan(){
        let x = this.stack.pop();
        let res = Math.tan(x).toString().substr(0,5);
        console.log(res)
        this.clrStackLastOne();
        this.writeStack(eval(res));
    }
}

var calculadora = new CalculadoraRPN();
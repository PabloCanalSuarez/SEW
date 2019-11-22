class Calculadora {

    constructor(){
        this.memory = 0;
    }

    //saves into memory the number of the display
    //if memory != 0, adds one to the memory value
    saveMemPlus()
    {
        try{
            let x = document.getElementById("result").value;
            let m = this.memory;
            this.memory = eval(m) + eval(x);
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }
    
    //performs the operation memory-1
    saveMemMinus()
    {
        try{
            let x = document.getElementById("result").value;
            let m = this.memory;
            this.memory = eval(m) - eval(x);
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }
    
    //displays the memory value
    showMemory()
    {
        if(this.memory != 0){
            this.dis(this.memory);
        } 
    }
    
    //display value 
    dis(val) 
    { 
        document.getElementById("result").value+=val;
    } 
    
    //evaluates the expression and returns result 
    solve() 
    { 
        let x = document.getElementById("result").value; 
        try{
            let y = eval(x);
            document.getElementById("result").value = y;
        } catch(e){
            alert(e.message);
            this.clr();
        }
    } 
    
    //clears the display 
    clr() 
    { 
        document.getElementById("result").value = "";
    } 
}

class CalculadoraCientifica extends Calculadora {
    clearMemory() {
        this.memory = 0;
    }

    saveMemDisplay() {
        this.memory = document.getElementById("result").value;
    }

    showDisplay(val) {
        document.getElementById("result").value = val;
    }

    xp2() {
        try{
            let disp = document.getElementById("result").value;
            let x = eval(disp) * eval(disp);
            this.showDisplay(x)
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }

    sin() {
        let x = Math.sin(document.getElementById("result").value);
        this.showDisplay(x);
    }

    cos() {
        let x = Math.cos(document.getElementById("result").value);
        this.showDisplay(x);
    }

    tan() {
        let x = Math.tan(document.getElementById("result").value);
        this.showDisplay(x);
    }

    xp3() {
        try{
            let disp = document.getElementById("result").value;
            let x = eval(disp) * eval(disp) * eval(disp);
            this.showDisplay(x)
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }
    
    tenXp() {
        try{
            let disp = document.getElementById("result").value;
            let x = 10**eval(disp);
            this.showDisplay(x)
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }

    log() {
        let x = Math.log(document.getElementById("result").value);
        this.showDisplay(x);
    }

    squareRoot() {
        let x = Math.sqrt(document.getElementById("result").value);
        this.showDisplay(x);
    }

    changeSign() {
        try {
            let val = eval(document.getElementById("result").value);
            document.getElementById("result").value = eval(-val);
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }

    deleteLast() {
        let x = document.getElementById("result").value;
        document.getElementById("result").value = x.substring(0, x.length-1);
    }

    factorial() {
        let x = document.getElementById("result").value;
        document.getElementById("result").value = this.factorialRecursivo(x);
    }

    factorialRecursivo(n) {
        try {
            if (n === 0) {
                return 1;
            }
            return n * this.factorialRecursivo(n - 1);
        } catch (e) {
            return Infinity;
        }
    }

    clrE() {
        const display = document.getElementById("result");
        const limit = display.value.length - 1;
        for (let i = limit; i >= 0; i--) {
            let value = display.value[i];
            if (/^([^0-9]*)$/.test(value)) {
                display.value = display.value.substring(0, i);
                break;
            }
        }
    }
}

var calculadora = new CalculadoraCientifica();
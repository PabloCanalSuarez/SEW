class WordsSorter {

    constructor(){
        this.resultado = [];
        this.idResultadoShow = "pResultado";
    }

    ordenar(){
        let contentsList = document.getElementById("lista").value.split("\n");
        // let maxSorteo = contentsList.length;
        
        let resultList = contentsList.sort();
        this.resultado = resultList;
        this.showResult();
    }
    deleteList(){
        document.getElementById("lista").value = "";
        let resultElem = document.getElementById(this.idResultadoShow);
        if(resultElem != null){
            document.getElementById("resultado").removeChild(resultElem);
        }
    }
    showResult(){
        let resultElem = document.getElementById(this.idResultadoShow);
        if(resultElem == null){
            let elemento = document.createElement("p");
            elemento.setAttribute("id", this.idResultadoShow);
            elemento.innerHTML = this.resultado;
            document.getElementById("resultado").appendChild(elemento);
        } else {
            resultElem.innerHTML = this.resultado;
        }


    }
}

var app = new WordsSorter();
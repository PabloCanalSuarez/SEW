class AppSorteo {

    constructor(){
        this.resultado = "";
    }

    sortear(){
        let contentsList = document.getElementById("listaSorteo").value.split("\n");
        let maxSorteo = contentsList.length;
        if(maxSorteo > 0 && contentsList[0] != "" && contentsList[0].trim() != "" ){
            let result = Math.floor(Math.random() * maxSorteo);
        
            this.resultado = contentsList[result];
            this.mostrarResultado();
        }
    }
    borrarLista(){
        document.getElementById("listaSorteo").value = "";
        let resultElem = document.getElementById("h3Resultado");
        if(resultElem != null){
            document.getElementById("mostrarResultado").removeChild(resultElem);
        }
    }
    mostrarResultado(){
        let resultElem = document.getElementById("h3Resultado");
        if(resultElem == null){
            let elemento = document.createElement("h3");
            elemento.setAttribute("id", "h3Resultado");
            elemento.innerHTML = this.resultado;
            document.getElementById("mostrarResultado").appendChild(elemento);
        } else {
            resultElem.innerHTML = this.resultado;
        }
    }
}

var app = new AppSorteo();
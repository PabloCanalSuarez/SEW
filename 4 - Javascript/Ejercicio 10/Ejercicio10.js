class MoneyRates {
    constructor() {
        this.base = "EUR";
        this.symbols = ["USD", "GBP", "CAD", "CHF", "SEK"];
        this.url = "https://api.exchangeratesapi.io/latest?base="+this.base+"&symbols="+this.symbols[0]+","+this.symbols[1]+","+this.symbols[2]+","+this.symbols[3]+","+this.symbols[4];
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){                    
                    var stringDatos = "<ul><li>USD: " + datos.rates.USD+"</li>";
                        stringDatos += "<li>GBP: " + datos.rates.GBP+"</li>";
                        stringDatos += "<li>CAD: " + datos.rates.CAD+"</li>";
                        stringDatos += "<li>CHF: " + datos.rates.CHF+"</li>";
                        stringDatos += "<li>SEK: " + datos.rates.SEK+"</li></ul>";
                    
                    $("p").html(stringDatos);
                    console.log("Correcto");
                },
            error:function(){
                $("h3").html("Error: No se pudo obtener el JSON."); 
                $("p").remove();
                console.log("Error")
            }
        });
    }
    addElement(tipoElemento, texto, insertar){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertar).append(elemento);
    }
    verJSON(){
        this.addElement("h3","Exchange Rates","section");
        this.addElement("p","","section");
        this.cargarDatos();
        $("button").attr("disabled","disabled");
    }
}
var rates = new MoneyRates();
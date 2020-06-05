class NASA_APOD {
    // https://api.nasa.gov/planetary/apod?api_key=iB4swqKHVPZ9VzSKuNCfK8y9lEzf8ShP4Y81NZJt&date=2019-12-05
    constructor() {
        this.apiKey = "iB4swqKHVPZ9VzSKuNCfK8y9lEzf8ShP4Y81NZJt";
        this.url = "https://api.nasa.gov/planetary/apod?api_key=iB4swqKHVPZ9VzSKuNCfK8y9lEzf8ShP4Y81NZJt&date=2019-12-05"
    }
    cargarDatos(idKey){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){                    
                    var stringDatos = "<ul><li>Título: " + datos.title+"</li>";
                        stringDatos += "<li>Fecha: " + datos.date+"</li>";
                        stringDatos += "<li>Autor (Copyright): " + datos.copyright+"</li></ul>";
                    
                    $("#listData").html(stringDatos);
                    $("#titleData").html("Picture of the day: "+datos.title);
                    $("#resumenData").html(datos.explanation);
                    $("#imgData").attr("src",datos.url);
                    console.log("Correcto");
                },
            error:function(){
                $("#titleData").html("Error: No se pudo obtener el JSON."); 
                $("#listData").remove();
                $("#titleData").remove();
                console.log("Error")
            }
        });
    }
    addElement(tipoElemento, texto, insertar,id){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        elemento.setAttribute("id",id);
        $(insertar).append(elemento);
    }
    loadData(){
        this.addElement("h3","","section","titleData");
        this.addElement("p","","section","listData");
        this.addElement("p","","section","resumenData");
        this.addElement("img","","section","imgData");
        this.cargarDatos();
        $("#loadData").attr("disabled","disabled");
    }
}
var nasaApi = new NASA_APOD();
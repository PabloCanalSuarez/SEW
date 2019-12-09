class MovieData {
    constructor() {
        this.apiKey = "a61d96cd";
        this.type = "json";
        this.baseUrl = "http://www.omdbapi.com/?apikey="+this.apiKey+"&r="+this.type;
        this.url = this.baseUrl;
        this.yearMovie = false;
        this.typeMovie = false;
    }
    refreshUrl(){
        this.url = this.baseUrl;
    }
    cargarDatos(idKey){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){                    
                    var stringDatos = "<ul><li>Título: " + datos.Title+"</li>";
                        stringDatos += "<li>Fecha de lanzamiento: " + datos.Released+"</li>";
                        stringDatos += "<li>Edad recomendada: " + datos.Rated+"</li>";
                        stringDatos += "<li>Duración: " + datos.Runtime+"</li>";
                        stringDatos += "<li>Género: " + datos.Genre+"</li>";
                        stringDatos += "<li>Director: " + datos.Director+"</li>";
                        stringDatos += "<li>Puntuación: " + datos.Metascore+"</li>";
                        stringDatos += "<li>Recaudación: " + datos.BoxOffice+"</li></ul>";
                    
                    $("#p"+idKey).html(stringDatos);
                    console.log("Correcto");
                },
            error:function(){
                $("#h3"+idKey).html("Error: No se pudo obtener el JSON."); 
                $("#p"+idKey).remove();
                console.log("Error")
            }
        });
    }
    addElement(tipoElemento, texto, insertar, idKey){
        var elemento = document.createElement(tipoElemento); 
        elemento.setAttribute("id",tipoElemento+idKey);
        elemento.innerHTML = texto;
        $(insertar).append(elemento);
    }
    verJSON(movieTitle){
        this.addElement("h3","Resultado de la búsqueda:","section",movieTitle);
        this.addElement("p","","section",movieTitle);
        this.cargarDatos(movieTitle);
        // $("button").attr("disabled","disabled");
    }
    procesar(){
        this.refreshUrl();
        let url = this.url;
        
        let title = $("#tituloPelicula").val();
        url += "&t="+title;

        if(this.typeMovie){
            let type = $("#typePelicula").val();
            url += "&type="+type;
        }
        if(this.yearMovie){
            let type = $("#yearPelicula").val();
            url += "&y="+type;
        }
        console.log(url)
        this.url = url;
        this.verJSON(title);
    }
    handleClick(cb){
        let id = cb.getAttribute("id");
        if(cb.checked){
            switch(id){
                case "chckYear":
                    $("#yearPelicula").removeAttr("disabled");
                    this.yearMovie = true;
                    break;
                case "chckType":
                    $("#typePelicula").removeAttr("disabled");
                    this.typeMovie = true;
                    break;
            }
        } else {
            switch(id){
                case "chckYear":
                    $("#yearPelicula").attr("disabled","disabled");
                    this.yearMovie = false;
                    break;
                case "chckType":
                    $("#typePelicula").attr("disabled","disabled");
                    this.typeMovie = false;
                    break;
            }
        }
    }
}
var app = new MovieData();
class Meteo {
    constructor(){
        this.apikey = "ab2ef82ab2a348abf1ad5c7351cc6041";
        this.ciudad = "Oviedo";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "Correcto, JSON recibido."
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2));
                    
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>País: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mí­nima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("p").html(stringDatos);
                    console.log("Correcto");
                },
            error:function(){
                $("h3").html("Error: No se pudo obtener el JSON."); 
                $("h4").remove();
                $("pre").remove();
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
        this.addElement("h2","Información en JSON de OpenWeather","section"); 
        this.addElement("h3",this.correcto,"section");
        this.addElement("h4","JSON","section");
        this.addElement("pre","","section")
        this.addElement("h4","Datos","section");
        this.addElement("p","","section");
        this.cargarDatos();
        $("button").attr("disabled","disabled");
    }
}
var meteo = new Meteo();
class FileHandler {
    handleFiles(files){
        let fileList = files;
        const numFiles = fileList.length;

        for(let i = 0; i < numFiles; i++){
            let file = fileList[i];
            let fileNameId = file.name.split('.').join('');
            this.addElementText("h2",fileNameId,"Archivo: "+file.name)
            this.addElementNoText("p",fileNameId);
            let stringDatos = "<ul><li>Nombre: "+file.name+"</li>";
                stringDatos += "<li>Tamaño: "+file.size+"</li>";
                stringDatos += "<li>Modificado por última vez: "+file.lastModifiedDate+"</li></ul>";
            
            $("#p"+fileNameId).html(stringDatos);

            let extensionFile = file.name.split('.').pop();
            switch(extensionFile){
                case "txt":
                    this.showContentsTXT(file, fileNameId);
                    break;
                case "xml":
                    this.showContentsXML(file, fileNameId);
                    break; 
                case "json":
                    this.showContentsJSON(file, fileNameId);
                    break;
            }
        }
    }
    showContentsTXT(file, fileId){
        this.addElementText("h3",fileId+"_ContentsTXT","Contenidos del txt")
        this.addElementNoText("p",fileId+"_ContentsTXT");
        let reader = new FileReader();
        reader.readAsText(file,"UTF-8");
        reader.onload = function(event){
            $("#p"+fileId+"_ContentsTXT").html(event.target.result);
        }
    }
    showContentsXML(file, fileId){
        this.addElementText("h3",fileId+"_ContentsXML","Contenidos del XML")
        this.addElementNoText("p",fileId+"_ContentsXML");
        let reader = new FileReader();
        reader.readAsText(file,"UTF-8");
        reader.onload = function(event){
            let datos = event.target.result;

            var totalNodos            = $('*',datos).length; 
            var ciudad                = $('city',datos).attr("name");
            var longitud              = $('coord',datos).attr("lon");
            var latitud               = $('coord',datos).attr("lat");
            var pais                  = $('country',datos).text();
            var amanecer              = $('sun',datos).attr("rise");
            var minutosZonaHoraria    = new Date().getTimezoneOffset();
            var amanecerMiliSeg1970   = Date.parse(amanecer);
                amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
            var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
            var oscurecer             = $('sun',datos).attr("set");          
            var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
            var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
            var temperatura           = $('temperature',datos).attr("value");
            var temperaturaMin        = $('temperature',datos).attr("min");
            var temperaturaMax        = $('temperature',datos).attr("max");
            var temperaturaUnit       = $('temperature',datos).attr("unit");
            var humedad               = $('humidity',datos).attr("value");
            var humedadUnit           = $('humidity',datos).attr("unit");
            var presion               = $('pressure',datos).attr("value");
            var presionUnit           = $('pressure',datos).attr("unit");
            var velocidadViento       = $('speed',datos).attr("value");
            var nombreViento          = $('speed',datos).attr("name");
            var direccionViento       = $('direction',datos).attr("value");
            var codigoViento          = $('direction',datos).attr("code");
            var nombreDireccionViento = $('direction',datos).attr("name");
            var nubosidad             = $('clouds',datos).attr("value");
            var nombreNubosidad       = $('clouds',datos).attr("name");
            var visibilidad           = $('visibility',datos).attr("value");
            var precipitacionValue    = $('precipitation',datos).attr("value");
            var precipitacionMode     = $('precipitation',datos).attr("mode");
            var descripcion           = $('weather',datos).attr("value");
            var horaMedida            = $('lastupdate',datos).attr("value");
            var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
            var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
            var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
            
            var stringDatos =  "<ul><li>Número de elementos del XML: " + totalNodos + "</li>";
                stringDatos += "<li>Ciudad: " + ciudad + "</li>";
                stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                stringDatos += "<li>País: " + pais + "</li>";
                stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                stringDatos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                stringDatos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                stringDatos += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                stringDatos += "<li>Nombre del viento: " + nombreViento + "</li>";
                stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                stringDatos += "<li>Código del viento: " + codigoViento + "</li>";
                stringDatos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                stringDatos += "<li>Nubosidad: " + nubosidad + "</li>";
                stringDatos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                stringDatos += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                stringDatos += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                stringDatos += "<li>Descripción: " + descripcion + "</li>";
                stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li></ul>";
            
            $("#p"+fileId+"_ContentsXML").html(stringDatos);
        };
    }
    showContentsJSON(file, fileId){
        this.addElementText("h3",fileId+"_ContentsJSON","Contenidos del JSON")
        this.addElementNoText("p",fileId+"_ContentsJSON");
        let reader = new FileReader();
        reader.readAsText(file,"UTF-8");
        reader.onload = function(event){
            let text = event.target.result;
            let datos = JSON.parse(text);

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
            
            $("#p"+fileId+"_ContentsJSON").html(stringDatos);
        }
    }
    addElementNoText(tipoElemento, fileNameId){
        var elemento = document.createElement(tipoElemento); 
        elemento.setAttribute("id",tipoElemento+fileNameId); 
        $("section").append(elemento);
    }
    addElementText(tipoElemento, fileNameId, texto){
        var elemento = document.createElement(tipoElemento);
        elemento.setAttribute("id",tipoElemento+fileNameId); 
        elemento.innerHTML = texto;
        $("section").append(elemento);
    }
}
var apiFile = new FileHandler();

function doClick(){
    var el = document.getElementById("fileElem");
    if (el) {
        el.click();
    }
}
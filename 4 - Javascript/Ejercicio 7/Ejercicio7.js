$(document).ready(function(){
    $("#boton1").click(function(){
        $("#parrafo1").text("Profesora: B. Cristina Pelayo García-Bustelo");
        $("#sitioWeb").html("<a href='http://di002.edv.uniovi.es/~cris/'>B. Cristina Pelayo García-Bustelo</a>");
        $("#campoTexto").html("Nombre de la profesora: <input type='text' id='campoNombre'>");
        $("#campoNombre").val("B. Cristina");
    });
    $("#boton2").click(function(){
        $("#parrafo1").text("Profesor: Juan Manuel Cueva Lovelle");
        $("#sitioWeb").html("<a href='http://di002.edv.uniovi.es/~cueva/'>Juan Manuel Cueva Lovelle</a>");
        $("#campoTexto").html("Nombre del profesor: <input type='text' id='campoNombre'>");
        $("#campoNombre").val("Juan Manuel");
    });
});




class Web {
    constructor() {
        // this.inicializar();
    }

    inicializar() {
        this.coleccion = [];
        this.añadirElemento(new Elemento("h1", "Titulo h1"));
        this.añadirElemento(new Elemento("h2", "Titulo h2"));
        this.añadirElemento(new Elemento("p", "Parrafo"));
    }

    mostrarElemento(){
        $(".ocultarMostrar").show();
    }

    ocultarElemento(){
        $(".ocultarMostrar").hide();
    }

    cambiarCiudadGijon(){
        $("#campoTexto").html("Ciudad: <input type='text' id='campoNombre'>");
        $("#campoNombre").val("Gijón");
    }

    cambiarCiudadOviedo(){
        $("#campoTexto").html("Ciudad: <input type='text' id='campoNombre'>");
        $("#campoNombre").val("Oviedo");
    }

    addParrafo(){
        $("#addElement").after("<p id='modifyElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget molestie...</p>");
    }

    removeParrafo(){
        $("#modifyElement").remove();
    }

    runDOM(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent()[0].tagName;
            var etiquetaHijo = $(this)[0].tagName;
            console.log(etiquetaPadre);
            console.log(etiquetaHijo);
            $("#DOMlog").append(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this)[0].tagName +"> valor: "));
        });
    }


    añadirElemento(elemento) {
        this.coleccion.push(elemento);
        let cadena = "<" + elemento.etiqueta + " id='"
            + elemento.id + "'>" + elemento.valor + "</"
            + elemento.etiqueta + ">";
        $("body").append(cadena);
        this.añadirBotonElemento(elemento.id);
        this.añadirComboBox(elemento.id);
    }

    añadirBotonElemento(id) {
        let cadena = "<input type='button' value='" + id + "' onclick='pagina.pulsarBoton(\"" + id + "\")'/>";
        $("#buttonGroup").append(cadena);
    }

    añadirComboBox(id) {
        let cadena = "<option value=" + id + ">" + id + "</option>"
        $("select").append(cadena);
    }

    suma() {
        let result = 0;
        $(".num").each(function(){
            result += parseFloat(this.innerText)
        });

        $("#resultadoSuma").append(result);
    }
}

let web = new Web();
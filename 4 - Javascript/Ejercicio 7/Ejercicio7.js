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

    modificarContenido() {
        let id = $("#modificar option:selected").text();
        for (let i = 0; i < this.coleccion.length; i++) {
            if (this.coleccion[i].id === id) {
                this.coleccion.valor = $("#contenido").val();
                $("#" + id).html(this.coleccion.valor);
                break;
            }
        }
    }

    agregarElemento() {
        if (this.comprobarElemento()) {
            this.añadirElemento(
                new Elemento($("#tarea3Etiqueta").val(),
                    $("#tarea3Id").val(),
                    $("#tarea3Contenido").val())
            );
        } else
            alert("Id repetido");
    }

    comprobarElemento() {
        let id = $("#tarea3Id").val();
        for (let i = 0; i < this.coleccion.length; i++) {
            if (this.coleccion[i].id === id)
                return false;
        }
        return true;
    }

    eliminarElemento(elemento) {
        let id = $("#tarea4").val();
        let i = this.coleccion.findIndex(i => i.id === id);
        if (i !== -1) {
            this.coleccion.splice(i, 1);
            $("#" + id).remove();
            $("select option[value='" + id + "']").remove();
            $("input[value='" + id + "']").remove();
        }
    }

    mostrarDom() {
        let cadena = "";
        $("*", document.body).each(function () {
            let etiquetaPadre = $(this).parent().get(0).tagName;
            cadena += "Etiqueta padre : " + etiquetaPadre + " elemento : "
                + $(this).get(0).tagName + " valor: " + $(this).text() + "<br>";
        });
        pagina.añadirElemento(new Elemento("p", "dom", cadena));
    }

    mostrarInformacion(element) {
        let etiquetaPadre = $(element).parent().get(0).tagName;
        $(element).prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <"
            + $(element).get(0).tagName + "> valor: "));
    }

    sumTable() {
        let result = 0;
        const values = $('td');
        for (let i = 0; i < values.length; i++) {
            result += parseFloat(values[i].innerHTML);
        }
        const text = 'La suma total es ' + result;
        pagina.añadirElemento(new Elemento("h4", "suma", text));
    }
}

let web = new Web();
class Web {

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

    suma() {
        let result = 0;
        $(".num").each(function(){
            result += parseFloat(this.innerText)
        });

        $("#resultadoSuma").append(result);
    }
}

let web = new Web();
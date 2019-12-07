var mapaGoogle = new Object();
function initMap() {
    var centro = { lat: 43.36335880146701, lng: -5.854131194383698 };
    mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

var posOviedo = {
    lat: 43.36335880146701,
    lng: -5.854131194383698
};
var posGijon = {
    lat: 43.5421570517526,
    lng: -5.65908821882153
};
var posColunga = {
    lat: 43.48530865315227,
    lng: -5.2700464602446235
};
var posSantander = {
    lat: 43.46864047474771,
    lng: -3.7689440322105883
};
var posRibadesella = {
    lat: 43.46163701550625,
    lng: -5.0610089087235615
};
function loadMarcador(btnId){
    var marcador = new google.maps.Marker({
        map: this.mapaGoogle
    });
    switch(btnId){
        case "btnOviedo":
            marcador.setPosition(posOviedo);
            marcador.setTitle("Oviedo");
            break; 
        case "btnGijon":
            marcador.setPosition(posGijon);
            marcador.setTitle("Gijón");
        break; 
        case "btnColunga":
            marcador.setPosition(posColunga);
            marcador.setTitle("Colunga");
        break; 
        case "btnRibadesella":
            marcador.setPosition(posRibadesella);
            marcador.setTitle("Ribadesella");
        break; 
        case "btnSantander":
            marcador.setPosition(posSantander);
            marcador.setTitle("Santander");
        break; 
        default:
            alert("invalid button");
    }
    mapaGoogle.setCenter(marcador.getPosition())
    $("#"+btnId).attr("disabled","disabled");
}
$(document).ready(function() {
    $(".btnMarcador").click(function() {
        var id = $(this).attr('id');
        console.log(id);
        loadMarcador(id);
    });
});
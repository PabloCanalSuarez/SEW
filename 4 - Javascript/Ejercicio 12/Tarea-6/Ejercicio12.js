var mapaGoogle = new Object();
function initMap() {
    var centro = { lat: 43.36335880146701, lng: -5.854131194383698 };
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}
mapaGoogle.initMap = initMap;

var posOviedo = {
    lat: 43.36335880146701,
    lng: -5.854131194383698
};
function loadMarcador(btn){
    // var buttonClickedId = btn.id;
    var buttonClickedId= btn;
    switch(buttonClickedId){
        case "btnOviedo":
            var marcador = new google.maps.Marker({
                position: this.posOviedo,
                title: "Oviedo",
            });
            marcador.setMap(mapaGoogle);
            console.log("marcador oviedo cargado");

            break;    
        default:
            alert("invalid button");
    }
}
$('#btnOviedo').on('click', function() {
    var id = $(this).attr('id');
    console.log(id);
    loadMarcador(id);
})
// $('#btnOviedo').click(function() {
//     var id = $(this).attr('id');
//     console.log(id);
//     loadMarcador(id);
// })
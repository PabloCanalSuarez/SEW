var mapaGoogle = new Object();
function verMapa() {
    var centro = { lat: 43.36335880146701, lng: -5.854131194383698 };
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marcador = new google.maps.Marker;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marcador.setPosition(pos);
            marcador.setTitle("Ubicación actual");
        });
    }
    marcador.setMap(map)
}
function handleLocationError(browserHasGeolocation, point, pos) {
    point.setPosition(pos);
    var error;
    if(browserHasGeolocation){
        error = "Error: Localización fallida.";
    } else {
        error = "Error: Navegador no soportado.";
    }
    point.setContent(error);
    point.open(mapaGeoposicionado);
}

mapaGoogle.verMapa = verMapa;
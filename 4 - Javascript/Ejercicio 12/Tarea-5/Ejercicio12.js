var mapaGoogle = new Object();
function initMap() {
    var centro = { lat: 43.36335880146701, lng: -5.854131194383698 };
    mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
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
    marcador.setMap(mapaGoogle)
}
var mapaGoogle = new Object();
function initMap(){
    var ciudad = { lat: 43.36335880146701, lng: -5.854131194383698 };
    mapaGoogle = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:ciudad});
    var marcador = new google.maps.Marker({position:ciudad,map:mapaGoogle});
}
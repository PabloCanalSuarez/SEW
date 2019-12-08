class MapaGeoJSON {
    init(files) {
        const fileList = files;
        const file = fileList[0];
        if (file.name.includes('.geoJSON')) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onloadend = () => {
                let map = new google.maps.Map(document.getElementById("mapa"), {
                    zoom: 11,
                    center: {lat: 43.46095365141672, lng: -5.712079413530862}
                });
                const json = JSON.parse(reader.result);
                map.data.addGeoJson(json);
            };
        } else {
            alert("Error : El archivo debe tener formato .geoJSON");
        }
    }
}
var map = new MapaGeoJSON();

function doClick(){
    var el = document.getElementById("fileElem");
    if (el) {
        el.click();
    }
}
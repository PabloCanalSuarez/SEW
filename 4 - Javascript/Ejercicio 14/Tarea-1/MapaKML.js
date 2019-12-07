class MapaKML {
    init(files) {
        const fileList = files;
        const file = fileList[0];
        if (file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                let map = new google.maps.Map(document.getElementById("mapa"), {
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                let geoXml = new geoXML3.parser({
                    map: map,
                    singleInfoWindow: true,
                });
                geoXml.parseKmlString(reader.result);
            };
        } else {
            alert("Error : El archivo debe tener formato .kml");
        }
    }
}
var map = new MapaKML();

function doClick(){
    var el = document.getElementById("fileElem");
    if (el) {
        el.click();
    }
}
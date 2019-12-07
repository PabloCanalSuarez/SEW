class MapaKML {
    init(files) {
        const fileList = files;
        const file = fileList[0];
        if (file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.onload = () => {
                const map = new google.maps.Map(document.getElementById("mapa"), {
                    zoom: 10,
                });
                const geoXml = new geoXML3.parser({map: map});
                geoXml.parseKmlString(reader.result);
            };
            reader.readAsText(file);
        } else {
            alert("Error : ¡Archivo no válido!");
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
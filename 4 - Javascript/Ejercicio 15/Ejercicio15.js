class App {
    handleFiles(files){
        const fileList = files;
        let file = fileList[0];

        if(file.name.includes('.jpg')){
            var ctx = document.getElementById('canvas').getContext('2d');
            var img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 400, 400 * img.height / img.width);
                console.log("Imagen cargada");
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(file);
        } else {
            alert("Error: El archivo debe tener formato .jpg");
        }
    }

    draw(){
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(75, 250);
        ctx.bezierCurveTo(75, 247, 70, 235, 50, 235);
        ctx.bezierCurveTo(20, 235, 20, 272.5, 20, 272);
        ctx.bezierCurveTo(20, 290, 40, 312, 75, 330);
        ctx.bezierCurveTo(110, 312, 130, 290, 130, 272);
        ctx.bezierCurveTo(130, 272.5, 130, 235, 100, 235);
        ctx.bezierCurveTo(85, 235, 75, 247, 75, 250);
        ctx.closePath();
        ctx.fill();
    }

    downloadSVG(){
        var svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg" );
        svg.setAttribute( 'style', 'border: 1px solid black;' )
        svg.setAttribute( 'width', '600' )
        svg.setAttribute( 'height', '400' )
        svg.setAttributeNS('http://www.w3.org/2000/xmlns/','xmlns:xlink','http://www.w3.org/1999/xlink');

        this.importCanvas( document.getElementById('canvas'), svg ); 
        this.download(svg);
    }
    importCanvas( sourceCanvas, targetSVG ) {
        var img_dataurl = sourceCanvas.toDataURL( "image/png" );

        var svg_img = document.createElementNS("http://www.w3.org/2000/svg","image");
        svg_img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',img_dataurl);

        jQuery(targetSVG.appendChild(svg_img )).appendTo( '#graph-container' );

        console.log( 'done' ); // Log & confirm
    }
    download(svg){
        var serializer = new XMLSerializer();
        var source = serializer.serializeToString(svg);

        //add name spaces.
        if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
            source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
            source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
        }

        //add xml declaration
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        //convert svg source to URI data scheme.
        var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

        //set url value to a element's href attribute.
        document.getElementById("link").href = url;
    }
}
var app = new App();

function doClick(){
    var el = document.getElementById("fileElem");
    if (el) {
        el.click();
    }
}
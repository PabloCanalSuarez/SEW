class GeoLocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.manageErrors.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
        this.reportMessage = "Todo correcto.";
    }
    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    obtenerLocalizacion() {
        var localizacion = document.getElementById("localizacion");
        var datos = '<h2>'+ this.reportMessage + '</h2>';
        datos += '<p>Longitud: ' + this.longitud + ' º</p>';
        datos += '<p>Latitud: ' + this.latitud + ' º</p>';
        datos += '<p>Precisión de la latitud y longitud: ' + this.precision + ' metros</p>';
        datos += '<p>Altitud: ' + this.altitude + ' metros</p>';
        datos += '<p>Precisión de la altitud: ' + this.precisionAltitud + ' metros</p>';
        datos += '<p>Rumbo: ' + this.rumbo + ' º</p>';
        datos += '<p>Velocidad: ' + this.velocidad + ' m/s</p>';
        localizacion.innerHTML = datos;
    }
    manageErrors(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.reportMessage = "Permiso denegado."
                break;
            case error.POSITION_UNAVAILABLE:
                this.reportMessage = "Información de posición no disponible."
                break;
            case error.TIMEOUT:
                this.reportMessage = "La petición ha caducado (Timeout)."
                break;
            case error.UNKNOWN_ERROR:
                this.reportMessage = "Error desconocido."
                break;
        }
    }
}
var geo = new GeoLocalizacion();
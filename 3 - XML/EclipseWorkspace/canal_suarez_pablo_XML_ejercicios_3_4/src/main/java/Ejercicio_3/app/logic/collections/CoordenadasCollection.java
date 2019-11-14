package Ejercicio_3.app.logic.collections;

import javax.xml.bind.annotation.XmlElement;

public class CoordenadasCollection {
	
	private double altitud;
	private double longitud;
	private double latitud;
	
	/**
	 * @return the altitud
	 */
	public double getAltitud() {
		return altitud;
	}
	
	/**
	 * @return the longitud
	 */
	public double getLongitud() {
		return longitud;
	}
	
	/**
	 * @return the latitud
	 */
	public double getLatitud() {
		return latitud;
	}
	
	/**
	 * @param altitud the altitud to set
	 */
	@XmlElement
	public void setAltitud(double altitud) {
		this.altitud = altitud;
	}
	
	/**
	 * @param longitud the longitud to set
	 */
	@XmlElement
	public void setLongitud(double longitud) {
		this.longitud = longitud;
	}
	
	/**
	 * @param latitud the latitud to set
	 */
	@XmlElement
	public void setLatitud(double latitud) {
		this.latitud = latitud;
	}
}

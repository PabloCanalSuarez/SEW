package Ejercicio_3.app.logic.elements;

import javax.xml.bind.annotation.XmlElement;

public class FotoElement {

	private String ruta;

	/**
	 * @return the ruta
	 */
	public String getRuta() {
		return ruta;
	}

	/**
	 * @param ruta the ruta to set
	 */
	@XmlElement
	public void setRuta(String ruta) {
		this.ruta = ruta;
	}
}

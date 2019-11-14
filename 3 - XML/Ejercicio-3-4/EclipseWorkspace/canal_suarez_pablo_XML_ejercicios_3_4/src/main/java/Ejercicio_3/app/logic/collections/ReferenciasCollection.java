package Ejercicio_3.app.logic.collections;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

public class ReferenciasCollection {
	
private List<String> referencias = new ArrayList<String>();
	
	/**
	 * @return Lista de las referencias
	 */
	public List<String> getReferencias() {
		return referencias;
	}

	/**
	 * @param referencias - Lista de las referencias
	 */
	@XmlElement(name = "referencia")
	public void setReferencias(List<String> referencias) {
		this.referencias = referencias;
	}

}

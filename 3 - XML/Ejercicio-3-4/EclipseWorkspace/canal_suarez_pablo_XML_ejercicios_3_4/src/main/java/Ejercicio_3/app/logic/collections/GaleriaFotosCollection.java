package Ejercicio_3.app.logic.collections;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import Ejercicio_3.app.logic.elements.FotoElement;

public class GaleriaFotosCollection {
	
	private List<FotoElement> fotos = new ArrayList<FotoElement>();

	/**
	 * @return  Lista de las fotos
	 */
	public List<FotoElement> getFotos() {
		return fotos;
	}

	/**
	 * @param fotos Lista de las fotos
	 * 
	 */
	@XmlElement(name = "foto")
	public void setFotos(List<FotoElement> fotos) {
		this.fotos = fotos;
	}

}

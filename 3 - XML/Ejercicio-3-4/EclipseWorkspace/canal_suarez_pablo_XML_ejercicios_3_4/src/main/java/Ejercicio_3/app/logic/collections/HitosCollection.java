package Ejercicio_3.app.logic.collections;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import Ejercicio_3.app.logic.elements.HitoElement;

public class HitosCollection {

	private List<HitoElement> hitos = new ArrayList<HitoElement>();
	
	/**
	 * @return histos - Lista de los hitos
	 */
	public List<HitoElement> getHitos() {
		return hitos;
	}

	/**
	 * @param Lista de los hitos
	 */
	@XmlElement(name = "hito")
	public void setHitos(List<HitoElement> hitos) {
		this.hitos = hitos;
	}
}

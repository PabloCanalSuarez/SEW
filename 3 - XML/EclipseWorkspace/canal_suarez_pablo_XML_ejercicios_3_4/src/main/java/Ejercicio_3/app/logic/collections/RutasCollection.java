package Ejercicio_3.app.logic.collections;

import java.util.*;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import Ejercicio_3.app.logic.elements.RutaElement;

@XmlRootElement(name = "rutas")
public class RutasCollection {
	
	private List<RutaElement> rutas = new ArrayList<RutaElement>();
	
	/**
	 * @return Lista de las rutas. (RutaElement)
	 */
	public List<RutaElement> getRutas() {
		return rutas;
	}

	/**
	 * 
	 * @param rutas -  Lista de las rutas. (RutaElement)
	 */
	@XmlElement(name = "ruta")
	public void setRutas(List<RutaElement> rutas) {
		this.rutas = rutas;
	}
	
	@Override
	public String toString() {
		String aux = "Rutas [";
		for (RutaElement ruta : rutas) {
			aux += "\n\t" + ruta;
		}
		return aux + "\n]";
	}
}

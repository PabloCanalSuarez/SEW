package xml.model;

import java.util.Collections;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import xml.OrderBy.OrdenarPorAlfabeto;
import xml.OrderBy.OrdenarPorPrecios;

@XmlRootElement(name = "catalogo")
public class Catalogo {

	List<Libro> libros;

	Catalogo() {

	}

	public Catalogo(List<Libro> libros) {
		this.libros = libros;
	}

	public List<Libro> getLibros() {
		return libros;
	}

	public List<Libro> orderByPrecio() {
		List<Libro> librosAux = libros;
		Collections.sort(librosAux, new OrdenarPorPrecios());
		return librosAux;
	}

	public List<Libro> orderByAlfabeto() {
		List<Libro> librosAux = libros;
		Collections.sort(librosAux, new OrdenarPorAlfabeto());
		return librosAux;
	}

	@XmlElement(name = "libro")
	public void setRutas(List<Libro> libros) {
		this.libros = libros;
	}

	@Override
	public String toString() {
		String aux = "Libros [";
		for (Libro libro : libros) {
			aux += "\n\t" + libro;
		}
		return aux + "\n]";
	}

}

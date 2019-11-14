package xml.model;

import javax.xml.bind.annotation.XmlElement;

public class Libro {

	private String titulo;
	private String autor;
	private String sinopsis;
	private double precio;

	public String getTitulo() {
		return titulo;
	}

	@XmlElement
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	@XmlElement
	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getSinopsis() {
		return sinopsis;
	}

	@XmlElement
	public void setSinopsis(String sinopsis) {
		this.sinopsis = sinopsis;
	}

	public double getPrecio() {
		return precio;
	}

	@XmlElement
	public void setPrecio(double precio) {
		this.precio = precio;
	}

}

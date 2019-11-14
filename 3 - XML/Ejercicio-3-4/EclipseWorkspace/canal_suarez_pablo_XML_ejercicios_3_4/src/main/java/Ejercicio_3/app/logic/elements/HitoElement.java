package Ejercicio_3.app.logic.elements;

import javax.xml.bind.annotation.XmlElement;

import Ejercicio_3.app.logic.collections.CoordenadasCollection;
import Ejercicio_3.app.logic.collections.GaleriaFotosCollection;

public class HitoElement {

	private String nombre;
	private String descripcion;
	private CoordenadasCollection coordenada;
	private double distancia;
	private GaleriaFotosCollection galeriaFotos;
	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}
	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}
	/**
	 * @return the coordenada
	 */
	public CoordenadasCollection getCoordenada() {
		return coordenada;
	}
	/**
	 * @return the distancia
	 */
	public double getDistancia() {
		return distancia;
	}
	/**
	 * @return the galeria
	 */
	public GaleriaFotosCollection getGaleriaFotos() {
		return galeriaFotos;
	}
	/**
	 * @param nombre the nombre to set
	 */
	@XmlElement
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	/**
	 * @param descripcion the descripcion to set
	 */
	@XmlElement
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	/**
	 * @param coordenada the coordenada to set
	 */
	@XmlElement
	public void setCoordenada(CoordenadasCollection coordenada) {
		this.coordenada = coordenada;
	}
	/**
	 * @param distancia the distancia to set
	 */
	@XmlElement
	public void setDistancia(double distancia) {
		this.distancia = distancia;
	}
	/**
	 * @param galeria the galeria to set
	 */
	@XmlElement
	public void setGaleriaFotos(GaleriaFotosCollection galeria) {
		this.galeriaFotos = galeria;
	}

	
}

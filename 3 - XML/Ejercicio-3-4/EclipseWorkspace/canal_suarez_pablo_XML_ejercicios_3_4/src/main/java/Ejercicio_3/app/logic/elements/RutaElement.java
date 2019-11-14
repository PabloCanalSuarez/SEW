package Ejercicio_3.app.logic.elements;

import javax.xml.bind.annotation.XmlElement;

import Ejercicio_3.app.logic.collections.CoordenadasCollection;
import Ejercicio_3.app.logic.collections.HitosCollection;
import Ejercicio_3.app.logic.collections.ReferenciasCollection;

public class RutaElement {

	private String nombre;
	private String tipo;
	private String transporte;
	private String fechaInicio;
	private String hora;
	private String duracion;
	private String descripcion;
	private String publico;
	private String lugarInicio;
	private String calleInicio;
	private String recomendacion;
	private CoordenadasCollection coordenadas;
	private ReferenciasCollection referencias;
	private HitosCollection hitos;

	@XmlElement
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@XmlElement
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@XmlElement
	public void setTransporte(String transporte) {
		this.transporte = transporte;
	}

	@XmlElement
	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	@XmlElement
	public void setHora(String hora) {
		this.hora = hora;
	}

	@XmlElement
	public void setDuracion(String duracion) {
		this.duracion = duracion;
	}

	@XmlElement
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@XmlElement
	public void setPublico(String publico) {
		this.publico = publico;
	}

	@XmlElement
	public void setLugarInicio(String lugarInicio) {
		this.lugarInicio = lugarInicio;
	}

	@XmlElement
	public void setCalleInicio(String calleInicio) {
		this.calleInicio = calleInicio;
	}

	@XmlElement
	public void setCoordenadas(CoordenadasCollection coordenadas) {
		this.coordenadas = coordenadas;
	}

	@XmlElement
	public void setReferencias(ReferenciasCollection referencias) {
		this.referencias = referencias;
	}

	@XmlElement
	public void setRecomendacion(String recomendacion) {
		this.recomendacion = recomendacion;
	}

	@XmlElement
	public void setHitos(HitosCollection hitos) {
		this.hitos = hitos;
	}

	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @return the tipo
	 */
	public String getTipo() {
		return tipo;
	}

	/**
	 * @return the transporte
	 */
	public String getTransporte() {
		return transporte;
	}

	/**
	 * @return the fechaInicio
	 */
	public String getFechaInicio() {
		return fechaInicio;
	}

	/**
	 * @return the hora
	 */
	public String getHora() {
		return hora;
	}

	/**
	 * @return the duracion
	 */
	public String getDuracion() {
		return duracion;
	}

	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}

	/**
	 * @return the publico
	 */
	public String getPublico() {
		return publico;
	}

	/**
	 * @return the lugarInicio
	 */
	public String getLugarInicio() {
		return lugarInicio;
	}

	/**
	 * @return the calleInicio
	 */
	public String getCalleInicio() {
		return calleInicio;
	}

	/**
	 * @return the recomendacion
	 */
	public String getRecomendacion() {
		return recomendacion;
	}

	/**
	 * @return the coordenadas
	 */
	public CoordenadasCollection getCoordenadas() {
		return coordenadas;
	}

	/**
	 * @return the referencias
	 */
	public ReferenciasCollection getReferencias() {
		return referencias;
	}

	/**
	 * @return the hitos
	 */
	public HitosCollection getHitos() {
		return hitos;
	}

	@Override
	public String toString() {
		return "Ruta [nombre=" + nombre + ", tipo=" + tipo + ", transporte=" + transporte + ", fechaInicio="
				+ fechaInicio + ", hora=" + hora + ", duracion=" + duracion + ", descripcion=" + descripcion
				+ ", publico=" + publico + ", lugarInicio=" + lugarInicio + ", calleInicio=" + calleInicio
				+ ", recomendacion=" + recomendacion + ", coordenadas=" + coordenadas + ", referencias=" + referencias
				+ ", hitos=" + hitos + "]";
	}
}

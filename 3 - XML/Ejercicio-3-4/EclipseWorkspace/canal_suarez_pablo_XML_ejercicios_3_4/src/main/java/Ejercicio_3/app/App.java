package Ejercicio_3.app;

import java.io.File;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import Ejercicio_3.app.logic.collections.RutasCollection;

/**
 * 
 * @author Pablo Cañal Suárez. UO264903
 * 
 * Práctica XML - Ejercicios 3 y 4.
 * 
 * Tal y como se indica en el pdf de la práctica, ambos ejercicios
 * han sido fusionados en uno sólo, en donde se acepta como entrada
 * un archivo XML (prueba.xml) y se muestra como salida otro
 * archivo XML (pruebaOutput.xml).
 * 
 * En el proceso, el programa formateará de forma automática el archivo
 * introducido, siguiendo los pasos de serialización de objetos en Java
 * por medio de XML y un Marshaller.
 *
 */
public class App {
    public static void main( String[] args ) {
    	try {
    		System.out.println("Loading XML file...");
			RutasCollection rutas = loadXml();
			System.out.print("Processing...");
			System.out.println(" Done.");
//			System.out.println(rutas.toString());
			System.out.println("Creating new XML file...");
			createXml(rutas);
			System.out.println("Done.");
		} catch (JAXBException e) {
			e.printStackTrace();
		}
    }
    
    private static RutasCollection loadXml() throws JAXBException {
		File file = new File("files/prueba.xml");
		JAXBContext jaxbContext = JAXBContext.newInstance(RutasCollection.class);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		return (RutasCollection) jaxbUnmarshaller.unmarshal(file);
	}

	private static void createXml(RutasCollection rutas) throws JAXBException {
		File file = new File("files/pruebaOutput.xml");
		JAXBContext jaxbContext = JAXBContext.newInstance(RutasCollection.class);
		Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
		jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		jaxbMarshaller.marshal(rutas, file);
	}
}

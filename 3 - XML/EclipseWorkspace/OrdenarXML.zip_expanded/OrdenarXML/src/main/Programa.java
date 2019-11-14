package main;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import xml.model.Catalogo;

public class Programa {
	static BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
	
	
	public static void main(String[] args) throws IOException, JAXBException {

		String fileInput = "src/Catalogo.xml";
		String fileOutput = null;
		
		// Catálogo
		Catalogo catToDeb = readXml(fileInput);
		Catalogo catalogo = new Catalogo(readXml(fileInput).getLibros());
		Catalogo aux = null;
		
		// Dar opción de orden
		System.out.println("Introduzca 'precio' si desea que el catálogo se ordene por precio. "
				+ "Introduzca 'alfabeto' si quiere que el catálogo se ordene por orden alfabético de título.");

		// Procesar la opcion
		boolean correct = false;

		while (!correct) {
			String input;

			input = console.readLine();
			if (input.equals("precio")) {
				correct = true;
				fileOutput = "precio.xml";
				// ordenar por precio
				aux = new Catalogo(catalogo.orderByPrecio());
				

			} else if (input.equals("alfabeto")) {
				correct = true;
				fileOutput = "alfabeto.xml";
				// ordenar alfabéticamente
				aux = new Catalogo(catalogo.orderByAlfabeto());
				
			} else {
				System.out.println("Porfavor, introduzca una de las siguientes opciones: precio, alfabeto");
			}
		}
		writeXml(fileOutput, aux);
	}
	
	private static Catalogo readXml(String input) throws JAXBException {
		File file = new File(input);
		JAXBContext jaxbContext = JAXBContext.newInstance(Catalogo.class);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		return (Catalogo) jaxbUnmarshaller.unmarshal(file);
	}

	private static void writeXml(String output, Catalogo catalogo) throws JAXBException {
		File file = new File(output);
		JAXBContext jaxbContext = JAXBContext.newInstance(Catalogo.class);
		Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
		jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		jaxbMarshaller.marshal(catalogo, file);
	}

}

package xml.OrderBy;
import java.util.Comparator;

import xml.model.Libro;

public class OrdenarPorPrecios implements Comparator<Libro> {
	// Orden ascendente
	public int compare(Libro a, Libro b) {
		return (int) (a.getPrecio() - b.getPrecio());
	}
}
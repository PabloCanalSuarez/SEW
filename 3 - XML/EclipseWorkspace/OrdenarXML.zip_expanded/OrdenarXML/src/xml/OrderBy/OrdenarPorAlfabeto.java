package xml.OrderBy;
import java.util.Comparator;

import xml.model.Libro;

public class OrdenarPorAlfabeto implements Comparator<Libro> {

		public int compare(Libro a, Libro b) {
			return a.getTitulo().compareTo(b.getTitulo());
		}
	}


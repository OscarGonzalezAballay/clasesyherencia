'use strict';

const { Publicacion, Libro, Revista } = require('../index');

describe('Clases de la Biblioteca Virtual', () => {
  test('Publicacion debe crear una instancia con título y autor', () => {
    const pub = new Publicacion("Cien Años de Soledad", "Gabriel García Márquez");
    expect(pub.titulo).toBe("Cien Años de Soledad");
    expect(pub.autor).toBe("Gabriel García Márquez");
  });

  test('obtenerDescripcion() de Publicacion debe retornar título y autor', () => {
    const pub = new Publicacion("Cien Años de Soledad", "Gabriel García Márquez");
    expect(pub.obtenerDescripcion()).toBe('"Cien Años de Soledad" por Gabriel García Márquez');
  });

  test('Libro debe heredar de Publicacion y agregar numeroPaginas', () => {
    const libro = new Libro("1984", "George Orwell", 328);
    expect(libro instanceof Publicacion).toBe(true);
    expect(libro.numeroPaginas).toBe(328);
  });

  test('obtenerDescripcion() de Libro debe incluir número de páginas', () => {
    const libro = new Libro("1984", "George Orwell", 328);
    expect(libro.obtenerDescripcion()).toBe('"1984" por George Orwell - 328 páginas.');
  });

  test('Revista debe heredar de Publicacion y agregar numeroEdicion', () => {
    const revista = new Revista("National Geographic", "Varios", 120);
    expect(revista instanceof Publicacion).toBe(true);
    expect(revista.numeroEdicion).toBe(120);
  });

  test('obtenerDescripcion() de Revista debe incluir número de edición', () => {
    const revista = new Revista("National Geographic", "Varios", 120);
    expect(revista.obtenerDescripcion()).toBe('"National Geographic" por Varios - Edición Nº 120.');
  });
});

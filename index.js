//clases y herencia prodevs practica
//Problema: Biblioteca Virtual
//Vas a modelar una biblioteca con clases y herencia.
//  La biblioteca debe ser capaz de almacenar libros y revistas, que tienen algunas propiedades comunes y otras distintas.

//Requisitos:
//Crear una clase base llamada Publicacion, que tenga:
//titulo (string)
//autor (string)
//Método obtenerDescripcion() que retorne un string con el título y autor.
//Crear una subclase Libro que herede de Publicacion y además tenga:
//numeroPaginas (number)
//Método obtenerDescripcion() que sobrescriba el de Publicacion y agregue la cantidad de páginas.
//Crear una subclase Revista que herede de Publicacion y además tenga:
//numeroEdicion (number)
//Método obtenerDescripcion() que sobrescriba el de Publicacion y agregue el número de edición.
//Crear una clase Biblioteca que tenga:
//Un array de publicaciones.
//Método agregarPublicacion(pub) para agregar un libro o revista.
//Método mostrarPublicaciones() que recorra las publicaciones y muestre su descripción.



class Publicacion {
  constructor(titulo, autor) {
   
  }

  obtenerDescripcion() {
    
  }
}

// Subclase Libro
class Libro extends Publicacion {
  constructor(titulo, autor, numeroPaginas) {
  
  }

  obtenerDescripcion() {
  
  }
}

// Subclase Revista
class Revista extends Publicacion {
  constructor(titulo, autor, numeroEdicion) {
 
  }

  obtenerDescripcion() {
    
  }
}

// Clase Biblioteca
class Biblioteca {
  constructor() {
  
  }

  agregarPublicacion(pub) {
   
  }

  mostrarPublicaciones() {
    
  }
}


module.exports = {
  Publicacion,
  Libro,
  Revista,
  Biblioteca 
};

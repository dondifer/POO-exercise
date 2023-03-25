class Persona {
  constructor(nombre, edad, género) {
    this.nombre = nombre;
    this.edad = edad;
    this.género = género;
  }

  obtDetalles() {
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    console.log("Género:", this.género);
  }
}

const myPersona = new Persona("Carlinho", "Dasousa", "Nobiliario");

myPersona.obtDetalles();

class Estudiante extends Persona {
  constructor(nombre, edad, género, curso, grupo) {
    super(nombre, edad, género);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    console.log("Género:", this.género);
    console.log("Curso:", this.curso);
    console.log("Grupo:", this.grupo);
  }
}

const myStudiante = new Estudiante(
  "Carlinho",
  "Dasousa",
  "Nobiliario",
  "Primero",
  "B"
);

myStudiante.registrar();

class Profesor extends Persona {
  constructor(nombre, edad, género, asignatura, nivel) {
    super(nombre, edad, género);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  registrar() {
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    console.log("Género:", this.género);
    console.log("Asignatura:", this.asignatura);
    console.log("Nivel:", this.nivel);
  }
}

const myProfesor = new Profesor(
  "Carlinho",
  "Dasousa",
  "Nobiliario",
  "Teologia",
  "Divino"
);

myProfesor.registrar();

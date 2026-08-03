# 📐 Diagramas UML de la Arquitectura del Sistema

Este documento contiene la representación gráfica de la arquitectura del Sistema de Control Escolar utilizando diagramas estandarizados[cite: 2, 5].

---

## 1. Diagrama de Casos de Uso

* **Actores Principales:** `Alumno`, `Docente`, `Administrador`[cite: 2].
* **Casos de Uso Principales:**
  * `UC01`: Autenticarse en el sistema (Login)[cite: 2, 3].
  * `UC02`: Gestionar registro de alumnos[cite: 2, 3].
  * `UC03`: Registrar y consultar calificaciones[cite: 2, 3].
  * `UC04`: Consultar al Asistente de IA (Chatbot / Diagnóstico Escolar)[cite: 5].

---

## 2. Diagrama de Clases (Modelo de Dominio)

```mermaid
classDiagram
    class Usuario {
        +int id
        +string nombre
        +string email
        +string password
        +login()
    }

    class Alumno {
        +string matricula
        +string carrera
        +calcularPromedio()
    }

    class Docente {
        +string numeroEmpleado
        +asignarCalificacion()
    }

    class Calificacion {
        +int id
        +float nota
        +string materia
        +string periodo
    }

    Usuario <|-- Alumno
    Usuario <|-- Docente
    Alumno "1" -- "*" Calificacion : obtiene
    Docente "1" -- "*" Calificacion : registra
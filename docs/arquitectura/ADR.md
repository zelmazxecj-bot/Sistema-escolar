# ADR: Selección del Stack Tecnológico y Estilo Arquitectónico

* **Estado:** Aceptado
* **Fecha:** 2026-08-03
* **Autor:** Lalo Rodríguez / Equipo de Desarrollo

---

## 1. Contexto y Problema
El Sistema Integral de Control Escolar requiere una arquitectura estructurada, escalable y mantenible para gestionar usuarios (Alumnos, Docentes, Administradores), calificaciones y un módulo asistido por Inteligencia Artificial. Se necesita seleccionar un estilo arquitectónico y patrones de diseño que garanticen una baja dependencia entre componentes y facilidad para realizar pruebas automatizadas.

---

## 2. Decisión Tomada
Se selecciona una **Arquitectura Multicapa basada en API REST (Cliente-Servidor)**:

1. **Capa de Presentación (Frontend):** Interfaz Web responsiva (HTML5, CSS3, JavaScript / Framework Web).
2. **Capa de Negocio (Backend):** Servidor de aplicaciones encendido para procesar reglas de negocio, promedios y lógica de la aplicación.
3. **Capa de Persistencia (Base de Datos):** Base de datos relacional para el almacenamiento estructurado de información.
4. **Capa de Integración Externa:** Conexión vía HTTP a la API de Inteligencia Artificial (Google Gemini API).

---

## 3. Patrones de Diseño Implementados
Para la construcción del código fuente se aplicarán los siguientes patrones clásicos:

* **Singleton:** Para asegurar una única instancia activa del gestor de conexión a la base de datos.
* **Factory Method:** Para la creación modular de objetos del tipo `Usuario` (instanciando dinámicamente `Alumno`, `Docente` o `Administrador`).
* **Observer:** Para notificar automáticamente a los alumnos cuando un docente publique una nueva calificación.

---

## 4. Consecuencias
* **Positivas:**
  * Clara separación de responsabilidades entre el frontend y el backend.
  * Facilidad para contenerizar la aplicación con Docker.
  * Permite ejecutar pruebas unitarias sobre las reglas de negocio sin depender de la interfaz gráfica.
* **Riesgos:**
  * Mayor tiempo invertido en la configuración inicial del entorno de desarrollo.
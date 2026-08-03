# ADR 001: Selección del Stack Tecnológico y Estilo Arquitectónico

* **Estado:** Aceptado
* **Fecha:** 2026-08-03
* **Autor:** Lalo Rodríguez / Equipo de Desarrollo

---

## 1. Contexto y Problema
El Sistema Integral de Control Escolar requiere una arquitectura estructurada, escalable y mantenible para gestionar usuarios (Alumnos, Docentes, Administradores), calificaciones y un módulo asistido por Inteligencia Artificial. Se necesita seleccionar un estilo arquitectónico y patrones de diseño que garanticen una baja dependencia entre componentes y facilidad para realizar pruebas automatizadas[cite: 1, 2].

---

## 2. Decisión Tomada
Se selecciona una **Arquitectura Multicapa basada en API REST (Cliente-Servidor)**[cite: 2]:

1. **Capa de Presentación (Frontend):** Interfaz Web responsiva (HTML5, CSS3, JavaScript / Framework Web)[cite: 2].
2. **Capa de Negocio (Backend):** Servidor de aplicaciones encendido para procesar reglas de negocio, promedios y lógica de la aplicación[cite: 2].
3. **Capa de Persistencia (Base de Datos):** Base de datos relacional para el almacenamiento estructurado de información[cite: 2].
4. **Capa de Integración Externa:** Conexión vía HTTP a la API de Inteligencia Artificial (Google Gemini API)[cite: 5].

---

## 3. Patrones de Diseño Implementados
Para la construcción del código fuente se aplicarán los siguientes patrones clásicos[cite: 2]:

* **Singleton:** Para asegurar una única instancia activa del gestor de conexión a la base de datos[cite: 2].
* **Factory Method:** Para la creación modular de objetos del tipo `Usuario` (instanciando dinámicamente `Alumno`, `Docente` o `Administrador`)[cite: 2].
* **Observer:** Para notificar automáticamente a los alumnos cuando un docente publique una nueva calificación[cite: 2].

---

## 4. Consecuencias
* **Positivas:**
  * Clara separación de responsabilidades entre el frontend y el backend[cite: 2].
  * Facilidad para contenerizar la aplicación con Docker[cite: 4, 5].
  * Permite ejecutar pruebas unitarias sobre las reglas de negocio sin depender de la interfaz gráfica[cite: 1, 2].
* **Riesgos:**
  * Mayor tiempo invertido en la configuración inicial del entorno de desarrollo[cite: 2].
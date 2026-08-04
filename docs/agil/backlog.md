# Product Backlog - Sistema de Control Escolar

Este documento contiene las Historias de Usuario estandarizadas bajo el formato:  
> **"Como [rol] quiero [funcionalidad] para [beneficio]."**

---

## Historias de Usuario (Backlog General)

### Módulo 1: Autenticación y Seguridad
* **01 - Iniciar Sesión:**  
  * **Historia:** Como **usuario (Alumno/Docente/Admin)** quiero **iniciar sesión con mi correo y contraseña** para **acceder de forma segura a mis funciones asignadas**.
  * **Criterios de Aceptación:** Validación de campos obligatorios, credenciales cifradas y mensaje de error en credenciales inválidas.
  * **Prioridad:** Alta | **Puntos de Historia:** 3

* **02 - Recuperación de Contraseña:**  
  * **Historia:** Como **usuario** quiero **solicitar el restablecimiento de mi contraseña** para **recuperar el acceso a mi cuenta en caso de olvido**.
  * **Criterios de Aceptación:** Envío de token o enlace temporal al correo institucional.
  * **Prioridad:** Media | **Puntos de Historia:** 2

---

### Módulo 2: Gestión Escolar y Calificaciones
* **03 - Consultar Calificaciones:**  
  * **Historia:** Como **alumno** quiero **visualizar mis notas organizadas por materia y periodo** para **llevar el control de mi rendimiento académico**.
  * **Criterios de Aceptación:** Mostrar promedio parcial y general calculado automáticamente.
  * **Prioridad:** Alta | **Puntos de Historia:** 3

* **04 - Registrar Calificaciones:**  
  * **Historia:** Como **docente** quiero **ingresar y modificar las calificaciones de mis alumnos** para **mantener el historial académico actualizado**.
  * **Criterios de Aceptación:** Rango permitido de 0 a 100, guardado automático de cambios.
  * **Prioridad:** Alta | **Puntos de Historia:** 5

* **05 - Gestión de Padron de Alumnos:**  
  * **Historia:** Como **administrador** quiero **dar de alta, editar y listar alumnos** para **mantener la base de datos escolar al día**.
  * **Criterios de Aceptación:** Formulario con validación de matrícula única y campos obligatorios.
  * **Prioridad:** Alta | **Puntos de Historia:** 5

* **06 - Asignación de Materias:**  
  * **Historia:** Como **administrador** quiero **asignar grupos y materias a los docentes** para **estructurar la carga horaria del ciclo escolar**.
  * **Prioridad:** Media | **Puntos de Historia:** 3

* **07 - Generación de Kardex en PDF:**  
  * **Historia:** Como **alumno** quiero **descargar mi reporte de calificaciones en formato PDF** para **utilizarlo en trámites escolares o becas**.
  * **Prioridad:** Baja | **Puntos de Historia:** 3

---

### Módulo 3: Inteligencia Artificial (Gemini API)
* **08 - Asistente Escolar Inteligente:**  
  * **Historia:** Como **alumno** quiero **consultar a un chatbot asistente impulsado por IA** para **resolver dudas sobre temas académicos o materias**.
  * **Criterios de Aceptación:** Interfaz de chat integrada, respuesta fluida consumiendo la API de Gemini.
  * **Prioridad:** Alta | **Puntos de Historia:** 8

* **09 - Diagnóstico de Rendimiento con IA:**  
  * **Historia:** Como **docente** quiero **generar un resumen de desempeño grupal mediante IA** para **identificar rápidamente a los alumnos en riesgo de reprobar**.
  * **Prioridad:** Media | **Puntos de Historia:** 5

---

### Módulo 4: Notificaciones y Eventos
* **10 - Notificación de Nuevas Calificaciones:**  
  * **Historia:** Como **alumno** quiero **recibir una alerta cuando un profesor cargue una nueva nota** para **estar enterado inmediatamente**.
  * **Prioridad:** Baja | **Puntos de Historia:** 2
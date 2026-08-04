# Sistema de Control Escolar

![CI/CD Pipeline](https://github.com/zelmazxecj-bot/Sistema-escolar/actions/workflows/deploy.yml/badge.svg)
![Despliegue](https://img.shields.io/badge/despliegue-GitHub%20Pages-brightgreen)

Proyecto integrador para la gestión y control escolar, desarrollado como parte del programa de ingeniería. Incluye pruebas unitarias automatizadas y un pipeline de CI/CD para despliegue continuo.

---

## Demo en Vivo

Puedes acceder a la versión desplegada en producción desde el siguiente enlace:
 **[Ver Sistema Escolar en GitHub Pages](https://zelmazxecj-bot.github.io/Sistema-escolar/)**

---

## Tecnologías Utilizadas

* **HTML5 / CSS3 / JavaScript:** Interfaz de usuario y lógica del cliente.
* **Node.js:** Entorno de ejecución para pruebas automáticas.
* **GitHub Actions:** Pipeline de CI/CD (Integración y Despliegue Continuo).
* **GitHub Pages:** Hosting y servidor de producción en la nube.

---

## Estructura del Proyecto

```text
SISTEMA ESCOLAR/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Pipeline de CI/CD
├── src/                    # Código fuente de la aplicación
│   ├── index.html
│   ├── style.css
│   └── app.js
├── tests/                  # Pruebas unitarias
│   └── sistema.test.js
├── docker/                 # Archivos de contenedorización
├── docs/                   # Documentación técnica
└── README.md
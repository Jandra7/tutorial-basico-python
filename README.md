# 🐍 Tutorial básico de Python

**Materia:** Programación Web
**Tema:** Introducción a Python

Curso interactivo en español para aprender Python desde cero. Todo está en un solo archivo: `index.html` (HTML + CSS + JavaScript). No necesita servidor ni instalación.

## Contenido

- 16 módulos: Introducción, Variables, Entrada/Salida, Operadores, Condicionales, Listas, Tuplas/Sets/Diccionarios, Bucles, Funciones, Errores, Módulos, Archivos, POO, Fechas, APIs y Web Scraping.
- Proyecto final: Gestor de tareas.
- Cheatsheet y Glosario con buscador.
- Ejercicios 🟢 🟡 🔴 con botón "Mostrar solución" y ejercicios con validación.
- Videos recomendados (midudev y HolaMundo, enlaces reales).
- Barra de progreso que se guarda en el navegador (`localStorage`).
- Buscador, modo claro/oscuro, botón para copiar código.
- Exportar: 🖨️ Imprimir, 📕 Descargar PDF, 📝 Descargar Word.
- Se ve bien en celular, tablet y laptop.

## Estructura del proyecto

```text
tutorial-python/
├── index.html                 # Estructura de la página
├── README.md
└── assets/
    ├── css/
    │   ├── style.css          # Hoja principal (importa las demás)
    │   ├── variables.css      # Colores, tipografías y tema oscuro
    │   ├── base.css           # Estilos base
    │   ├── layout.css         # Header, menú lateral, footer
    │   ├── components.css     # Cards, botones, código, ejercicios
    │   ├── responsive.css     # Tablet y laptop
    │   └── print.css          # Impresión y documento PDF
    └── js/
        ├── core/              # Constantes y utilidades comunes
        ├── data/              # Contenido del curso (módulos, videos, glosario)
        ├── services/          # localStorage y exportación (Imprimir, PDF, Word)
        ├── ui/                # Renderizado, buscador, progreso y eventos
        └── main.js            # Punto de entrada
```

Las capas van de adentro hacia afuera: **core → data → services → ui → main**. Cada capa solo usa las anteriores.

## Cómo verlo en tu computadora

Haz doble clic en `index.html` y se abre en el navegador.

## Cómo subirlo a Netlify

### Opción 1: arrastrar y soltar (la más rápida)

1. Entra a https://app.netlify.com y crea una cuenta o inicia sesión (puedes usar GitHub o tu correo).
2. En el menú, ve a **Sites** y luego a **Add new site → Deploy manually**.
3. Arrastra **la carpeta del proyecto** (la que tiene `index.html`) a la zona que dice *"Drag and drop your site output folder here"*.
4. Espera unos segundos. Netlify te da un enlace como `https://nombre-aleatorio.netlify.app`.
5. Para cambiar el nombre, ve a **Site configuration → Change site name**.

Para actualizar la página: ve a **Deploys** en tu sitio y arrastra de nuevo la carpeta.

### Opción 2: desde GitHub (se actualiza solo)

1. Sube la carpeta a un repositorio de GitHub.
2. En Netlify, ve a **Add new site → Import an existing project → GitHub** y elige el repositorio.
3. Deja **Build command** vacío y pon `.` en **Publish directory**.
4. Haz clic en **Deploy**. Cada vez que hagas `git push`, la página se actualiza sola.

> Importante: el archivo tiene que llamarse exactamente `index.html` y estar en la raíz de la carpeta.

## Tecnologías

HTML5, CSS3 y JavaScript sin frameworks. Solo usa `html2pdf.js` desde un CDN (cdnjs) para el botón de PDF. Si no carga, el botón usa Imprimir → Guardar como PDF.

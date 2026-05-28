# Documentación de `src/styles`

Este directorio contiene los estilos SCSS de la aplicación EduPlay.

## Archivos principales

### `styles.scss`
- Archivo principal de importación de estilos.
- Importa variables y estilos base desde `src/styles/base`.
- Importa estilos de componentes desde `src/styles/components`.
- Estructura los estilos en secciones claras para mantener la hoja de estilos modular.

## Estructura de carpetas

### `src/styles/base`
- Contiene estilos base y configuraciones globales.
- Habitualmente incluye:
  - `_settings.scss`: variables, colores, tipografías y configuraciones globales.
  - `_base.scss`: reset de estilos, tipografías base y reglas globales.

### `src/styles/components`
- Contiene estilos específicos para distintos componentes de la aplicación.
- Archivos incluidos en la importación principal:
  - `auth` (probablemente `auth.scss`): estilos para formularios de autenticación.
  - `_buttons.scss`: estilos de botones reutilizables.
  - `_links.scss`: estilos para enlaces.
  - `_eduplay.scss`: estilos de la interfaz principal de EduPlay.
  - `_nada.scss`: estilos de la vista de selección vacía (`NadaSeleccion`).
  - `_games.scss`: estilos de los juegos y tarjetas.
  - `englisgame` (probablemente `englisgame.scss`): estilos de la sección de inglés.
  - `EduPlayDashboard.scss`: estilos del dashboard de EduPlay.

## Cómo funciona

- `styles.scss` importa primero configuraciones globales y luego los estilos de componentes.
- Esto permite que las variables definidas en `_settings.scss` estén disponibles para los componentes.
- La organización modular facilita la mantenibilidad y la extensión de estilos.

## Observaciones

- Algunos imports no usan la extensión `.scss` explícitamente, pero Vite y Sass pueden resolverlos correctamente.
- `styles.scss` sirve como el punto de entrada de estilos que se importa en `src/main.jsx`.
- Asegúrate de mantener consistencia en los nombres de archivos para evitar confusiones al importar.

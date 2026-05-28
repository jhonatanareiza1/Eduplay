# Documentación de `src/components/games`

Este directorio contiene los componentes que forman el panel de juegos y las vistas asociadas dentro de la aplicación EduPlay.

## Archivos principales

### `GameScreen.jsx`
- Contiene la pantalla principal del módulo de juegos.
- Integra los siguientes componentes:
  - `GamesAppBar`
  - `EduPlayDashboard`
  - `EduplayDashboard2`
  - `MateScreen`
  - `InglesScreen`
- Maneja la nota activa seleccionada en el estado global (`notes.active`).
- Usa `useForm` para el formulario editable de título y cuerpo.
- Sincroniza cambios del formulario al estado Redux con `activeNote`.
- Permite eliminar la nota activa con `startDeliting`.

### `GamesAppBar.jsx`
- Barra superior de la sección de juegos.
- Muestra la fecha fija y botones para:
  - seleccionar un archivo local para subirlo
  - guardar la nota activa
- Controla la carga de archivos mediante `startUploading`.

### `GameDashBoard.jsx`
- Componente visual de tablero con métricas de progreso.
- Muestra tarjetas estáticas de:
  - Nivel actual
  - Experiencia total
  - Racha
  - Premios
- Incluye sección de progreso por materias y logro reciente.
- Este componente es un panel informativo estático, no tiene lógica de estado.

### `EduplayDashBoard2.jsx`
- Panel de juegos recomendados y retos diarios.
- Define contenido estático para cada juego y cada reto.
- Usa `useNavigate` para redirigir cuando el usuario hace click en un juego.
- Renderiza tarjetas con datos de:
  - Listening Game
  - Vocabulario Inglés
  - Juego de Memoria
  - Suma y Gana
- Renderiza tarjetas de retos diarios con progreso visual.

### `EduplayDashBoard.jsx`
- Componente con diseño de tablero de estadísticas de usuario.
- También presenta métricas estáticas de avance y experiencia.
- Incluye botones de acceso a tienda y muestran progreso por materia.

## Flujo y responsabilidades

- `GameScreen.jsx` es el componente principal que orquesta toda la vista de juegos.
- `GamesAppBar.jsx` se encarga de las acciones globales de la nota activa.
- `GameDashBoard.jsx` y `EduplayDashBoard2.jsx` son componentes visuales estáticos que mejoran la experiencia del usuario.
- Las rutas hacia los juegos se manejan con `useNavigate`, pero no siempre hay un router asociado a cada juego individual dentro de este directorio.

## Observaciones

- El archivo `GameDashBoard.jsx` parece estar pensado como `EduPlayDashboard` y actualmente se usa como componente de tablero visual.
- El componente `EduplayDashboard2.jsx` contiene rutas a componentes de juegos (`/ListeningGame`, `/VocabularyGame`, `/WordMatchGame`, `/SumaGameScreen`) que no se encuentran directamente en este directorio.
- La mayoría de la lógica de estado de los juegos propiamente dichos está fuera de `src/components/games`, en los directorios `src/components/ingles` y `src/components/matematicas`.

## Qué revisar si quieres ampliar este módulo

1. Añadir rutas reales en el router para cada juego recomendado.
2. Extraer las métricas estáticas a datos dinámicos desde Redux o Firestore.
3. Mejorar `GamesAppBar.jsx` para mostrar estado de guardado en curso.
4. Unificar nombres entre `GameDashBoard.jsx` y `EduplayDashBoard.jsx` para evitar confusión.

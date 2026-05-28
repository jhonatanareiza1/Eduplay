# Documentación de `src/components/eduPlay`

Este directorio agrupa los componentes que forman la interfaz principal del módulo EduPlay.

## Componentes

### `EduplayScreen.jsx`
- Pantalla principal del módulo EduPlay.
- Muestra la barra lateral `SideBar` y el contenido principal.
- Si hay una nota activa en Redux (`notes.active`), renderiza `GameScreen`.
- Si no hay nota activa, muestra `NadaSeleccion`.

### `SideBar.jsx`
- Panel lateral de navegación dentro de EduPlay.
- Muestra el nombre del usuario autenticado.
- Incluye botones para:
  - cerrar sesión (`startLogout`)
  - crear una nueva entrada/nota (`starNewNote`)
- Renderiza la lista de entradas con `EduplayNuevoJ`.

### `EduplayNuevoJ.jsx`
- Listado de entradas/participaciones del usuario.
- Usa `useSelector` para obtener `notes` desde Redux.
- Renderiza cada nota con el componente `EduplayNEntrada`.

### `EduplayNEntrada.jsx`
- Representa una nota individual de la lista.
- Muestra título, cuerpo, fecha y una imagen opcional.
- Si la nota tiene URL, la muestra como fondo de la tarjeta.
- Al hacer click, activa la nota en Redux usando `activeNote`.
- Formatea la fecha con `moment`.

### `NadaSeleccion.jsx`
- Vista mostrada cuando no hay ninguna nota activa.
- Mensaje amigable que invita a seleccionar o iniciar un nuevo juego.
- UI simple con ícono de estrella.

## Flujo de uso

1. `EduplayScreen` se carga después de que el usuario inicia sesión.
2. `SideBar` permite crear nuevas notas y cerrar sesión.
3. `EduplayNuevoJ` muestra las notas guardadas del usuario.
4. Seleccionar una entrada activa la nota y permite editarla en `GameScreen`.
5. Si no hay selección, se muestra `NadaSeleccion`.

## Observaciones

- La carpeta `eduPlay` actúa como el motor de contenido dinámico del módulo principal.
- Las notas se almacenan en Firestore y se sincronizan con Redux.
- `EduplayScreen` no tiene lógica compleja; su función es mostrar la interfaz correcta según el estado de notas.
- `EduplayNEntrada` depende de `moment` para mostrar la fecha en formato amigable.

## Recomendaciones

- Considerar renombrar `EduplayNuevoJ` a `EduplayEntries` para mayor claridad.
- Añadir un indicador de nota activa en `SideBar` para mejorar la experiencia de usuario.
- Documentar la ruta y los permisos de acceso si se extiende la navegación dentro de EduPlay.

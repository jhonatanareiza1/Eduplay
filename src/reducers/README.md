# Documentación de `src/reducers`

Este directorio contiene los reducers de Redux que gestionan el estado global de la aplicación EduPlay.

## Reducers

### `authReducer.jsx`
- Administra el estado de autenticación del usuario.
- Estado inicial: `{}`.
- Acciones:
  - `types.login`: almacena `uid` y `displayName` del usuario.
  - `types.logout`: limpia el estado de autenticación.
- Se utiliza para saber si hay un usuario autenticado en la aplicación.

### `uiReducer.jsx`
- Controla el estado de la interfaz de usuario.
- Estado inicial:
  - `loading`: booleano para indicar si hay una carga en curso.
  - `msgError`: mensaje de error a mostrar en formularios.
- Acciones:
  - `types.uiSetError`: guarda un mensaje de error.
  - `types.uiRemoveError`: elimina el mensaje de error.
  - `types.uiStarLoading`: activa el indicador de carga.
  - `types.uiFinishLoading`: desactiva el indicador de carga.
- Se utiliza principalmente en los formularios de autenticación y en operaciones asíncronas.

### `notesReducer.jsx`
- Maneja las notas del usuario y la nota activa.
- Estado inicial:
  - `notes`: arreglo de notas.
  - `active`: nota seleccionada o `null`.
- Acciones:
  - `types.notesActive`: establece la nota activa.
  - `types.notesAddNew`: agrega una nueva nota al inicio del arreglo.
  - `types.notesLoad`: carga notas desde Firestore.
  - `types.notesUpdated`: actualiza una nota existente.
  - `types.notesDelete`: elimina una nota por ID y limpia la nota activa.
  - `types.notesLogoutCleaning`: limpia notas y nota activa al cerrar sesión.
- Permite que la interfaz de edición de notas se sincronice con el estado global.

## Integración

- Los reducers se combinan en `src/store/store.jsx` mediante `combineReducers`.
- El store resultante se provee a la aplicación desde `src/Inicio.jsx`.
- Estos reducers intervienen en todo el flujo de autenticación, guardado de notas y UI.

## Observaciones

- Los nombres de los tipos de acción se definen en `src/types/types.jsx`.
- El reducer de notas es el núcleo de la gestión de contenido editable en la aplicación.
- El reducer de UI es útil para evitar bloqueos de interfaz al ejecutar acciones asíncronas.

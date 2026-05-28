# Documentación de `src/types`

Este directorio contiene los tipos de acción usados en Redux para la aplicación EduPlay.

## `types.jsx`

### Descripción

Define constantes que representan los tipos de acción para Redux. Estas constantes se usan en las acciones (`src/actions`) y en los reducers (`src/reducers`) para evitar errores de escritura y mantener consistencia.

### Tipos incluidos

- `login`: acción de inicio de sesión.
- `logout`: acción de cierre de sesión.

- `uiSetError`: establece un mensaje de error en la UI.
- `uiRemoveError`: elimina el mensaje de error.
- `uiStarLoading`: activa el estado de carga durante operaciones asíncronas.
- `uiFinishLoading`: desactiva el estado de carga.

- `notesAddNew`: agrega una nota nueva al estado.
- `notesActive`: establece la nota activa.
- `notesLoad`: carga notas desde Firestore.
- `notesUpdated`: actualiza una nota existente.
- `notesFileUrl`: actualiza la URL de la imagen de una nota.
- `notesDelete`: elimina una nota.
- `notesLogoutCleaning`: limpia las notas al cerrar sesión.

### Uso

- En `src/actions` para crear las acciones que disparan cambios de estado.
- En `src/reducers` para comparar `action.type` y actualizar el estado correspondiente.

### Observaciones

- Un par de tipos tienen errores tipográficos en los valores de texto (`ÑNotes]`, `Loguot Cleaning`). Estos están en los valores string, pero no afectan la lógica siempre que se use la constante.
- Mantener estos tipos centralizados permite cambiar nombres sin modificar múltiples archivos.

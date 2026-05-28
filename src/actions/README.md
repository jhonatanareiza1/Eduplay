# Documentación de `src/actions`

Este directorio contiene las acciones de Redux que gestionan la autenticación, las notas y el estado de UI de la aplicación EduPlay.

## Archivos

### `auth.jsx`
- Contiene acciones y thunks relacionados con la autenticación de usuarios.
- Funciones principales:
  - `startLoginEmailPassword(email, password)`: inicia sesión con email y contraseña usando Firebase Auth.
  - `startRegisterAll(email, password, nombre)`: crea un usuario nuevo en Firebase y actualiza su `displayName`.
  - `startGoogleLogin()`: inicia sesión con Google usando `signInWithPopup`.
  - `startLogout()`: cierra la sesión del usuario y limpia el estado de notas.
  - `login(uid, displayName)`: acción síncrona para almacenar los datos del usuario en Redux.
  - `logout()`: acción síncrona para limpiar el estado de autenticación.
- Se apoya en `types` para definir los tipos de acción y en `ui.js` para mostrar estados de carga.
- Usa `SweetAlert2` para mostrar errores de autenticación.

### `notes.jsx`
- Contiene acciones y thunks para administrar las notas del usuario.
- Funciones principales:
  - `starNewNote()`: crea una nueva nota vacía en Firestore y la establece como nota activa.
  - `activeNote(id, note)`: acción que define la nota activa en Redux.
  - `addNewNote(id, note)`: acción que agrega una nota nueva al arreglo de notas.
  - `startLoadingNotes(uid)`: carga las notas del usuario desde Firestore.
  - `setNotes(notes)`: acción que actualiza el arreglo de notas en Redux.
  - `startSaveNote(note)`: guarda los cambios de una nota activa en Firestore.
  - `refreshNote(id, note)`: acción que actualiza una nota existente en el estado.
  - `startUploading(file)`: sube una imagen a Cloudinary y actualiza la nota activa con la URL.
  - `startDeliting(id)`: elimina una nota de Firestore y del estado global.
  - `deleteNote(id)`: acción que elimina una nota del arreglo.
  - `noteLogout()`: limpia notas y nota activa al cerrar sesión.
- Utiliza `fileUpload` y `loadNotes` desde `src/helpers` para manejar archivos y lectura de datos.

### `ui.jsx`
- Contiene acciones para manejar el estado de la interfaz de usuario.
- Funciones principales:
  - `setError(err)`: muestra un mensaje de error en la UI.
  - `removeError()`: elimina el mensaje de error.
  - `starLoading()`: activa el indicador de carga.
  - `finishLoading()`: desactiva el indicador de carga.
- Estas acciones se usan principalmente en procesos asíncronos como login y guardado de notas.

## Flujo general

1. Las acciones de `auth.jsx` autentican al usuario y, al iniciar sesión, disparan `startLoadingNotes`.
2. `notes.jsx` sincroniza las notas de Firestore con el estado Redux.
3. `ui.jsx` controla los estados de carga y muestra errores mientras las acciones asíncronas se ejecutan.
4. El store se conecta con `src/reducers` y `src/store/store.jsx`.

## Observaciones

- Las acciones de Firebase están centralizadas en este directorio, lo que facilita su mantenimiento.
- El código usa thunks (`redux-thunk`) para operaciones asíncronas.
- `auth.jsx` y `notes.jsx` interactúan con servicios externos: Firebase Auth, Firestore y Cloudinary.
- `ui.jsx` mantiene la UI reactiva durante las llamadas a Firebase.

# Documentación de `src/helpers`

Este directorio contiene funciones helper que se usan para manejar archivos y datos externos en la aplicación EduPlay.

## `fileUpload.jsx`

### Descripción

`fileUpload` es una función asíncrona que sube un archivo a Cloudinary y devuelve la URL segura del recurso.

### Funcionamiento

- Recibe un archivo (`file`) desde un input de tipo `file`.
- Crea un `FormData` con los campos:
  - `upload_preset`: `games_react`
  - `file`: el archivo a subir
- Envía la petición `POST` a la API de Cloudinary en `https://api.cloudinary.com/v1_1/dxzskaxml/upload`.
- Si la carga es exitosa, convierte la respuesta a JSON y retorna `secure_url`.
- Si falla, registra el error en la consola y lanza la excepción.

### Uso

Se usa en `src/actions/notes.jsx` dentro de la acción `startUploading`.

### Observaciones

- La función no realiza validación previa del archivo.
- Depende de un `upload_preset` público de Cloudinary.

## `loadNotes.jsx`

### Descripción

`loadNotes` obtiene las notas de Firestore para un usuario específico.

### Funcionamiento

- Recibe el `uid` del usuario autenticado.
- Consulta la colección `
  ${uid}/eduPlay/notes` en Firestore.
- Itera sobre los documentos devueltos y construye un arreglo de notas con `id` y los datos.
- Imprime las notas en la consola y las retorna.

### Uso

Se usa en `src/actions/notes.jsx` dentro de la función `startLoadingNotes`.

### Observaciones

- Retorna todas las notas del usuario sin paginación.
- No aplica filtros ni ordenamiento.
- Depende de la configuración de Firestore en `src/firebase/firebaseConfig.js`.

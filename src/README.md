# Documentación de `src`

Este documento describe la estructura principal y las responsabilidades de los archivos dentro de `src`.

## 1. Punto de entrada

- `src/main.jsx`
  - Renderiza el componente `Inicio` en el elemento raíz del DOM.
  - Importa los estilos globales desde `src/styles/styles.scss`.
  - No usa actualmente `src/App.jsx`.

- `src/Inicio.jsx`
  - Envuelve la aplicación con el `Provider` de Redux y monta `AppRouter`.

## 2. Enrutamiento

- `src/router/AppRouter.jsx`
  - Configura `react-router-dom` con rutas públicas y privadas.
  - Usa Firebase Auth para detectar el estado de sesión.
  - Al iniciar sesión, dispara `login` y `startLoadingNotes`.
  - Rutas:
    - `/auth/*` → `AuthRouter`
    - `/` → `EduplayScreen`
    - `*` → redirige a `/`

- `src/router/AuthRouter.jsx`
  - Define rutas de autenticación:
    - `/auth/login` → `LoginScreen`
    - `/auth/register` → `RegisterScreen`

- `src/router/PrivateRoute.jsx`
  - Protege rutas privadas: solo muestra el hijo si `isAuthenticated` es verdadero.

- `src/router/PublicRoute.jsx`
  - Protege rutas públicas: redirige al usuario si ya está autenticado.

## 3. Estado global (Redux)

- `src/store/store.jsx`
  - Crea el store con `authReducer`, `uiReducer` y `notesReducer`.
  - Aplica `redux-thunk` y habilita Redux DevTools si está disponible.

- `src/types/types.jsx`
  - Define los tipos de acciones usados en toda la aplicación.

### Reducers

- `src/reducers/authReducer.jsx`
  - Administra el estado de autenticación.
  - `login` guarda `{ uid, name }`.
  - `logout` limpia el estado.

- `src/reducers/uiReducer.jsx`
  - Controla estados de UI: `loading` y `msgError`.
  - Usa acciones para errores y carga.

- `src/reducers/notesReducer.jsx`
  - Maneja la lista de notas y la nota activa.
  - Acciones: agregar, cargar, actualizar, eliminar, limpiar al cerrar sesión.

## 4. Autenticación y Firebase

- `src/firebase/firebaseConfig.js`
  - Configura Firebase App, Auth y Firestore.
  - Exporta `auth`, `db` y `googleAuthProvider`.

- `src/actions/auth.jsx`
  - Acciones asíncronas de login, registro y logout.
  - Funciones usadas:
    - `startLoginEmailPassword`
    - `startRegisterAll`
    - `startGoogleLogin`
    - `startLogout`
  - Usa SweetAlert2 para mostrar errores.

- `src/actions/ui.jsx`
  - Acciones sencillas para estado de carga y errores.

## 5. Notas / contenido editable

- `src/actions/notes.jsx`
  - Administra la creación, carga, edición, subida de archivos y eliminación de notas.
  - Se conecta con Firestore en la colección `
    ${uid}/eduPlay/notes`.

- `src/helpers/loadNotes.jsx`
  - Recupera notas desde Firestore.

- `src/helpers/fileUpload.jsx`
  - Sube archivos a Cloudinary y devuelve la URL segura.

## 6. Componentes principales

### Autenticación

- `src/components/auth/LoginScreen.jsx`
  - Formulario de login con email/password y Google.
  - Desactiva el botón si `loading` está activo.

- `src/components/auth/RegisterScreen.jsx`
  - Formulario de registro con validación de nombre, correo y contraseña.
  - Muestra errores con `ui.msgError`.

### UI común

- `src/components/ui/NavBar.jsx`
  - Barra de navegación para acceder a secciones y cerrar sesión.
  - Actualmente incluye enlaces a páginas como `INGLES`, `MATEMATICAS`, `TIENDA`, `RANKING`, `RETOS` y `PROGRESO`.

### Core de la plataforma EduPlay

- `src/components/eduPlay/EduplayScreen.jsx`
  - Pantalla principal del módulo EduPlay.
  - Muestra `SideBar` y el contenido central de `GameScreen` o `NadaSeleccion`.

- `src/components/eduPlay/SideBar.jsx`
  - Muestra nombre de usuario, botón de logout y botón para crear nueva nota.

- `src/components/eduPlay/EduplayNuevoJ.jsx`
  - Lista las notas existentes como entradas.

- `src/components/eduPlay/EduplayNEntrada.jsx`
  - Representa una nota en la lista y la activa cuando se hace click.

- `src/components/games/GameScreen.jsx`
  - Vista principal de juego que reúne:
    - `GamesAppBar`
    - `EduPlayDashboard`
    - `EduPlayDashboard2`
    - `MateScreen`
    - `InglesScreen`
  - También incluye la edición de la nota activa y la opción de borrarla.

### Dashboard y módulos

- `src/components/games/GamesAppBar.jsx`
  - Barra con botones para subir imagen (`fileSelector`) y guardar la nota activa.

- `src/components/games/GameDashBoard.jsx`
  - Layout visual de tablero con métricas simuladas de progreso.

- `src/components/games/EduplayDashboard2.jsx`
  - Tarjetas de juegos recomendados y retos diarios.

### Juegos de inglés

- `src/components/ingles/InglesScreen.jsx`
  - Agrupa los siguientes mini juegos:
    - `WordMatchGame`
    - `VocabularyGame`
    - `VerbGame`
    - `ListeningGame`

### Juegos de matemáticas

- `src/components/matematicas/mateScreen.jsx`
  - Agrupa los juegos:
    - `MatematicaScreen`
    - `SumaGameScreen`

- `src/components/matematicas/MatematicaScreen.jsx`
  - Mini juego donde el usuario hace click en un enemigo móvil.
  - Controla puntaje, nivel, vidas, tiempo y fin de juego.

- `src/components/matematicas/SumaGameScreen.jsx`
  - Juego de cálculo mental con operaciones +, - y *.
  - Controla puntaje, nivel, vidas, tiempo, mensaje de acierto/error y reinicio.

## 7. Archivos auxiliares y no usados

- `src/App.jsx`
  - Componente de plantilla de Vite que actualmente no se monta.

- `src/api/Gemini.jsx`
  - Cliente de Google GenAI configurado con `VITE_GEMINI_API_KEY`.
  - No se observa uso directo en los archivos principales.

- `src/assets/` y `src/styles/`
  - Contienen imágenes y estilos SCSS para la aplicación.

## 8. Flujo general de la aplicación

1. `main.jsx` renderiza `Inicio`.
2. `Inicio` envuelve el app en Redux y monta `AppRouter`.
3. `AppRouter` detecta el estado de sesión Firebase.
4. Si el usuario está autenticado, muestra `EduplayScreen`.
5. `EduplayScreen` renderiza la barra lateral y la pantalla de juego.
6. `GameScreen` permite editar notas, subir imágenes, y navegar entre juegos.

## 9. Observaciones importantes

- La autenticación utiliza Firebase Email/Password y Google Sign-In.
- Las notas se persisten en Firestore bajo el usuario autenticado.
- Hay rutas de SPA definidas, pero varias rutas en la UI (`NavLink`) apuntan actualmente a `/matematicas` y pueden no estar conectadas a componentes específicos.
- Los componentes de juego están montados en la misma pantalla principal, por lo que no hay una navegación completa entre cada mini juego.

---

Este archivo sirve como guía rápida para comprender la arquitectura de `src` y localizar los módulos principales del proyecto.
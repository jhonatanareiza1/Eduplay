# Documentación de `src/router`

Este directorio contiene los componentes de enrutamiento de la aplicación EduPlay.

## Archivos

### `AppRouter.jsx`
- Componente principal de enrutamiento de la aplicación.
- Usa `react-router-dom` para definir rutas públicas y privadas.
- Escucha el estado de autenticación de Firebase con `onAuthStateChanged`.
- Al autenticar al usuario, dispara las acciones de Redux:
  - `login(user.uid, user.displayName)`
  - `startLoadingNotes(user.uid)`
- Rutas principales:
  - `/auth/*` → `AuthRouter` (rutas públicas)
  - `/` → `EduplayScreen` (ruta privada)
  - `*` → redirige a `/`
- Muestra un mensaje de carga mientras se verifica el estado de sesión.

### `AuthRouter.jsx`
- Define las rutas de autenticación.
- Rutas:
  - `/auth/login` → `LoginScreen`
  - `/auth/register` → `RegisterScreen`
  - `*` → redirige a `/auth/register`
- Se usa dentro de `AppRouter.jsx` como rutas públicas.

### `PrivateRoute.jsx`
- Componente de orden superior para proteger rutas privadas.
- Recibe `isAuthenticated` y renderiza el contenido hijo solo si el usuario está autenticado.
- Si no lo está, redirige a `/auth/login`.

### `PublicRoute.jsx`
- Componente para rutas públicas que no deben ser accesibles cuando el usuario ya está autenticado.
- Si el usuario está autenticado, redirige a `/`.
- Si no, renderiza el contenido hijo.

## Flujo de enrutamiento

1. `AppRouter.jsx` carga y verifica el estado de sesión de Firebase.
2. Si el usuario no está autenticado, muestra las rutas dentro de `AuthRouter`.
3. Si el usuario está autenticado, permite el acceso a la ruta principal `/`.
4. Las rutas de tipo `PublicRoute` evitan que un usuario autenticado vuelva a ver los formularios de login/registro.
5. Las rutas de tipo `PrivateRoute` protegen el contenido interno de EduPlay.

## Observaciones

- El enrutamiento está diseñado como una SPA clásica con rutas públicas y privadas.
- La ruta `*` en `AuthRouter.jsx` redirige al registro por defecto.
- Si deseas extender el proyecto, puedes agregar rutas adicionales a `AppRouter.jsx` y `AuthRouter.jsx` para nuevas secciones.

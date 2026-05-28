# Documentación de `src/store`

Este directorio contiene la configuración del store de Redux para la aplicación EduPlay.

## `store.jsx`

### Descripción

Configura el store global de Redux que utiliza la aplicación para manejar el estado de autenticación, UI y notas.

### Componentes principales

- `combineReducers`: combina los reducers de `auth`, `ui` y `notes`.
- `applyMiddleware(thunk)`: habilita thunks para acciones asíncronas con `redux-thunk`.
- `composeEnhancers`: permite usar Redux DevTools si está disponible en el navegador.

### Estado global

El store combina los siguientes slices:
- `auth`: estado de usuario autenticado.
- `ui`: estado de interfaz de usuario (carga y errores).
- `notes`: notas del usuario y la nota activa.

### Integración

- Se importa en `src/Inicio.jsx`.
- `Inicio.jsx` envuelve la aplicación con `<Provider store={store}>`.
- Así, cualquier componente puede acceder al estado global mediante `useSelector` y disparar acciones con `useDispatch`.

### Observaciones

- El store usa la versión legacy de `createStore` (`legacy_createStore`).
- Redux DevTools se habilita de forma condicional para facilitar el debug.
- Esta configuración es una base estándar para una aplicación React + Redux con soporte para operaciones asíncronas.

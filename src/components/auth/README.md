# Documentación de `src/components/auth`

Este directorio contiene los formularios de autenticación de la aplicación EduPlay.

## Componentes

### `LoginScreen.jsx`
- Formulario de inicio de sesión.
- Permite ingresar email y contraseña.
- También ofrece autenticación con Google mediante `startGoogleLogin`.
- Usa el hook `useForm` para controlar los valores del formulario.
- Deshabilita el botón de login cuando el estado `loading` de Redux está activo.
- Envía la acción `startLoginEmailPassword(email, password)` al hacer submit.
- Incluye un enlace a la ruta `/auth/register` para crear una nueva cuenta.

### `RegisterScreen.jsx`
- Formulario de registro de usuarios.
- Permite ingresar email, nombre completo, teléfono, contraseña y confirmación de contraseña.
- Realiza validaciones básicas antes de enviar:
  - nombre requerido
  - email válido
  - la contraseña debe coincidir y tener al menos 5 caracteres
- Muestra mensajes de error con el estado `msgError` de Redux.
- Envía la acción `startRegisterAll(email, password, nombre)` cuando el formulario es válido.
- Incluye un enlace a la ruta `/auth/login` para volver a iniciar sesión.

## Flujo de autenticación

1. `LoginScreen` y `RegisterScreen` son accesibles a través de `AuthRouter`.
2. `LoginScreen` usa `startLoginEmailPassword` para autenticar con Firebase Email/Password.
3. `RegisterScreen` registra el usuario con Firebase y actualiza su perfil con `displayName`.
4. El estado global de UI gestiona `loading` y mensajes de error durante la autenticación.
5. Tras autenticarse, el router redirige al usuario a la aplicación principal.

## Observaciones

- El componente `LoginScreen` está diseñado para ser simple y directo, pero tiene texto de placeholder en inglés.
- El componente `RegisterScreen` usa `validator` para la validación de email.
- Ambos componentes dependen de las acciones de Redux definidas en `src/actions/auth.jsx` y `src/actions/ui.jsx`.

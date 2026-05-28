# Documentación de `src/hooks`

Este directorio contiene hooks personalizados reutilizables para la aplicación EduPlay.

## `useForm.jsx`

`useForm` es un hook simple para manejar formularios controlados en React.

### Uso

```jsx
import { useForm } from "../../hooks/useForm";

const [formValues, handleInputChange, reset] = useForm({
  email: "",
  password: "",
});
```

### Qué hace

- `values`: objeto con los valores actuales del formulario.
- `handleInputChange`: función que actualiza el valor correspondiente según el `name` del input.
- `reset`: función que restablece el estado del formulario a un valor inicial (o a un nuevo estado pasado como argumento).

### Comportamiento

- Cuando el usuario modifica un campo, `handleInputChange` actualiza el estado con la clave `target.name` y el valor `target.value`.
- `reset()` devuelve el formulario a su estado inicial.
- `reset(newFormState)` permite establecer un estado de formulario personalizado.

### Ventajas

- Evita escribir lógica de estado repetitiva en cada formulario.
- Hace el código de formulario más limpio y reutilizable.
- Es compatible con cualquier conjunto de campos mientras el input tenga el atributo `name`.

### Observaciones

- Esta implementación devuelve un array en lugar de un objeto, por lo que se desestructura como `[values, handleInputChange, reset]`.
- El hook no valida entradas; solo maneja estado y cambios de input.

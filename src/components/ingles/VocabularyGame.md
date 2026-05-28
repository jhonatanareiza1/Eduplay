# VocabularyGame

Componente de la sección de inglés que practica palabras incompletas.

## Descripción

`VocabularyGame` muestra una palabra con letras faltantes y solicita al usuario completar la palabra correctamente.

## Estado

- `index`: índice de la palabra actual en la lista `words`.
- `input`: texto ingresado por el usuario.
- `score`: puntaje guardado por respuestas correctas.

## Lógica

- `words`: arreglo de objetos con:
  - `incomplete`: palabra con espacios en blanco.
  - `answer`: palabra completa correcta.
- `checkWord()`: convierte la entrada a mayúsculas, la compara con `current.answer`, suma puntaje si es correcta y avanza al siguiente elemento.

## Comportamiento

1. El usuario ve la palabra parcial.
2. Escribe su forma completa.
3. Presiona `Verify`.
4. Si la respuesta coincide, se incrementa el puntaje.
5. Se limpia el input y pasa a la siguiente palabra.

## Posibles mejoras

- Agregar retroalimentación visual de acierto/error.
- Permitir palabras más largas y múltiples niveles.
- Mostrar la respuesta correcta cuando el usuario falla.

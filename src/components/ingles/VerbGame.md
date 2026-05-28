# VerbGame

Componente de juego de inglés que practica los verbos en pasado.

## Descripción

`VerbGame` presenta un verbo en tiempo presente y solicita al usuario escribir su forma en pasado.

## Estado

- `index`: índice del verbo actual en la lista `verbs`.
- `answer`: valor ingresado por el usuario en el campo de texto.
- `score`: puntaje total de respuestas correctas.

## Lógica

- `verbs`: arreglo de objetos con verbos en presente y pasado.
- `current`: verbo actual basado en `index`.
- `verify()`: si la respuesta coincide con `current.past`, se incrementa el puntaje.
- Avanza al siguiente verbo usando `setIndex((prev) => (prev + 1) % verbs.length)`.

## Comportamiento

1. El usuario ve el verbo en presente.
2. Escribe la forma en pasado.
3. Presiona `Answer`.
4. Si la respuesta es correcta, el puntaje aumenta.
5. Se limpia el input y se muestra el siguiente verbo.

## Mejoras posibles

- Agregar feedback visible de respuesta correcta/incorrecta.
- Incluir más verbos y niveles de dificultad.
- Añadir soporte para mayúsculas y entradas vacías.

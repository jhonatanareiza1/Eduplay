# ListeningGame

Componente de juego de comprensión auditiva en la sección de inglés.

## Descripción

`ListeningGame` permite al usuario escuchar una palabra en inglés y escribirla para verificar si la transcripción es correcta.

## Estado

- `index`: índice de la palabra actual en la lista `words`.
- `answer`: texto ingresado por el usuario.
- `score`: puntaje acumulado.

## Comportamiento

1. El usuario presiona el botón `Listen`.
2. La palabra actual se reproduce con `SpeechSynthesisUtterance` en inglés (`en-US`).
3. El usuario escribe lo que escuchó.
4. Al presionar `Check`, se comprueba si la palabra escrita coincide con la palabra actual.
5. Si es correcta, se suma 1 al puntaje.
6. Se limpia el campo y se avanza a la siguiente palabra.

## Lista de palabras

Actualmente el juego usa el arreglo estático:

- `hello`
- `computer`
- `teacher`

## Consideraciones

- Puede mejorar agregando un mensaje de respuesta correcta/incorrecta.
- Puede ampliarse con más palabras, niveles o control de errores.

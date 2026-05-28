# Documentación de `src/components/ingles`

Este directorio agrupa los mini juegos de inglés de la aplicación EduPlay.

## Componente principal

- `InglesScreen.jsx`
  - Contenedor principal de la sección de inglés.
  - Renderiza una cuadrícula con los siguientes juegos:
    - `WordMatchGame`.
    - `VocabularyGame`.
    - `VerbGame`.
    - `ListeningGame`.
  - No posee lógica propia de estado, solo organiza los componentes de juego.

## Mini juegos incluidos

- `WordMatchGame.jsx`
  - Juego de correspondencia de palabras que usa Google Gemini para generar listas de palabras en inglés y sus traducciones al español.
  - Presenta una palabra en inglés y varias opciones en español.
  - El puntaje aumenta si se selecciona la traducción correcta.
  - Cambia de categoría automáticamente según el puntaje: `animals`, `foods`, `sports`, `school`, `verbs`.

- `VocabularyGame.jsx`
  - Enfocado en la práctica de vocabulario y reconocimiento de palabras.
  - Muestra palabras con letras faltantes y el usuario debe completar la palabra.

- `VerbGame.jsx`
  - Centrado en el aprendizaje de tiempos verbales o conjugaciones.
  - Muestra un verbo en presente y el usuario debe escribir su forma en pasado.

- `ListeningGame.jsx`
  - Diseñado para ejercicios de comprensión auditiva.
  - Reproduce una palabra en inglés usando la API de síntesis de voz y el usuario debe escribir lo que escucha.

## Estilo y diseño

- Usa la clase `english-grid` para el layout principal.
- Cada juego se representa como un componente independiente dentro de la sección.

## Observaciones

- El componente `InglesScreen` es ideal para montar una vista de dashboard de inglés.
- Si quieres separar la lógica, cada juego ya está encapsulado en su propio componente.

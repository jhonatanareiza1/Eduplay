# Documentación de `src/components/matematicas`

Este directorio contiene los componentes del módulo de matemáticas de la aplicación EduPlay.

## Componentes

### `mateScreen.jsx`
- Contenedor principal del módulo de matemáticas.
- Renderiza ambos mini juegos en una cuadrícula:
  - `MatematicaScreen`: juego de reacción y puntería.
  - `SumaGameScreen`: juego de cálculo mental.
- No implementa lógica de estado propia, solo organiza los juegos visualmente.
- Este componente se importa en `src/components/games/GameScreen.jsx`.

### `MatematicaScreen.jsx`
- Mini juego de acción donde el usuario debe hacer click en un enemigo móvil.
- Estados principales:
  - `score`: puntaje obtenido.
  - `level`: nivel actual, se incrementa cada 5 puntos.
  - `lives`: vidas restantes, se reduce cada 5 segundos.
  - `position`: ubicación en pantalla del enemigo.
  - `time`: cuenta regresiva del juego.
  - `gameOver`: indica si el juego terminó.
- Mecánica:
  - Al hacer click, se suma puntuación y el enemigo salta a una nueva posición.
  - Cada 5 puntos se aumenta el nivel.
  - Cada 5 segundos se pierde una vida y el enemigo se mueve nuevamente.
  - Si el tiempo llega a 0 o las vidas se acaban, el juego termina.

### `SumaGameScreen.jsx`
- Juego educativo de operaciones matemáticas.
- Estados principales:
  - `score`: cantidad de respuestas correctas.
  - `level`: incrementa cada 5 aciertos.
  - `lives`: decrementa con respuestas incorrectas.
  - `time`: duración disponible para el jugador.
  - `num1`, `num2`, `operator`: componentes de la pregunta generada.
  - `answer`: respuesta ingresada por el usuario.
  - `message`: feedback de correcto o incorrecto.
  - `gameOver`: indica fin de partida.
- Mecánica:
  - Genera preguntas aleatorias según el nivel.
  - Niveles superiores agregan operadores más complejos.
  - Verifica el resultado, actualiza puntaje y feedback.
  - Si se agotan vidas o tiempo, el juego termina.

## Flujo de uso

1. `GameScreen.jsx` renderiza `mateScreen` junto con otros módulos de juego.
2. `mateScreen.jsx` muestra ambos juegos de matemáticas en una misma vista.
3. El usuario puede interactuar con cualquiera de los dos mini juegos.

## Observaciones

- La clase CSS `english-grid` se reutiliza para la disposición en cuadrícula, aunque el módulo es de matemáticas.
- `mateScreen.jsx` debería renombrarse a `MateScreen.jsx` para seguir las convenciones de componentes React.
- Sería útil extraer la generación de preguntas de `SumaGameScreen.jsx` a una función auxiliar si se desea escalar el juego.
- `MatematicaScreen.jsx` mezcla lógica de usuario y temporizador en el mismo componente; puede separarse para mayor mantenimiento.

## Recomendaciones de mejora

- Añadir un mensaje de tipo "correcto" / "incorrecto" en `MatematicaScreen.jsx`.
- Crear más categorías de preguntas en `SumaGameScreen.jsx`.
- Agregar una ruta específica para la sección de matemáticas en el router si aún no existe.

import { useEffect, useState } from "react";

/**
 * MatematicaScreen
 * ----------------
 * Componente de React que renderiza un mini juego interactivo.
 *
 * Estado del juego:
 * - score: puntaje actual del jugador.
 * - level: nivel del juego, aumenta cada 5 aciertos.
 * - lives: vidas restantes, se reduce automáticamente.
 * - position: posición del enemigo que se debe clickear.
 * - time: tiempo restante en segundos.
 * - gameOver: bandera que indica si el juego terminó.
 *
 * Mecánicas:
 * - El jugador debe hacer click en el enemigo para ganar puntos.
 * - El enemigo cambia de posición tras cada click.
 * - Cada 5 puntos sube el nivel.
 * - Cada 5 segundos se reduce una vida y el enemigo se mueve.
 * - El temporizador decrementa cada segundo y termina el juego a 0.
 * - El botón "Reiniciar" restablece todos los valores.
 */
const MatematicaScreen = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [position, setPosition] = useState({
    top: 100,
    left: 100,
  });
  const [time, setTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  /**
   * Mueve el enemigo a una posición aleatoria dentro del área de juego.
   */
  const moveEnemy = () => {
    const top = Math.random() * 300;
    const left = Math.random() * 500;

    setPosition({ top, left });
  };

  /**
   * Maneja el click sobre el enemigo.
   * Aumenta el puntaje, actualiza el nivel si corresponde y mueve al enemigo.
   */
  const handleClick = () => {
    if (gameOver) return;

    const newScore = score + 1;
    setScore(newScore);

    if (newScore % 5 === 0) {
      setLevel((prev) => prev + 1);
    }

    moveEnemy();
  };

  /**
   * Efecto de juego que reduce una vida cada 5 segundos.
   * Si las vidas llegan a 0, activa el estado de juego terminado.
   */
  useEffect(() => {
    if (gameOver) return;

    const lifeInterval = setInterval(() => {
      setLives((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }

        return prev - 1;
      });

      moveEnemy();
    }, 5000);

    return () => clearInterval(lifeInterval);
  }, [gameOver]);

  /**
   * Temporizador principal del juego.
   * Disminuye el tiempo cada segundo y termina el juego cuando llega a 0.
   */
  useEffect(() => {
    if (time <= 0) {
      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  /**
   * Reinicia todas las variables de estado para comenzar un nuevo juego.
   */
  const restartGame = () => {
    setScore(0);
    setLevel(1);
    setLives(3);
    setTime(30);
    setGameOver(false);
  };

  return (
    <div className="game-card">
      <h1>Mini Juego React</h1>
      <h2>Puntaje: {score}</h2>
      <h2>Nivel: {level}</h2>
      <h2>Vidas: {lives}</h2>
      <h3>Tiempo: {time}</h3>

      {gameOver && (
        <div>
          <h2>Juego terminado</h2>
          <button onClick={restartGame}>Reiniciar</button>
        </div>
      )}

      {!gameOver && (
        <div
          className="enemy"
          onClick={handleClick}
          style={{
            top: position.top,
            left: position.left,
            position: "absolute",
          }}
        >
          👾
        </div>
      )}
    </div>
  );
};

export default MatematicaScreen;

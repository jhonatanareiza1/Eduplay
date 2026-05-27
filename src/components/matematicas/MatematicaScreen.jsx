import { useEffect, useState } from "react";

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

  // mover enemigo
  const moveEnemy = () => {
    const top = Math.random() * 300;

    const left = Math.random() * 500;

    setPosition({ top, left });
  };

  // click enemigo
  const handleClick = () => {
    if (gameOver) return;

    const newScore = score + 1;

    setScore(newScore);

    // subir nivel cada 5 puntos
    if (newScore % 5 === 0) {
      setLevel((prev) => prev + 1);
    }

    moveEnemy();
  };

  // perder vidas si no haces click
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

  // temporizador
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

  // reiniciar juego
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

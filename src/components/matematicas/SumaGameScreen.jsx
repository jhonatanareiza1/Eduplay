import { useEffect, useState } from "react";

const SumaGameScreen = () => {
  const [score, setScore] = useState(0);

  const [level, setLevel] = useState(1);

  const [lives, setLives] = useState(3);

  const [time, setTime] = useState(60);

  const [num1, setNum1] = useState(1);

  const [num2, setNum2] = useState(1);

  const [operator, setOperator] = useState("+");

  const [answer, setAnswer] = useState("");

  const [message, setMessage] = useState("");

  const [gameOver, setGameOver] = useState(false);

  // generar preguntas
  const generateQuestion = () => {
    let maxNumber = 10;

    if (level >= 2) maxNumber = 20;

    if (level >= 3) maxNumber = 50;

    const random1 = Math.floor(Math.random() * maxNumber);

    const random2 = Math.floor(Math.random() * maxNumber);

    // operadores por nivel
    let operators = ["+"];

    if (level >= 2) {
      operators.push("-");
    }

    if (level >= 3) {
      operators.push("*");
    }

    const randomOperator =
      operators[Math.floor(Math.random() * operators.length)];

    setNum1(random1);

    setNum2(random2);

    setOperator(randomOperator);

    setAnswer("");
  };

  // calcular respuesta correcta
  const getCorrectAnswer = () => {
    switch (operator) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      default:
        return 0;
    }
  };

  // verificar respuesta
  const checkAnswer = () => {
    if (gameOver) return;

    const correct = getCorrectAnswer();

    if (parseInt(answer) === correct) {
      const newScore = score + 1;

      setScore(newScore);

      setMessage("✅ Correcto");

      // subir niveles
      if (newScore % 5 === 0) {
        setLevel((prev) => prev + 1);
      }

      generateQuestion();
    } else {
      setLives((prev) => prev - 1);

      setMessage("❌ Incorrecto");

      if (lives - 1 <= 0) {
        setGameOver(true);
      }
    }
  };

  // temporizador
  useEffect(() => {
    if (gameOver) return;

    if (time <= 0) {
      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, gameOver]);

  // primera pregunta
  useEffect(() => {
    generateQuestion();
  }, []);

  // reiniciar juego
  const restartGame = () => {
    setScore(0);

    setLevel(1);

    setLives(3);

    setTime(60);

    setGameOver(false);

    setMessage("");

    generateQuestion();
  };

  return (
    <div className="game-card">
      <h1>🎮 Juego Matemático</h1>

      <h2>Puntaje: {score}</h2>

      <h2>Nivel: {level}</h2>

      <h2>❤️ Vidas: {lives}</h2>

      <h2>⏰ Tiempo: {time}</h2>

      {!gameOver && (
        <>
          <h1>
            {num1} {operator} {num2}
          </h1>

          <input
            className="Game__inglesinput"
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Tu respuesta"
          />

          <br />
          <br />

          <button onClick={checkAnswer}>Responder</button>

          <h3>{message}</h3>
        </>
      )}

      {gameOver && (
        <div>
          <h1>💀 Juego Terminado</h1>

          <h2>Puntaje Final: {score}</h2>

          <button className="boton__inglesa" onClick={restartGame}>
            Reiniciar Juego
          </button>
        </div>
      )}
    </div>
  );
};

export default SumaGameScreen;

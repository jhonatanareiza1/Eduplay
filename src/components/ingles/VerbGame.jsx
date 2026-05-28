/**
 * VerbGame
 * ----------------
 * Mini juego que practica los verbos en pasado en inglés.
 *
 * El usuario ve un verbo en presente y debe escribir su forma en pasado.
 * Si la respuesta es correcta, el puntaje aumenta.
 * Luego se avanza al siguiente verbo.
 *
 * Estado:
 * - `index`: índice del verbo actual en la lista `verbs`.
 * - `answer`: la respuesta ingresada por el usuario.
 * - `score`: puntaje total de respuestas correctas.
 */
import { useState } from "react";

const verbs = [
  {
    present: "go",
    past: "went",
  },
  {
    present: "eat",
    past: "ate",
  },
];

const VerbGame = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const current = verbs[index];

  const verify = () => {
    if (answer.toLowerCase() === current.past) {
      setScore((prev) => prev + 1);
    }

    setAnswer("");
    setIndex((prev) => (prev + 1) % verbs.length);
  };

  return (
    <div className="game-card">
      <h2>📚 Past Verbs</h2>
      <p>Score: {score}</p>
      <h1>{current.present}</h1>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="past tense"
      />
      <button onClick={verify}>Answer</button>
    </div>
  );
};

export default VerbGame;

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

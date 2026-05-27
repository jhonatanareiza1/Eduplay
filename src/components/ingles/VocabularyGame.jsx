import { useState } from "react";

const words = [
  {
    incomplete: "APP_E",
    answer: "APPLE",
  },
  {
    incomplete: "BAN_NA",
    answer: "BANANA",
  },
];

const VocabularyGame = () => {
  const [index, setIndex] = useState(0);

  const [input, setInput] = useState("");

  const [score, setScore] = useState(0);

  const current = words[index];

  const checkWord = () => {
    if (input.toUpperCase() === current.answer) {
      setScore((prev) => prev + 1);
    }

    setInput("");

    setIndex((prev) => (prev + 1) % words.length);
  };

  return (
    <div className="game-card">
      <h2>✍️ Vocabulary</h2>

      <p>Score: {score}</p>

      <h1>{current.incomplete}</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write word"
      />

      <button onClick={checkWord}>Verify</button>
    </div>
  );
};

export default VocabularyGame;

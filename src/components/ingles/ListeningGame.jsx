import { useState } from "react";

const words = ["hello", "computer", "teacher"];

const ListeningGame = () => {
  const [index, setIndex] = useState(0);

  const [answer, setAnswer] = useState("");

  const [score, setScore] = useState(0);

  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(words[index]);

    utterance.lang = "en-US";

    speechSynthesis.speak(utterance);
  };

  const verify = () => {
    if (answer.toLowerCase() === words[index]) {
      setScore((prev) => prev + 1);
    }

    setAnswer("");

    setIndex((prev) => (prev + 1) % words.length);
  };

  return (
    <div className="game-card">
      <h2>🔊 Listening</h2>

      <p>Score: {score}</p>

      <button onClick={speakWord}>🔊 Listen</button>

      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="write word"
      />

      <button onClick={verify}>Check</button>
    </div>
  );
};

export default ListeningGame;

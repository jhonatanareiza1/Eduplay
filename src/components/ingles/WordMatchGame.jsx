import { useEffect, useState } from "react";

import ai from "../../api/gemini";

const WordMatchGame = () => {
  const [words, setWords] = useState([]);

  const [currentWord, setCurrentWord] = useState(null);

  const [options, setOptions] = useState([]);

  const [score, setScore] = useState(0);

  const [category, setCategory] = useState("animals");

  // mezclar respuestas
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // generar palabras IA
  const generateWords = async () => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
          Generate 10 english words with spanish translations
          about ${category} in JSON format.
          Format:

[
  {
    "english": "dog",
    "spanish": "perro"
  }
]
        `,
      });

      const text = response.text;

      const cleanText = text.replace("```json", "").replace("```", "");

      const data = JSON.parse(cleanText);

      setWords(data);

      generateQuestion(data);
    } catch (error) {
      console.log(error);
    }
  };

  // generar pregunta
  const generateQuestion = (wordList) => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    setCurrentWord(randomWord);

    const wrongAnswers = wordList
      .filter((word) => word.spanish !== randomWord.spanish)
      .slice(0, 3)
      .map((word) => word.spanish);

    const allOptions = shuffleArray([randomWord.spanish, ...wrongAnswers]);

    setOptions(allOptions);
  };

  // verificar
  const checkAnswer = (answer) => {
    const cleanAnswer = answer.trim().toLowerCase();

    const correctAnswer = currentWord.spanish.trim().toLowerCase();

    if (cleanAnswer === correctAnswer) {
      const newScore = score + 1;

      setScore(newScore);

      // niveles automáticos
      if (newScore >= 5) {
        setCategory("foods");
      }

      if (newScore >= 10) {
        setCategory("sports");
      }

      if (newScore >= 15) {
        setCategory("school");
      }

      if (newScore >= 20) {
        setCategory("verbs");
      }
    }

    generateQuestion(words);
  };

  useEffect(() => {
    generateWords();
  }, [category]);

  return (
    <div className="game-card">
      <h2>🧠 Gemini English Game</h2>

      <h3>⭐ Score: {score}</h3>

      {currentWord && (
        <>
          <h1>{currentWord.english}</h1>

          {options.map((option, index) => (
            <button key={index} onClick={() => checkAnswer(option)}>
              {option}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default WordMatchGame;

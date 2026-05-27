import ListeningGame from "./ListeningGame";
import VerbGame from "./VerbGame";
import VocabularyGame from "./VocabularyGame";
import WordMatchGame from "./WordMatchGame";

const InglesScreen = () => {
  return (
    <div className="english-grid">
      <WordMatchGame />
      <VocabularyGame />
      <VerbGame />
      <ListeningGame />
    </div>
  );
};

export default InglesScreen;

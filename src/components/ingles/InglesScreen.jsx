/**
 * InglesScreen
 * ----------------
 * Componente contenedor del módulo de inglés.
 * Renderiza los cuatro mini juegos de la sección:
 * - WordMatchGame: juego de memoria con palabras.
 * - VocabularyGame: juego para practicar vocabulario.
 * - VerbGame: juego de gramática o conjugación.
 * - ListeningGame: juego de comprensión auditiva.
 *
 * Este componente se utiliza dentro de la pantalla de juegos principal
 * y organiza los mini juegos en un layout de cuadrícula.
 */
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

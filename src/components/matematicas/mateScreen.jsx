import React from "react";
import MatematicaScreen from "./MatematicaScreen";
import SumaGameScreen from "./SumaGameScreen";

const mateScreen = () => {
  return (
    <div className="english-grid">
      <MatematicaScreen />
      <SumaGameScreen />
    </div>
  );
};

export default mateScreen;

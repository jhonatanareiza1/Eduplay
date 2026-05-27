import NadaSeleccion from "./NadaSeleccion";
import { useSelector } from "react-redux";
import GameScreen from "../games/GameScreen";
import { SideBar } from "./SideBar";

export const EduplayScreen = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div className="eduplay__main-content">
      <SideBar />

      <main>{active ? <GameScreen /> : <NadaSeleccion />}</main>
    </div>
  );
};

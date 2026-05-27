import { useNavigate } from "react-router-dom";

export function EduPlayDashboard2() {
  const navigate = useNavigate();

  const games = [
    {
      title: "Listening Game",
      level: "Nivel Avanzado",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
      button: "Jugar",
      color: "purple",
      route: "/ListeningGame",
    },
    {
      title: "Vocabulario Inglés",
      level: "Nivel Intermedio",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
      button: "Jugar",
      color: "blue",
      route: "/VocabularyGame",
    },
    {
      title: "Juego de Memoria",
      level: "Nivel Experto",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      button: "Jugar",
      color: "green",
      route: "/WordMatchGame",
    },
    {
      title: "Suma y Gana",
      level: "Nivel Novato",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",
      button: "Jugar",
      color: "yellow",
      route: "/SumaGameScreen",
    },
  ];

  const challenges = [
    {
      icon: "🎯",
      title: "Responde 20 preguntas correctas",
      progress: "12/20",
      width: "60%",
      color: "red",
    },
    {
      icon: "⏱️",
      title: "Juega 15 minutos",
      progress: "8 min / 15 min",
      width: "55%",
      color: "blue",
    },
    {
      icon: "⭐",
      title: "Completa 3 juegos distintos",
      progress: "2 / 3 completados",
      width: "70%",
      color: "yellow",
    },
  ];

  return (
    <div className="eduplay-dashboard2">
      <div className="dashboard2-container">
        {/* HEADER */}
        <div className="games-header">
          <h1>Juegos recomendados</h1>
          <button>Ver todos</button>
        </div>

        {/* GAMES */}
        <div className="games-grid">
          {games.map((game, index) => (
            <div className={`game-card ${game.color}`} key={index}>
              <div className="game-image">
                <img src={game.image} alt={game.title} />
              </div>

              <div className="game-content">
                <h2>{game.title}</h2>
                <p>{game.level}</p>

                <button onClick={() => navigate(game.Liste)}>
                  {game.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DAILY CHALLENGES */}
        <div className="daily-challenges">
          <div className="challenge-header">
            <h1>Retos diarios</h1>
          </div>

          <div className="challenge-grid">
            {challenges.map((challenge, index) => (
              <div className="challenge-card" key={index}>
                <div className="challenge-top">
                  <div className="challenge-icon">{challenge.icon}</div>

                  <h3>{challenge.title}</h3>
                </div>

                <div className="challenge-progress">
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${challenge.color}`}
                      style={{ width: challenge.width }}
                    ></div>
                  </div>

                  <span>{challenge.progress}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

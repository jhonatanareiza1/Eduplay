// EduPlayDashboard.jsx

export default function GameDashBoard() {
  return (
    <div className="eduplay-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>EduPlay</h1>
          <p>Plataforma interactiva de aprendizaje y progreso.</p>
        </div>

        {/* CARDS SUPERIORES */}
        <div className="top-cards">
          {/* NIVEL */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Nivel Actual</h2>
              <span className="icon">🎮</span>
            </div>

            <div className="card-body center-content">
              <h3>12</h3>
              <p>Novato Intermedio</p>
            </div>
          </div>

          {/* EXPERIENCIA */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Experiencia Total</h2>
              <span className="icon">⚡</span>
            </div>

            <div className="card-body">
              <h3 className="green">15,240 XP</h3>
              <p>+1,250 esta semana</p>
            </div>

            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <span>Experiencia para el siguiente nivel</span>
            </div>
          </div>

          {/* RACHA */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Racha</h2>
              <span className="icon">🔥</span>
            </div>

            <div className="card-body">
              <h3 className="orange">14 días</h3>
            </div>

            <div className="message-box">
              <p>“Cada día aprendiendo te acerca al siguiente nivel.”</p>
            </div>
          </div>

          {/* PREMIOS */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Premios</h2>
              <span className="icon">🏆</span>
            </div>

            <div className="card-body">
              <h3 className="yellow">2,450 monedas</h3>
            </div>

            <button className="store-button">Ir a tienda</button>
          </div>
        </div>

        {/* MODULO INFERIOR */}
        <div className="bottom-section">
          {/* PROGRESO */}
          <div className="progress-card">
            <div className="card-header">
              <h2>Progreso</h2>
              <span className="icon">📈</span>
            </div>

            <div className="subject-progress">
              <div className="subject">
                <div className="subject-info">
                  <span>Matemáticas</span>
                  <span>80%</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill blue"></div>
                </div>
              </div>

              <div className="subject">
                <div className="subject-info">
                  <span>Inglés</span>
                  <span>65%</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill green-fill"></div>
                </div>
              </div>

              <div className="subject">
                <div className="subject-info">
                  <span>Memoria</span>
                  <span>45%</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill purple"></div>
                </div>
              </div>
            </div>
          </div>

          {/* LOGRO */}
          <div className="achievement-card">
            <div>
              <div className="achievement-header">
                <div className="medal">🥇</div>

                <div>
                  <h2>Logro reciente</h2>
                  <h4>Maestro de Matemáticas</h4>
                </div>
              </div>

              <div className="achievement-description">
                <p>
                  Completaste 20 ejercicios seguidos sin errores y desbloqueaste
                  un nuevo nivel avanzado.
                </p>
              </div>
            </div>

            <div className="xp-earned">+500 XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

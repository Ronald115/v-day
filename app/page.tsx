'use client';

import { FormEvent, useState } from 'react';

const ACCESS_DATE = '04/04/2025';
const GIF_INITIAL = '/valentine-initial.gif';
const GIF_ACCEPTED = '/valentine-accepted.gif';

export default function Home() {
  const [dateInput, setDateInput] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 65, y: 74 });
  const [gifError, setGifError] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (dateInput.trim() === ACCESS_DATE) {
      setIsLogged(true);
      setError('');
      return;
    }

    setError('Ups, intenta con nuestra fecha especial 💘');
  };

  const moveNoButton = () => {
    const x = Math.random() * 80 + 5;
    const y = Math.random() * 80 + 5;
    setNoButtonPos({ x, y });
  };

  if (!isLogged) {
    return (
      <main className="page login-bg">
        <div className="glass-card">
          <h1>Bienvenida, mi amor 💖</h1>
          <p>Escribe la fecha en que nos hicimos novios.</p>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="04/04/2025"
              value={dateInput}
              onChange={(event) => setDateInput(event.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
          {error && <span className="error-text">{error}</span>}
        </div>
      </main>
    );
  }

  return (
    <main className="page valentine-bg">
      <section className="proposal-card">
        {!gifError ? (
          <img
            src={accepted ? GIF_ACCEPTED : GIF_INITIAL}
            alt="Gif romántico"
            width={260}
            height={260}
            className="proposal-gif"
            onError={() => setGifError(true)}
          />
        ) : (
          <div className="gif-placeholder">Agrega tus GIF en /public 💝</div>
        )}

        <h2>
          Will you be my Valentine? <span>❤️🤍</span>
        </h2>

        {!accepted && (
          <div className="buttons-zone">
            <button className="yes-btn" onClick={() => setAccepted(true)}>
              Sí 😊
            </button>
            <button
              className="no-btn"
              style={{ left: `${noButtonPos.x}%`, top: `${noButtonPos.y}%` }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              type="button"
            >
              No 😢
            </button>
          </div>
        )}

        {accepted && <p className="accepted-text">Sabía que dirías que sí. Te amo 💞</p>}
      </section>
    </main>
  );
}

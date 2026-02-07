'use client';

import { FormEvent, useEffect, useState } from 'react';

const ACCESS_DATE = '2025-04-04';
const GIF_INITIAL = '/valentine-initial.gif';
const ACCEPTED_GIFS = [
  '/valentine-accepted.gif',
  '/valentine-accepted-01.gif',
  '/valentine-accepted-02.gif',
  '/valentine-accepted-03.gif'
];

export default function Home() {
  const [dateInput, setDateInput] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 65, y: 74 });
  const [yesScale, setYesScale] = useState(1);
  const [acceptedGifIndex, setAcceptedGifIndex] = useState(0);

  useEffect(() => {
    if (!accepted) {
      return;
    }

    const intervalId = setInterval(() => {
      setAcceptedGifIndex((current) => (current + 1) % ACCEPTED_GIFS.length);
    }, 2200);

    return () => clearInterval(intervalId);
  }, [accepted]);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (dateInput === ACCESS_DATE) {
      setIsLogged(true);
      setError('');
      return;
    }

    setError('Esa no es, intenta otra vez 💘');
  };

  const moveNoButton = () => {
    const x = Math.random() * 80 + 5;
    const y = Math.random() * 80 + 5;
    setNoButtonPos({ x, y });
    setYesScale((current) => Math.min(current + 0.06, 1.9));
  };

  const currentGif = accepted ? ACCEPTED_GIFS[acceptedGifIndex] : GIF_INITIAL;

  if (!isLogged) {
    return (
      <main className="page login-bg">
        <div className="glass-card">
          <h1>Hola mi princesita 💖</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="date"
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
        <img
          src={currentGif}
          alt="Gif romántico"
          width={260}
          height={260}
          className="proposal-gif"
          onError={() => {
            if (accepted) {
              setAcceptedGifIndex((current) => (current + 1) % ACCEPTED_GIFS.length);
            }
          }}
        />

        {!accepted && (
          <h2>
            ¿Quieres ser mi San Valentín? <span>💌</span>
          </h2>
        )}

        {!accepted && (
          <div className="buttons-zone">
            <button
              className="yes-btn"
              type="button"
              onClick={() => {
                setAccepted(true);
                setAcceptedGifIndex(0);
              }}
              style={{ transform: `scale(${yesScale})` }}
            >
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

        {accepted && <p className="accepted-text">Te veo en san valentin preciosa, Te amo ❤️🥰</p>}
      </section>
    </main>
  );
}

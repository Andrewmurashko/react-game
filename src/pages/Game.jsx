import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { gameSubject, Board, Gamestatus, ButtonGetBack, FullScreen } from '../components';
import { initGame, resetGame, steps, stepsArr } from '../components/Game_components/Game';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import clickMP3 from '../assets/sounds/Vechnye_Hity-Louis_Armstrong_-_Wonderful_World_(MUSIC-LORD.COM).mp3';

function Game({ history, handle }) {
  const [board, setBoard] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState();
  const [result, setResult] = React.useState();
  const [turn, setTurn] = React.useState();
  const [stepsState, setStepsstate] = React.useState([]);
  const [soundsVolume, setSoundsVolume] = React.useState(1);

  const settingsRef = useRef();
  const gameRef = useRef();
  const leftContainerRef = useRef();
  const rightContainerRef = useRef();

  useEffect(() => {
    if (isGameOver) {
      gsap.from([leftContainerRef.current], {
        x: '-800px',
        duration: 1,
      });
      gsap.from([rightContainerRef.current], {
        x: '800px',
        duration: 1,
      });
    }
  }, [result]);

  useEffect(() => {
    gsap.from([settingsRef.current], {
      y: '-800px',
      duration: 1,
    });
    gsap.from([gameRef.current], {
      y: '800px',
      duration: 1,
    });
  }, []);

  useHotkeys(['Escape', 'Backspace'], () => {
    history.push('/');
  });
  React.useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
      if (localStorage.getItem(`Records`)) {
        setStepsstate(JSON.parse(localStorage.getItem(`Records`)));
      }
    });
    return () => subscribe.unsubscribe();
  }, [result, isGameOver]);

  React.useEffect(() => {
    if (result) {
      setStepsstate([...stepsState, { steps, stepsArr, result }]);
      localStorage.setItem('Records', JSON.stringify([...stepsState, { steps, stepsArr, result }]));
    }
  }, [result]);

  const newGameInGame = () => {
    gsap.to([leftContainerRef.current], {
      x: '-800px',
      duration: 1,
    });
    gsap.to([rightContainerRef.current], {
      x: '800px',
      duration: 1,
    });
    setTimeout(() => resetGame(), 1000);
  };
  const currSoundsValue = (e) => {
    setSoundsVolume(e.target.value);
  };
  return (
    <div className="Game">
      <div className="container">
        <div className="settings" ref={settingsRef}>
          <ButtonGetBack history={history} />
          <FullScreen handle={handle} />
          <div className={'settings__chess-sound'}>
            <h3 className={'settings__chess-sound_title'}>Sounds</h3>
            <input
              onChange={currSoundsValue}
              id="soundsRange"
              type="range"
              min="0"
              max="100"></input>
          </div>
          <div className="player">
            <AudioPlayer autoPlay src={clickMP3} />
          </div>
        </div>
        <Gamestatus steps={steps} stepsArr={stepsArr} turn={turn} />
        <div className="game-container" ref={gameRef}>
          {isGameOver && (
            <h2 className="vertical-text" ref={leftContainerRef}>
              <button onClick={newGameInGame}>
                <span className="vertical-text">NEW GAME</span>
              </button>
              GAME OVER
            </h2>
          )}
          <div className="board-container">
            <Board board={board} turn={turn} soundsVolume={soundsVolume} />
          </div>

          {result && (
            <p className="vertical-text" ref={rightContainerRef}>
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;

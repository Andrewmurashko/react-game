import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { gameSubject, Board, Gamestatus } from '../components';
import { initGame, resetGame, steps, stepsArr } from '../components/Game_components/Game';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import useHotkeys from '@reecelucas/react-use-hotkeys';

function Game({ history }) {
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
  // const statusRef = useRef();
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
    console.log(`gameover`);
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
    // gsap.from([statusRef.current], {
    //   x: '800px',
    //   duration: 1,
    // });
    console.log(`start`);
  }, []);

  useHotkeys(['Escape', 'Backspace'], () => {
    console.log('Some action');
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

        console.log(stepsState);
      }
      // document.getElementById('soundsRange').addEventListener('change', function () {
      //   setSoundsVolume(this.value);
      //   console.log(this.value);
      //   console.log(soundsVolume);
      // });
    });
    return () => subscribe.unsubscribe();
  }, [result, isGameOver]);

  React.useEffect(() => {
    if (result) {
      console.log(steps);
      setStepsstate([...stepsState, { steps, stepsArr, result }]);
      localStorage.setItem('Records', JSON.stringify([...stepsState, { steps, stepsArr, result }]));
      console.log([...stepsState, { steps, stepsArr, result }]);
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
  // const [state, setstate] = React.useState(
  //   JSON.parse(localStorage.getItem(`saveGame`)) || {
  //     isGame: false,
  //     currentWord: wordsData[0].eng,
  //     wrongWords: [],
  //     lives: 5,
  //   },
  // );

  // React.useEffect(() => {
  //   shuffleCards();
  //   pushWrongWordsArray();
  //   return () => {
  //     window.localStorage.setItem(`saveGame`, JSON.stringify(state));
  //   };
  // }, []);
  const asd = (e) => {
    setSoundsVolume(e.target.value);
    console.log(e.target.value);
  };

  // const [ minutes, setMinutes ] = React.useState(10);
  // const [seconds, setSeconds ] =  React.useState(3);

  // useEffect(()=>{
  // const myInterval = setInterval(() => {
  //         if (seconds > 0) {
  //             setSeconds(seconds - 1);
  //         }
  //         if (seconds === 0) {
  //             if (minutes === 0) {
  //                 clearInterval(myInterval)
  //             } else {
  //                 setMinutes(minutes - 1);
  //                 setSeconds(59);
  //             }
  //         }
  //     }, 1000)
  //     return ()=> {
  //         clearInterval(myInterval);
  //       };
  // });
  return (
    <div className="Game">
      <div className="container">
        <div className="settings" ref={settingsRef}>
          <div>
            <h3>Chess sounds</h3>
            <input onChange={asd} id="soundsRange" type="range" min="0" max="100"></input>
          </div>
          <div className="player">
            <AudioPlayer
              autoPlay
              src="https://cdn9.sefon.pro/prev/XUV9x5b7KAdr5nBuVxQdyg/1614704385/20/Louis%20Armstrong%20-%20What%20A%20Wonderful%20World%20%28192kbps%29.mp3"
              onPlay={(e) => console.log('onPlay')}
            />
          </div>
        </div>
        <Gamestatus steps={steps} stepsArr={stepsArr} />
        {/* <Timer /> */}
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

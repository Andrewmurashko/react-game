import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Gamestatus({ turn }) {
  const [steps, setsteps] = React.useState(0);
  const [stepsArr, setstepsArr] = React.useState([]);
  const statusRef = useRef();
  useEffect(() => {
    gsap.from([statusRef.current], {
      x: '-800px',
      duration: 1,
    });
  }, []);

  useEffect(() => {
    if (turn) {
      setTimeout(function () {
        setsteps(JSON.parse(localStorage.getItem('gameStatAllSteps')));
        setstepsArr(JSON.parse(localStorage.getItem('gameStatCurrStep')));
      }, 0);
    }
  }, [turn]);

  return (
    <div className="game-statistics" ref={statusRef}>
      <div className="game-statistics__steps">
        <h4 className="game-statistics__title">MOVES:</h4>
        {steps}
      </div>
      <div className="game-statistics__game-status">
        <h4>GAME STATUS:</h4>
        {stepsArr && `${stepsArr.map((el) => `${el.from}-${el.to}`)}`}
      </div>
    </div>
  );
}

export default Gamestatus;

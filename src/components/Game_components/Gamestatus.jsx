import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import { tempMove, steps, stepsArr } from './Game';

function Gamestatus({ turn }) {
  const [steps, setsteps] = React.useState(0);
  const [stepsArr, setstepsArr] = React.useState([]);
  const statusRef = useRef();
  useEffect(() => {
    gsap.from([statusRef.current], {
      x: '-800px',
      duration: 1,
    });

    console.log(`start`);
  }, []);

  useEffect(() => {
    setsteps(JSON.parse(localStorage.getItem('gameStatAllSteps')));
    setstepsArr(JSON.parse(localStorage.getItem('gameStatCurrStep')));
    console.log(steps);
    console.log(stepsArr);
  }, [turn]);

  // let localSteps = 0;
  // let localCurrStep = [''];
  //   React.useEffect(() => {
  //     localSteps = JSON.parse(localStorage.getItem('gameStatAllSteps'));
  //     localCurrStep = JSON.parse(localStorage.getItem('gameStatCurrStep'));
  //     console.log(localCurrStep);
  //   }, [steps, stepsArr]);

  //   console.log(tempMove);
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

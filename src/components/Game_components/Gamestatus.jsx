import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import { tempMove, steps, stepsArr } from './Game';

function Gamestatus({steps, stepsArr}) {
    const statusRef = useRef();
    useEffect(() => {
        gsap.from([statusRef.current], {
          x: '-800px',
          duration: 1,
        });
        
        console.log(`start`);
      }, []);
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
      <div className="game-statistics__steps"><h3 className="game-statistics__title">STEPS:</h3>{steps}</div>
      <div className="game-statistics__game-status"><h3>GAME STATUS:</h3>{`${stepsArr.map((el) => `${el.from}-${el.to}`)}`}</div>
    </div>
  );
}

export default Gamestatus;

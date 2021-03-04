import React, {useEffect, useRef} from 'react';
import { ReactReduxContext } from 'react-redux';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import {ButtonGetBack} from '../components'
import { gsap } from 'gsap';

function Records({ history }) {
  const [recordsState, setRecordsState] = React.useState(
    JSON.parse(localStorage.getItem(`Records`)) || [],
  );

  const settingsRef = useRef();
  useEffect(() => {
    gsap.from([settingsRef.current], {
      y: '-800px',
      duration: 1,
    });
  }, []);

  useHotkeys(['Escape', 'Backspace'], () => {
    history.push('/');
  });

  return (
    <div className="records" ref={settingsRef}>
      <h2 className=" title records__title">Records</h2>
      <div className="records__items">
      {recordsState.length &&
        recordsState.sort((el,el2)=>el.steps-el2.steps).map((el, index) => {
          return (
            <div key={index} className="records__item">
              <h4>{`Moves: ${el.steps}`}</h4>
              <h4>{`Transcript: ${el.stepsArr.map((el) => `${el.from}-${el.to}`)}`}</h4>
              <h4>{`${el.result}`}</h4>
            </div>
          );
        })}
        
        </div>
        <ButtonGetBack history={history} />
    </div>
  );
}

export default Records;

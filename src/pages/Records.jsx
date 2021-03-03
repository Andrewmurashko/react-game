import React from 'react';
import { ReactReduxContext } from 'react-redux';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import {ButtonGetBack} from '../components'

function Records({ history }) {
  const [recordsState, setRecordsState] = React.useState(
    JSON.parse(localStorage.getItem(`Records`)) || [],
  );
  //   let getRecordsLS = [];
  React.useEffect(() => {
    // const getRecordsLS = JSON.parse(localStorage.getItem(`Records`));
    // console.log(getRecordsLS);
    // setRecordsState(JSON.parse(localStorage.getItem(`Records`)));
    console.log(recordsState);
  }, []);

  useHotkeys(['Escape', 'Backspace'], () => {
    console.log('Some action');
    history.push('/');
  });

  return (
    <div className="records">
      <h2 className="records__title">Records</h2>
      <div className="records__items">
        {console.log(recordsState)}
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

import React from 'react';
import { ReactReduxContext } from 'react-redux';
import useHotkeys from '@reecelucas/react-use-hotkeys';

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
    <div>
      <div>Records</div>
      {recordsState.length &&
        recordsState.map((el, index) => {
          console.log(recordsState);
          return (
            <div key={index}>
              <div>{`moves: ${el.steps}`}</div>
              <div>{`transcript: ${el.stepsArr.map((el) => `${el.from}-${el.to}`)}`}</div>
              <div>{`${el.result}`}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Records;

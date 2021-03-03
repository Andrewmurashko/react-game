import React from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';

function Tutorial({ history }) {
    useHotkeys(['Escape','Backspace'], () => {
        console.log('Some action');
        history.push('/');
      });
  return <div>Рассказ о том, как играть, перечисление хоткеев и тд</div>;
}

export default Tutorial;

import React from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import {ButtonGetBack} from '../components'

function Tutorial({ history }) {
    useHotkeys(['Escape','Backspace'], () => {
        console.log('Some action');
        history.push('/');
      });
  return <div>Рассказ о том, как играть, перечисление хоткеев и тд
    <ButtonGetBack history={history} />
  </div>;
}

export default Tutorial;

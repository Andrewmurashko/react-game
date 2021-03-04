import React from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import { ButtonGetBack } from '../components';

function Tutorial({ history }) {
  useHotkeys(['Escape', 'Backspace'], () => {
    console.log('Some action');
    history.push('/');
  });
  return (
    <div className="tutorial">
      <h2 className="tutorial__title">Tutorial</h2>
      <div className="tutorial__subtiitle_hotkeys">
        <div className="menu-hotkeys">
          <h3 className="title-hotkeys">{`Хоткеи меню:`}</h3>
          <div>{`стрелки "вверх", "вниз" - выбор элемента меню;`}</div>
          <div>{`"Enter" - переход к элементу;`}</div>
          <div>{`"Esc", "BackSpace" - возврат в главное меню `}</div>
        </div>
        <div className="game-hotkeys">
          <h3 className="title-hotkeys">{`Хоткеи в игре:`}</h3>
          <div>{`стрелки "вверх", "вниз" - выбор элемента меню;`}</div>
          <div>{`"Enter" - переход к элементу;`}</div>
          <div>{`"Esc", "BackSpace" - возврат в главное меню `}</div>
        </div>
        <div className="player-hotkeys">
          <h3 className="title-hotkeys">{`Хоткеи плеера:`}</h3>
          <div>{`кликните по плееру, чтобы активировать хоткеи`}</div>
          <div>{`стрелки "вверх", "вниз" - регулировка громкости;`}</div>
          <div>{`стрелки "влево", "вправо" - прокрутка трека;`}</div>
          <div>{`"Space" - поставить на паузу/запустить плеер`}</div>
        </div>
      </div>
      <ButtonGetBack history={history} />
    </div>
  );
}

export default Tutorial;

import React from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import {withRouter} from 'react-router-dom'
import {ButtonGetBack} from '../components'

function Settings({ history, setIsDarkTheme, isDarkTheme }) {
  const [movesRule, setMovesRule] = React.useState(true);
  const [repititionRule, setRepititionRule] = React.useState(true);

  // React.useEffect(() => {
    
  //   }
  // }, [])
  useHotkeys(['Escape', 'Backspace'], () => {
    console.log('Some action');
    history.push('/');
  });

  const sizePic = () => {
    console.log(`hi`);
  };
  const setSettingsLS = ()=> {
    localStorage.setItem('Settings', JSON.stringify({isDarkTheme, movesRule, repititionRule}) )
  }
  const changeTheme = () => {
    console.log(`checked`);
    setIsDarkTheme(!isDarkTheme);
    console.log(setIsDarkTheme);
    setSettingsLS();
  };

  const change50MovesRule = () => {
    setMovesRule(!movesRule);
    setSettingsLS();
  };

  const changeRepititionRule = () => {
    setRepititionRule(!repititionRule);
    setSettingsLS();
  };

  return (
    <div className="settings-menu">
      <h2 className="title settings-menu-title">Settings</h2>
      <div className="settings-menu__items">
      <div className="settings-menu__item">
        {`Theme: `}
        <input className="settings-menu__input"
          type="radio"
          onChange={changeTheme}
          checked={isDarkTheme ? 'checked' : ''}
          onClick={changeTheme}
          volue="on"
        />
        {`Dark `}
        <input className="settings-menu__input"
          type="radio"
          onChange={changeTheme}
          checked={!isDarkTheme ? 'checked' : ''}
          onClick={changeTheme}
          volue="off"
        />
        {`Blue `}
      </div>
      <div className="settings-menu__item">
        {`50 moves rule: `}
        <input className="settings-menu__input"
          type="radio"
          onChange={change50MovesRule}
          checked={movesRule ? 'checked' : ''}
          onClick={change50MovesRule}
          volue="on"
        />
        {`on `}
        <input className="settings-menu__input"
          type="radio"
          onChange={change50MovesRule}
          checked={!movesRule ? 'checked' : ''}
          onClick={change50MovesRule}
          volue="off"
        />
        {`off `}
      </div>
      <div className="settings-menu__item">
        {`Repetition rule: `}
        <input className="settings-menu__input"
          type="radio"
          onChange={changeRepititionRule}
          checked={repititionRule ? 'checked' : ''}
          onClick={changeRepititionRule}
          volue="on"
        />
        {`on `}
        <input className="settings-menu__input"
          type="radio"
          onChange={changeRepititionRule}
          checked={!repititionRule ? 'checked' : ''}
          onClick={changeRepititionRule}
          volue="off"
        />
        {`off `}
      </div>
      </div>
      <ButtonGetBack history={history} />
    </div>
  );
}

export default withRouter(Settings);

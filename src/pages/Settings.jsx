import React from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';

function Settings({ history, setIsDarkTheme, isDarkTheme }) {
  const [rules, setRules] = React.useState(true);
  useHotkeys(['Escape', 'Backspace'], () => {
    console.log('Some action');
    history.push('/');
  });

  const sizePic = () => {
    console.log(`hi`);
  };
  const changeTheme = () => {
    console.log(`checked`);
    setIsDarkTheme(!isDarkTheme);
    console.log(setIsDarkTheme);
  };
  const changeRules = () => {
    setRules(!rules);
  };
  return (
    <div>
      <div>
        Theme:
        <input
          type="radio"
          onChange={changeTheme}
          checked={isDarkTheme ? 'checked' : ''}
          onClick={changeTheme}
          volue="on"
        />
        Dark
        <input
          type="radio"
          onChange={changeTheme}
          checked={!isDarkTheme ? 'checked' : ''}
          onClick={changeTheme}
          volue="off"
        />
        Blue
      </div>
      <div>
        50 MOVES RULE:
        <input
          type="radio"
          onChange={changeRules}
          checked={rules ? 'checked' : ''}
          onClick={changeRules}
          volue="on"
        />
        on
        <input
          type="radio"
          onChange={changeRules}
          checked={!rules ? 'checked' : ''}
          onClick={changeRules}
          volue="off"
        />
        off
      </div>
    </div>
  );
}

export default Settings;

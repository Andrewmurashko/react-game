import React from 'react';

import { Route } from 'react-router-dom';

import { Menu, Game, Settings, Tutorial, Records } from './pages';
import { Footer } from './components';
function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const [movesRule, setMovesRule] = React.useState(true);
  const [repititionRule, setRepititionRule] = React.useState(true);
  React.useEffect(() => {
    if(localStorage.getItem('Settings')) {
      setIsDarkTheme(JSON.parse(localStorage.getItem('Settings')).isDarkTheme)
      setMovesRule(JSON.parse(localStorage.getItem('Settings')).movesRule)
      setRepititionRule(JSON.parse(localStorage.getItem('Settings')).repititionRule)
    }
  }, [])
 
  return (
    <div className={isDarkTheme ? `theme_dark wrapper` : `theme_colored wrapper`}>
      <Route exact path="/" component={Menu}></Route>
      <Route exact path="/Game" component={Game}></Route>
      <Route
        exact
        path="/Settings"
        component={() => (
          <Settings
            setIsDarkTheme={setIsDarkTheme}
            isDarkTheme={isDarkTheme}
            movesRule={movesRule}
            setMovesRule={setMovesRule}
            repititionRule={repititionRule}
            setRepititionRule={setRepititionRule}
          />
        )}></Route>
      <Route exact path="/Tutorial" component={Tutorial}></Route>
      <Route exact path="/Records" component={Records}></Route>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;

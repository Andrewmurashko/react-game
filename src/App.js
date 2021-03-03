import React from 'react';

import { Route } from 'react-router-dom';

import { Menu, Game, Settings, Tutorial, Records } from './pages';
import { Footer } from "./components";
function App() {
  
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  console.log(setIsDarkTheme);
  React.useEffect(() => {
    // generateFooter()
    if (!isDarkTheme) {
    }
  }, [isDarkTheme]);
  return (
    <div  >
    <div className={isDarkTheme ? `theme_dark wrapper` : `theme_colored wrapper`}>
      <Route exact path="/" component={Menu}></Route>
      <Route exact path="/Game" component={Game}></Route>
      <Route
        exact
        path="/Settings"
        component={() => (
          <Settings setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        )}></Route>
      <Route exact path="/Tutorial" component={Tutorial}></Route>
      <Route exact path="/Records" component={Records}></Route>
    <div className="footer__wrapper"><Footer /></div>
      
    </div>
    </div> 
  );
}

export default App;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import useSound from 'use-sound';
import clickMP3 from '../assets/sounds/click.mp3';
import useHotkeys from '@reecelucas/react-use-hotkeys';

function Menu({ history }) {
  const [play] = useSound(clickMP3);
  const [flagRoute, seFlagRoute] = React.useState(false);

  let i = 0;
  useHotkeys('ArrowDown', (index) => {
    if (i >= 5) {
      document.querySelector(`.menu__${i - 1}`).classList.remove('selected');
      i = 0;
    }
    document.querySelector(`.menu__${i}`).classList.add('selected');
    if (i > 0) {
      document.querySelector(`.menu__${i - 1}`).classList.remove('selected');
    }
    i = i + 1;
  });
  useHotkeys('ArrowUp', (index) => {
    i = i - 1;
    if (i < 0) {
      document.querySelector(`.menu__${i + 1}`).classList.remove('selected');
      i = menuList.length - 1;
    }
    document.querySelector(`.menu__${i}`).classList.add('selected');
    if (menuList.length - 1 > i > 0) {
      document.querySelector(`.menu__${i + 1}`).classList.remove('selected');
    }
  });

  useHotkeys('Enter', () => {
    if (document.querySelector(`.selected`)) {
      play();
      menuList.some((el, index) => {
        if (el.name === document.querySelector(`.selected`).innerHTML) {
          seFlagRoute(true);
          return setTimeout(() => history.push(`${el.url}`), 1000);
        } else {
        }
      });
    }
  });
  const menuList = [
    { name: 'Continue', url: '/Game', componentName: `Game` },
    { name: 'New game', url: '/Game', componentName: `Game` },
    { name: 'Settings', url: '/Settings', componentName: `Settings` },
    { name: 'Tutorial', url: '/Tutorial', componentName: `Tutorial` },
    { name: 'Records', url: '/Records', componentName: `Records` },
  ];
  const boxRef = useRef();
  useEffect(() => {
    if (!flagRoute) {
      gsap.from([boxRef.current], {
        y: '800px',
        duration: 1,
      });
    }
    if (flagRoute) {
      gsap.to([boxRef.current], {
        y: '800px',
        duration: 1,
      });
    }
  }, [flagRoute]);

  const clearLS = () => {
    localStorage.removeItem('savedGame');
    localStorage.removeItem('gameStatAllSteps');
    localStorage.removeItem('gameStatCurrStep');
  };

  const HandlerRoute = (el) => {
    if (el.name === 'New game') {
      play();
      clearLS();
      seFlagRoute(true);
      setTimeout(function () {
        history.push(`${el.url}`);
      }, 1000);
    } else {
      seFlagRoute(true);
      play();
      setTimeout(() => {
        history.push(`${el.url}`);
      }, 1000);
    }
  };

  return (
    <div className="menu" ref={boxRef}>
      {menuList.map((el, index) => {
        return (
          <div
            className={`menu__item menu__${index} menu__${el.name}`}
            key={`${el.name}_${index}`}
            onClick={() => HandlerRoute(el)}>
            {el.name}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;

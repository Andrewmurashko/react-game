import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { withRouter } from 'react-router-dom';

function ButtonGetBack({ history }) {
  const getBackRef = useRef();
  const getBack = () => {
    gsap.to([getBackRef.current], {
    //   x: '-800px',
      scale: 0.5,
      duration: 1,
    });
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };
  return (
    <h3 onClick={getBack} className="button__get-back" ref={getBackRef}>
      Get back
    </h3>
  );
}

export default withRouter(ButtonGetBack);

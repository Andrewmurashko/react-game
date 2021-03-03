import React from 'react';
import BoardSquare from './BoardSquare';
import { gsap } from 'gsap';
import chessSound from '../../assets/sounds/chess.mp3';
import useSound from 'use-sound';
function Board({ board, turn, boxRef, soundsVolume }) {
  const [currBoard, setCurrBoard] = React.useState([]);
  const [play] = useSound(chessSound, { volume: soundsVolume / 100 });

  React.useEffect(() => {
    setCurrBoard(turn === 'w' ? board.flat() : board.flat().reverse());
    play();
    console.log(soundsVolume);
  }, [turn]);

  //   React.useEffect(() => {
  //     gsap.to([boxRef.current], {
  //     x: '400px',
  //     duration: 2
  //     })
  //     })

  function getXYPosition(index) {
    const x = turn === 'w' ? index % 8 : Math.abs((index % 8) - 7);
    const y = turn === 'w' ? Math.abs(Math.floor(index / 8) - 7) : Math.floor(index / 8);
    return { x, y };
  }

  function isBlack(index) {
    const { x, y } = getXYPosition(index);
    return (x + y) % 2 === 1;
  }
  function getPosition(index) {
    const { x, y } = getXYPosition(index);
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x];
    return `${letter}${y + 1}`;
  }
  return (
    <div className="board">
      {currBoard.map((piece, index) => (
        <div key={index} className="square">
          <BoardSquare
            piece={piece}
            black={isBlack(index)}
            position={getPosition(index)}></BoardSquare>
        </div>
      ))}
    </div>
  );
}

export default Board;

import React from 'react';
import Square from './Square';
import Piece from './Piece';
import { useDrop } from 'react-dnd';
import gameSubject, { handleMove } from './Game';
import Promote from './Promote';

function BoardSquare({ piece, black, position }) {
  const [promotion, setPromotion] = React.useState(null);
  const [, drop] = useDrop({
    accept: 'piece',
    drop: (item) => {
      const [fromPosition] = item.id.split('_');
      handleMove(fromPosition, position);
    },
  });
  React.useEffect(() => {
    const subscribe = gameSubject.subscribe(({ pendingPromotion }) =>
      pendingPromotion && pendingPromotion.to === position
        ? setPromotion(pendingPromotion)
        : setPromotion(null),
    );
    return () => subscribe.unsubscribe();
  }, [position]);
  return (
    <div className="board-square" ref={drop}>
      <Square black={black}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </div>
  );
}

export default BoardSquare;

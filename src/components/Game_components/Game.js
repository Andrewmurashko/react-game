import * as Chess from 'chess.js';
import { BehaviorSubject } from 'rxjs';

const chess = new Chess();

const gameSubject = new BehaviorSubject({
  board: chess.board(),
});

export function initGame() {
  //   const savedGame = localStorage.getItem('savedGame');
  if (localStorage.getItem('savedGame')) {
    chess.load(localStorage.getItem('savedGame'));
    updateGame();
  } else {
    chess.reset();
    updateGame();
    steps = 0;
    stepsArr.splice(0, stepsArr.length);
  }
}

export function resetGame() {
  chess.reset();
  updateGame();
  steps = 0;
    stepsArr.splice(0, stepsArr.length);
}

export function handleMove(from, to) {
  const promotions = chess.moves({ verbose: true }).filter((m) => m.promotion);
  //   console.table(promotions);
  if (promotions.some((p) => `${p.from}:${p.to}` === `${from}:${to}`)) {
    const pendingPromotion = { from, to, color: promotions[0].color };
    updateGame(pendingPromotion);
  }
  const { pendingPromotion } = gameSubject.getValue();
  if (!pendingPromotion) {
    move(from, to);
  }
}
export let tempMove = [''];
export const stepsArr = JSON.parse(localStorage.getItem('gameStatCurrStep')) || [];
export let steps = JSON.parse(localStorage.getItem('gameStatAllSteps')) || 0;
export function move(from, to, promotion) {
  tempMove = { from, to };
  if (promotion) {
    tempMove.promotion = promotion;
  }

  const legalMove = chess.move(tempMove);

  if (legalMove) {
    updateGame();
    // console.log(from, to);
    stepsArr.push({ from, to });
    // console.log(stepsArr);
    steps += 1;
    // stepsArr.map((el)=> {
    //     localStorage.setItem('gameStatAllSteps', JSON.stringify(el.from))
    //     localStorage.setItem('gameStatAllSteps', JSON.stringify(el.to))

    // })
    localStorage.setItem('gameStatAllSteps', JSON.stringify(steps));
    localStorage.setItem('gameStatCurrStep', JSON.stringify(stepsArr));
  }
}
function updateGame(pendingPromotion) {
  const isGameOver = chess.game_over();
  const newGame = {
    board: chess.board(),
    pendingPromotion,
    isGameOver,
    turn: chess.turn(),
    result: isGameOver ? getGameResult() : null,
  };
  localStorage.setItem('savedGame', chess.fen());

  gameSubject.next(newGame);
}
function getGameResult() {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === 'w' ? 'BLACK' : 'WHITE';
    return `WINNER - ${winner}`;
  } else if (chess.in_draw()) {
    let reason = '50 - MOVES - RULE';
    if (chess.in_stalemate()) {
      reason = 'STALEMATE';
    } else if (chess.in_threefold_repetition()) {
      reason = 'REPETITION';
    } else if (chess.insufficient_material()) {
      reason = 'INSUFFICIENT MATERIAL';
    }
    return `DRAW - ${reason}`;
  } else {
    return `UNKNOWN REASON`;
  }
}

export default gameSubject;

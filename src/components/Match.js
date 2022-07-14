import React, { useState } from 'react';

export default function Match(props) {
  // console.log(props);
  const matchData = props.matchData;
  const [winner, setWinner] = useState(matchData.winner);
  let winnerText;
  if (winner === 0) {
    winnerText = <h2>No winners yet!</h2>;
  } else {
    winnerText = (
      <h2>
        {matchData.winnerName} is the winner by {matchData.scoreDifference}!
      </h2>
    );
  }
  return (
    <article>
      <h1>
        {matchData.player1} <span>vs</span> {matchData.player2}
      </h1>
      {winnerText}
      <button
        onClick={() => {
          matchData.winnerName = matchData.player1;
          setWinner(matchData.players[0]);
        }}
      >
        {matchData.player1}
      </button>
      <button
        onClick={() => {
          matchData.winnerName = matchData.player2;
          setWinner(matchData.players[1]);
        }}
      >
        {matchData.player2}
      </button>
    </article>
  );
}

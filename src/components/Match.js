import React from 'react';

export default function Match(props) {
  console.log(props);
  const matchData = props.matchData;
  return (
    <article>
      <h1>
        {matchData.players[0]} <span>vs</span> {matchData.players[1]}
      </h1>
      <h2>
        {matchData.winner} is the winner by {matchData.scoreDifference}!
      </h2>
      <h2>No winners yet!</h2>
    </article>
  );
}

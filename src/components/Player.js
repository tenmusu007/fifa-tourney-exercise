import React from 'react';

export default function Player(props) {
  console.log(props.player);
  let winsText;
  if (props.player.wins === 0) {
    winsText = <h2>Currently with no wins!</h2>;
  } else if (props.player.wins === 1) {
    winsText = <h2>Currently at 1 win!</h2>;
  } else {
    winsText = <h2>Currently at {props.player.wins} wins!</h2>;
  }
  return (
    <article className='Player'>
      <h1>
        {props.player.name}
        <span> {props.player.team} </span>
      </h1>
      {winsText}
    </article>
  );
}

import React from 'react';
import Player from './Player';
import playersList from '../data/playerData';
import matchesData from '../data/matchData';
import preparePlayerData from '../helpers/playerHelper';

export default function PlayersList() {
  console.log('players list', playersList);
  const playersListArr = Object.values(playersList);
  console.log('players list arr', playersListArr);

  const parsePlayersList = playersListArr.map((player) => {
    return preparePlayerData(player, matchesData);
  });
  return (
    <section className='PlayersList'>
      <h1>Current participant players</h1>
      <Player player={parsePlayersList[0]} />
      <Player player={parsePlayersList[1]} />
      <Player player={parsePlayersList[2]} />
    </section>
  );
}

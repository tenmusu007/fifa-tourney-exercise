import React from 'react';
import Match from './Match';
import matchesData from '../data/matchData';
import playersData from '../data/playerData';
import parseMatchesData from '../helpers/matchHelper';

export default function MatchList() {
  console.log('players data', playersData);
  console.log('matches data', matchesData);

  const newMatchesData = parseMatchesData(matchesData, playersData);

  console.log('parse matches', newMatchesData);
  return (
    <section className='MatchList'>
      <h1>Match List</h1>
      <Match matchData={newMatchesData[0]} />
      <Match matchData={newMatchesData[1]} />
      <Match matchData={newMatchesData[2]} />
      <Match matchData={newMatchesData[3]} />
      <Match matchData={newMatchesData[4]} />
      <Match matchData={newMatchesData[5]} />
      <Match matchData={newMatchesData[6]} />
    </section>
  );
}

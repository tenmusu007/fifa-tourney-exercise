import React from 'react';
import Match from './Match';
import matchesData from '../data/matchData';

export default function MatchList() {
    // console.log('match data', matchesData);
  return (
    <section className='MatchList'>
      <h1>Match List</h1>
      <Match matchData={matchesData} />
    </section>
  );
}

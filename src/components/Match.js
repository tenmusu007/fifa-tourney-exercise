import React from 'react';
import MatchList from './MatchList';

export default function Match(props) {
  console.log("log",props.matchData);
  // const matchDataArr =Object.values(props);
  // console.log(matchDataArr);
  const renderMatch =props.matchData.map((value,index)=>{
    console.log("index",index);
    console.log("value",value);
    return(
      <div key ={index}>
        {/* {value.players} */}
      <h1 >
        {value.players[0]} <span>vs</span> {value.players[1]}
        </h1>
        <h2>
        {value.winner} is the winner by {value.scoreDifference}!
        </h2>
      {value.scoreDifference === 0 && <h2>No winners yet!</h2>}
      </div>
    ) 
  })
  console.log(renderMatch);
  return (
    <article>
        {renderMatch}
    </article>
  );
}

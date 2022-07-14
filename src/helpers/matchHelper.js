//create a function that returns player name
export const parseMatchesData = function (matchesData, playersData) {
  return matchesData.map((match) => {
    match.player1 = playersData[match.players[0]].name;
    match.player2 = playersData[match.players[1]].name;
    if (match.players[0] === match.winner) {
      match.winnerName = match.player1;
    } else if (match.players[1] === match.winner) {
      match.winnerName = match.player2;
    }
    return match;
  });
};

export default parseMatchesData;

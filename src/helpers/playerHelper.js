export const preparePlayerData = function (player, matchesData) {
  player.wins = addWinsToPlayer(player.id, matchesData);
  return player;
};

const addWinsToPlayer = function (id, matchesData) {
  let wins = 0;
  matchesData.forEach((match) => {
    if (match.winner === id) {
      wins++;
    }
  });
  return wins;
};

export default preparePlayerData;

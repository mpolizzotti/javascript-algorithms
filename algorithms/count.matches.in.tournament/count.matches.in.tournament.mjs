/**
 * Solution for Count of Matches in Tournament
 * see: https://leetcode.com/problems/count-of-matches-in-tournament/
 */
const numberOfMatchesWithRecursion = (teams, matches = 0) => {
  let currentMatches = 0;
  let totalMatches = matches;
  let teamsAdvance = 0;

  if (teams === 1) {
    return totalMatches;
  }

  if ((teams % 2) === 0) {// even.
    currentMatches = teams / 2;
    teamsAdvance = teams / 2;
  } else { // odd.
    currentMatches = (teams - 1) / 2;
    teamsAdvance = ((teams - 1) / 2) + 1;
  }

  totalMatches = totalMatches + currentMatches;
  return numberOfMatchesWithRecursion(teamsAdvance, totalMatches);
};

var numberOfMatchesWithWhileLoop = function(n) {
  let matches = 0;
  let teams = n;

  while (teams > 1) {
    if (teams % 2 === 0) { // even
      matches += teams / 2;
      teams = teams / 2;
    } else { // odd
      matches += (teams - 1) / 2;
      teams = ((teams - 1) / 2) + 1;
    }
  }

  return matches;
};

const teams = 7;
console.log(numberOfMatchesWithRecursion(teams));

export { numberOfMatchesWithRecursion, numberOfMatchesWithWhileLoop };

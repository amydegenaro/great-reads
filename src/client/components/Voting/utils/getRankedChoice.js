/*
  If a candidate wins a majority of first-preference votes, he or she is declared the winner.
  If no candidate wins a majority of first-preference votes, the candidate with the fewest first-preference votes is eliminated.
  First-preference votes cast for the failed candidate are eliminated, lifting the second-preference choices indicated on those ballots.
  A new tally is conducted to determine whether any candidate has won a majority of the adjusted votes.
  The process is repeated until a candidate wins an outright majority.
*/
import getMostVotes from './getMostVotes';

// VOTE HISTORY IS AN ARRAY OF OBJECTS
// const removeLowestVotes = (voteHistory, results) => {
//   const lowestVotes = results.sortedBooks[results.sortedBooks.length - 1];
//   const newHistory = voteHistory.map((vote) => {
//     let adjustedVote = vote;
//     if (vote[lowestVotes] === 1) {
//       adjustedVote = Object.keys(vote).reduce((newVote, book) => {
//         return {
//           ...newVote,
//           [book]: vote[book] ? vote[book] - 1 : null,
//         };
//       }, {});
//     }
//     return {
//       ...adjustedVote,
//       [lowestVotes]: null,
//     };
//   });
//   return newHistory;
// };

// const getRankedChoice = (voteHistory) => {
//   const totalVotes = voteHistory.length;
//   const results = getMostVotes(voteHistory);

//   if (results.votes < totalVotes / 2) {
//     const newHistory = removeLowestVotes(voteHistory, results);
//     return getRankedChoice(newHistory);
//   }

//   // doesn't handle ties
//   return results;
// };

// VOTE HISTORY IS AN ARRAY OF ARRAYS
const removeLowestVotes = (voteHistory, results) => {
  const lowestVotedBook = results.sortedBooks[results.sortedBooks.length - 1];
  const newHistory = voteHistory.map((vote) => {
    // if lowest voted book is first choice
    if (vote[0] === lowestVotedBook) {
      // remove first choice from array
      return vote.slice(1);
    }
    // otherwise return vote as-is
    return vote;
  });
  return newHistory;
};

const getRankedChoice = (voteHistory) => {
  console.log('*** voteHistory', voteHistory)

  const totalVotes = voteHistory.length;
  const results = getMostVotes(voteHistory);
  console.log('*** results', results);

  if (results.votes < totalVotes / 2) {
    const newHistory = removeLowestVotes(voteHistory, results);
    return getRankedChoice(newHistory);
  }

  // doesn't handle ties
  return results;
};

export default getRankedChoice;
